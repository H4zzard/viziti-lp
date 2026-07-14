import type { TourData } from './tour-data';

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface TourLink {
  targetId: string;
  yaw: number;
  pitch: number;
  label: string;
  /** Destino - origem, em metros (referencial north-aligned da pipeline). */
  delta: Vec3;
  /** Distância horizontal em metros — modula duração/amplitude da transição. */
  distance: number;
}

export interface TourNode {
  id: string;
  name: string;
  panorama: string;
  position: Vec3;
  links: TourLink[];
}

// Distância assumida quando o payload não tem posições utilizáveis.
const FALLBACK_DISTANCE = 2.5;

export function buildTourNodes(tour: TourData): TourNode[] {
  const waypointsPorId = new Map(tour.waypoints.map((waypoint) => [waypoint.id, waypoint]));
  const idsComFoto = new Set(
    tour.waypoints.filter((waypoint) => waypoint.foto).map((waypoint) => waypoint.id),
  );

  return tour.waypoints
    .filter((waypoint) => waypoint.foto)
    .map((waypoint) => ({
      id: waypoint.id,
      name: waypoint.nome,
      panorama: waypoint.foto as string,
      position: { x: waypoint.pos_x, y: waypoint.pos_y, z: waypoint.pos_z },
      links: waypoint.conexoes
        .filter((conexao) => idsComFoto.has(conexao.waypoint_destino_id))
        .map((conexao) => {
          const destino = waypointsPorId.get(conexao.waypoint_destino_id)!;
          let delta: Vec3 = {
            x: destino.pos_x - waypoint.pos_x,
            y: destino.pos_y - waypoint.pos_y,
            z: destino.pos_z - waypoint.pos_z,
          };
          let distance = Math.hypot(delta.x, delta.z);
          // yaw = atan2(dx, dz) é a mesma convenção do angulo_hotspot da
          // pipeline; recalcular das posições cobre payloads sem o campo.
          let yaw = (Math.atan2(delta.x, delta.z) * 180) / Math.PI;

          if (distance < 0.05) {
            // Sem deslocamento horizontal utilizável (payload sem posições ou
            // movimento puramente vertical): sintetiza a partir dos ângulos.
            yaw = conexao.angulo_hotspot ?? 0;
            const rad = (yaw * Math.PI) / 180;
            delta = {
              x: Math.sin(rad) * FALLBACK_DISTANCE,
              y: delta.y,
              z: Math.cos(rad) * FALLBACK_DISTANCE,
            };
            distance = FALLBACK_DISTANCE;
          }

          return {
            targetId: conexao.waypoint_destino_id,
            yaw,
            pitch: conexao.pitch_hotspot ?? -22,
            label: waypointsPorId.get(conexao.waypoint_destino_id)?.nome || 'Ir',
            delta,
            distance,
          };
        }),
    }));
}
