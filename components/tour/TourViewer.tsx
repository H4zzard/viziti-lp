'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

import { PanoramaViewer } from '@/lib/tour/panorama-viewer';
import { tourData } from '@/lib/tour/tour-data';
import { buildTourNodes } from '@/lib/tour/tour-graph';
import '@/lib/tour/tour-viewer.css';

export function TourViewer() {
  const panoramaRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<PanoramaViewer | null>(null);

  const [progress, setProgress] = useState({ loaded: 0, total: 0 });
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [previewId, setPreviewId] = useState<string | null>(null);

  const nodes = useMemo(() => buildTourNodes(tourData), []);
  const previewNode = previewId ? nodes.find((node) => node.id === previewId) : null;

  useEffect(() => {
    if (!panoramaRef.current || nodes.length === 0) return;

    const container = panoramaRef.current;
    const viewer = new PanoramaViewer(container, {
      mode: 'viewer',
      defaultFov: 100,
      defaultPitch: -8,
      onNodeChange: (nodeId) => setActiveId(nodeId),
      onHotspotHover: (nodeId) => setPreviewId(nodeId),
    });
    viewerRef.current = viewer;
    viewer.setNodes(nodes);

    let cancelled = false;

    viewer
      .preload((loaded, total) => {
        if (!cancelled) setProgress({ loaded, total });
      })
      .then(async () => {
        if (cancelled) return;
        const firstNode = nodes[0];
        await viewer.loadNode(firstNode.id, { yaw: 0, pitch: -8, fov: 100 });
        if (!cancelled) {
          setReady(true);
          setActiveId(firstNode.id);
        }
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
      viewer.dispose();
      viewerRef.current = null;
    };
  }, [nodes]);

  function handleSelect(nodeId: string) {
    viewerRef.current?.jumpToNode(nodeId);
    setNavOpen(false);
  }

  if (nodes.length === 0) {
    return (
      <div className="tour-viewer">
        <div className="tour-viewer__loading">
          <p>Tour sem panoramas</p>
        </div>
      </div>
    );
  }

  return (
    <div className="tour-viewer">
      <div ref={panoramaRef} className="tour-viewer__panorama" />

      <button
        type="button"
        className="tour-viewer__nav-toggle"
        aria-expanded={navOpen}
        aria-controls="tour-viewer-nav"
        onClick={() => setNavOpen((value) => !value)}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>
        Ambientes
      </button>

      <nav id="tour-viewer-nav" className={`tour-viewer__nav ${navOpen ? 'is-open' : ''}`}>
        {nodes.map((node) => (
          <button
            key={node.id}
            type="button"
            className={activeId === node.id ? 'is-active' : ''}
            onClick={() => handleSelect(node.id)}
            onMouseEnter={() => setPreviewId(node.id)}
            onMouseLeave={() => setPreviewId(null)}
            onFocus={() => setPreviewId(node.id)}
            onBlur={() => setPreviewId(null)}
          >
            {node.name}
          </button>
        ))}
      </nav>

      {ready && previewNode && (
        <div className="tour-viewer__preview" aria-hidden="true">
          <div
            className="tour-viewer__preview-pan"
            style={{ backgroundImage: `url(${previewNode.panorama})` }}
          />
          <span className="tour-viewer__preview-name">{previewNode.name}</span>
        </div>
      )}

      {ready && (
        <p className="tour-viewer__hint">Clique na bolinha no chão para ir até o próximo ambiente</p>
      )}

      {!ready && (
        <div className="tour-viewer__loading">
          {error ? (
            <>
              <p>Erro ao carregar panoramas</p>
              <span>Tente recarregar a página</span>
            </>
          ) : (
            <>
              <p>Carregando tour...</p>
              <span>
                {progress.loaded} / {progress.total}
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
