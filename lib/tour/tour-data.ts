// Payload congelado do tour `Video Real - Hall` (id 7d414fca-ecce-403d-9a93-eec3b7c5bd3a).
// Gerado a partir de GET /tours/7d414fca-ecce-403d-9a93-eec3b7c5bd3a do servidor maper 3k, com o
// campo foto reescrito de /storage/ para /tour/ (caminho estático do Next).
// Não chama nenhum backend em runtime — 100% standalone.

export interface TourConexao {
  id: string;
  waypoint_destino_id: string;
  angulo_hotspot: number | null;
  pitch_hotspot: number | null;
}

export interface TourWaypoint {
  id: string;
  nome: string;
  ordem: number;
  foto: string | null;
  pos_x: number;
  pos_y: number;
  pos_z: number;
  conexoes: TourConexao[];
}

export interface TourData {
  id: string;
  nome: string;
  criado_em: string;
  waypoints: TourWaypoint[];
}

export const tourData: TourData = {
  "id": "7d414fca-ecce-403d-9a93-eec3b7c5bd3a",
  "nome": "Video Real - Hall",
  "criado_em": "2026-07-11 21:25:39",
  "waypoints": [
    {
      "id": "43fdd39a-00dd-45a2-a457-cd56f9f6aaeb",
      "nome": "Ponto 1",
      "ordem": 0,
      "foto": "/tour/43fdd39a-00dd-45a2-a457-cd56f9f6aaeb.jpg",
      "pos_x": 0,
      "pos_y": 0,
      "pos_z": 0,
      "conexoes": [
        {
          "id": "bd02875f-97cc-41a2-8f34-ab295ed83a28",
          "waypoint_destino_id": "5df536fe-8e03-483b-9b8d-d853dd4b5025",
          "angulo_hotspot": 137.3,
          "pitch_hotspot": -11.5
        },
        {
          "id": "2a37c936-a3ef-4386-85ab-7be7af929917",
          "waypoint_destino_id": "87913ae3-1c91-4dec-9f4d-1813223e9214",
          "angulo_hotspot": -164.7,
          "pitch_hotspot": 0
        },
        {
          "id": "31354709-e54c-41b3-b61e-50cbc49ac168",
          "waypoint_destino_id": "aed206da-0c3f-4c2c-b4ae-6a87de31b80f",
          "angulo_hotspot": -133.5,
          "pitch_hotspot": 10.6
        },
        {
          "id": "57f2f6e2-0ef3-4fc0-a715-9b610871ab3d",
          "waypoint_destino_id": "c43e41ad-adf0-4384-bb06-d321a3bb33e9",
          "angulo_hotspot": 148.3,
          "pitch_hotspot": -11.4
        }
      ]
    },
    {
      "id": "5df536fe-8e03-483b-9b8d-d853dd4b5025",
      "nome": "Ponto 2",
      "ordem": 1,
      "foto": "/tour/5df536fe-8e03-483b-9b8d-d853dd4b5025.jpg",
      "pos_x": 2.84,
      "pos_y": -0.04,
      "pos_z": -3.08,
      "conexoes": [
        {
          "id": "504f9871-8223-4410-97a2-05c2f27053a7",
          "waypoint_destino_id": "43fdd39a-00dd-45a2-a457-cd56f9f6aaeb",
          "angulo_hotspot": -42.7,
          "pitch_hotspot": -10.5
        },
        {
          "id": "7b41f669-dfa7-4acc-a4d5-71e47df06416",
          "waypoint_destino_id": "c43e41ad-adf0-4384-bb06-d321a3bb33e9",
          "angulo_hotspot": 159.7,
          "pitch_hotspot": -11.3
        },
        {
          "id": "83bc0a6e-3a8a-41d6-8254-9ec3e417ee9a",
          "waypoint_destino_id": "87913ae3-1c91-4dec-9f4d-1813223e9214",
          "angulo_hotspot": -102,
          "pitch_hotspot": 0.7
        },
        {
          "id": "55c3f11d-4df6-4e92-a679-2e26a6223c25",
          "waypoint_destino_id": "59b6c724-7acb-4f67-80b8-c0ab0a6efb82",
          "angulo_hotspot": -127.5,
          "pitch_hotspot": -28.9
        }
      ]
    },
    {
      "id": "c43e41ad-adf0-4384-bb06-d321a3bb33e9",
      "nome": "Ponto 3",
      "ordem": 2,
      "foto": "/tour/c43e41ad-adf0-4384-bb06-d321a3bb33e9.jpg",
      "pos_x": 4.26,
      "pos_y": -0.06,
      "pos_z": -6.91,
      "conexoes": [
        {
          "id": "2472a23d-7ba3-4fbf-9713-79dfc68fa877",
          "waypoint_destino_id": "5df536fe-8e03-483b-9b8d-d853dd4b5025",
          "angulo_hotspot": -20.3,
          "pitch_hotspot": -10.7
        },
        {
          "id": "900ee49b-af22-4973-a137-44386fa9ac3d",
          "waypoint_destino_id": "87913ae3-1c91-4dec-9f4d-1813223e9214",
          "angulo_hotspot": -60.6,
          "pitch_hotspot": -3.1
        },
        {
          "id": "27850094-696b-4728-87cb-92fecfa908c6",
          "waypoint_destino_id": "43fdd39a-00dd-45a2-a457-cd56f9f6aaeb",
          "angulo_hotspot": -31.7,
          "pitch_hotspot": -10.6
        },
        {
          "id": "8f0698aa-a1be-4eaa-bc50-4280a86829cc",
          "waypoint_destino_id": "09850685-6926-4f30-91bf-c309c3e33e50",
          "angulo_hotspot": -144.1,
          "pitch_hotspot": -42.2
        }
      ]
    },
    {
      "id": "87913ae3-1c91-4dec-9f4d-1813223e9214",
      "nome": "Ponto 4",
      "ordem": 3,
      "foto": "/tour/87913ae3-1c91-4dec-9f4d-1813223e9214.jpg",
      "pos_x": -1.07,
      "pos_y": 0.79,
      "pos_z": -3.91,
      "conexoes": [
        {
          "id": "29ee229c-c4f7-43c9-b3b4-acda60e6f6e3",
          "waypoint_destino_id": "c43e41ad-adf0-4384-bb06-d321a3bb33e9",
          "angulo_hotspot": 119.4,
          "pitch_hotspot": -18.9
        },
        {
          "id": "267fee2f-d3f1-4e33-b03c-def03639fddc",
          "waypoint_destino_id": "aed206da-0c3f-4c2c-b4ae-6a87de31b80f",
          "angulo_hotspot": -98.9,
          "pitch_hotspot": 14.9
        },
        {
          "id": "ca6c7298-7da0-4556-8719-dc3698117b66",
          "waypoint_destino_id": "5df536fe-8e03-483b-9b8d-d853dd4b5025",
          "angulo_hotspot": 78,
          "pitch_hotspot": -22.7
        },
        {
          "id": "5ddc224e-aa15-4f21-8b27-baea63789387",
          "waypoint_destino_id": "43fdd39a-00dd-45a2-a457-cd56f9f6aaeb",
          "angulo_hotspot": 15.3,
          "pitch_hotspot": -22
        },
        {
          "id": "264f4cde-e004-40b0-8fc7-bcf9a9ea8c99",
          "waypoint_destino_id": "59b6c724-7acb-4f67-80b8-c0ab0a6efb82",
          "angulo_hotspot": -160.6,
          "pitch_hotspot": -53.1
        },
        {
          "id": "6a2c6a40-ebb8-4fde-b74e-9d41654ca09b",
          "waypoint_destino_id": "27e85a38-2c3c-4a1b-8d8b-1d0aa0dce4b5",
          "angulo_hotspot": -128.7,
          "pitch_hotspot": -42.9
        }
      ]
    },
    {
      "id": "aed206da-0c3f-4c2c-b4ae-6a87de31b80f",
      "nome": "Ponto 5",
      "ordem": 4,
      "foto": "/tour/aed206da-0c3f-4c2c-b4ae-6a87de31b80f.jpg",
      "pos_x": -4.72,
      "pos_y": 2.58,
      "pos_z": -4.48,
      "conexoes": [
        {
          "id": "28922d21-dc61-46ce-b4db-c2026745ae52",
          "waypoint_destino_id": "87913ae3-1c91-4dec-9f4d-1813223e9214",
          "angulo_hotspot": 81.1,
          "pitch_hotspot": -36.9
        },
        {
          "id": "3630e082-438a-4907-bafc-afd3faf6ddf8",
          "waypoint_destino_id": "7dd4bddb-d290-43e1-9bdc-6bf14ef494f9",
          "angulo_hotspot": -93.2,
          "pitch_hotspot": 3.8
        },
        {
          "id": "fd29166d-801e-4b34-8e7d-c10fec14dec6",
          "waypoint_destino_id": "59b6c724-7acb-4f67-80b8-c0ab0a6efb82",
          "angulo_hotspot": 132.8,
          "pitch_hotspot": -63.6
        },
        {
          "id": "f059d813-97d4-4aa0-b8ad-f782b8bce1bc",
          "waypoint_destino_id": "7d0798de-5ca4-42ad-babe-868823eea783",
          "angulo_hotspot": -135.9,
          "pitch_hotspot": 1.6
        },
        {
          "id": "45ab3b3e-f679-4a69-942c-cd6e53804645",
          "waypoint_destino_id": "43fdd39a-00dd-45a2-a457-cd56f9f6aaeb",
          "angulo_hotspot": 46.5,
          "pitch_hotspot": -32.6
        },
        {
          "id": "94a0bb60-7ef0-4a9b-9ad8-1422d8b34522",
          "waypoint_destino_id": "27e85a38-2c3c-4a1b-8d8b-1d0aa0dce4b5",
          "angulo_hotspot": -156.6,
          "pitch_hotspot": -67.6
        }
      ]
    },
    {
      "id": "7dd4bddb-d290-43e1-9bdc-6bf14ef494f9",
      "nome": "Ponto 6",
      "ordem": 5,
      "foto": "/tour/7dd4bddb-d290-43e1-9bdc-6bf14ef494f9.jpg",
      "pos_x": -9,
      "pos_y": 3.71,
      "pos_z": -4.72,
      "conexoes": [
        {
          "id": "44217f93-e69c-4799-86e4-f95b526073ef",
          "waypoint_destino_id": "aed206da-0c3f-4c2c-b4ae-6a87de31b80f",
          "angulo_hotspot": 86.8,
          "pitch_hotspot": -25.8
        },
        {
          "id": "38fd9163-ad57-4f75-be14-820e727c1d6a",
          "waypoint_destino_id": "ef72cc5a-deed-47ec-bdc4-e478c2ad9e1f",
          "angulo_hotspot": -64.6,
          "pitch_hotspot": -8.6
        },
        {
          "id": "d2a0da58-42be-4542-8c23-38288c7f001b",
          "waypoint_destino_id": "7d0798de-5ca4-42ad-babe-868823eea783",
          "angulo_hotspot": 178.2,
          "pitch_hotspot": -8.2
        },
        {
          "id": "a784d481-d308-4d02-8b29-5e0b1fd17e91",
          "waypoint_destino_id": "bdf1cedc-18c3-4dff-8ac5-b0bbc3c91e56",
          "angulo_hotspot": 172,
          "pitch_hotspot": -10.7
        },
        {
          "id": "da37b050-f3a0-437f-9638-d1e4a2ea16f1",
          "waypoint_destino_id": "77e6151b-7c96-4a0e-851c-d4cf91a40260",
          "angulo_hotspot": -76.2,
          "pitch_hotspot": -9.7
        }
      ]
    },
    {
      "id": "ef72cc5a-deed-47ec-bdc4-e478c2ad9e1f",
      "nome": "Ponto 7",
      "ordem": 6,
      "foto": "/tour/ef72cc5a-deed-47ec-bdc4-e478c2ad9e1f.jpg",
      "pos_x": -12.9,
      "pos_y": 3.89,
      "pos_z": -2.87,
      "conexoes": [
        {
          "id": "119c5ed6-3207-42a0-8785-fd2d89d82118",
          "waypoint_destino_id": "7dd4bddb-d290-43e1-9bdc-6bf14ef494f9",
          "angulo_hotspot": 115.4,
          "pitch_hotspot": -13.4
        },
        {
          "id": "36464136-143c-4c04-b54f-af47d7c1551d",
          "waypoint_destino_id": "77e6151b-7c96-4a0e-851c-d4cf91a40260",
          "angulo_hotspot": -87.9,
          "pitch_hotspot": -10.9
        },
        {
          "id": "cdfe9c67-7255-4bdc-9ffc-72c8d023f46c",
          "waypoint_destino_id": "7d0798de-5ca4-42ad-babe-868823eea783",
          "angulo_hotspot": 145.6,
          "pitch_hotspot": -10.8
        },
        {
          "id": "a71833f9-0d8b-447b-8785-83734293480b",
          "waypoint_destino_id": "80777a15-3854-4070-809e-da8aad00b156",
          "angulo_hotspot": -110.9,
          "pitch_hotspot": -9.5
        },
        {
          "id": "288fa138-849b-45fa-9f10-27a2d7c0de23",
          "waypoint_destino_id": "5c882c93-5829-426f-a2a8-9c62b59135f1",
          "angulo_hotspot": -73.3,
          "pitch_hotspot": -79.3
        },
        {
          "id": "c2d83ce1-1dcb-42ee-b07d-de483530dec1",
          "waypoint_destino_id": "33131086-e14d-4f13-aaf3-709eb3a7f635",
          "angulo_hotspot": -1.8,
          "pitch_hotspot": -79.1
        }
      ]
    },
    {
      "id": "77e6151b-7c96-4a0e-851c-d4cf91a40260",
      "nome": "Ponto 8",
      "ordem": 7,
      "foto": "/tour/77e6151b-7c96-4a0e-851c-d4cf91a40260.jpg",
      "pos_x": -17.18,
      "pos_y": 3.9,
      "pos_z": -2.71,
      "conexoes": [
        {
          "id": "7b2e7523-4806-4d4c-8e94-dd971e51f7ed",
          "waypoint_destino_id": "ef72cc5a-deed-47ec-bdc4-e478c2ad9e1f",
          "angulo_hotspot": 92.1,
          "pitch_hotspot": -11.1
        },
        {
          "id": "08ef49e7-eefa-4c77-a411-1cfd65598983",
          "waypoint_destino_id": "80777a15-3854-4070-809e-da8aad00b156",
          "angulo_hotspot": -135,
          "pitch_hotspot": -8.4
        },
        {
          "id": "03871855-2807-4e18-9259-afb966ca2e3a",
          "waypoint_destino_id": "7dd4bddb-d290-43e1-9bdc-6bf14ef494f9",
          "angulo_hotspot": 103.8,
          "pitch_hotspot": -12.3
        },
        {
          "id": "2430309f-4541-49d9-b1af-db888d3955f3",
          "waypoint_destino_id": "5c882c93-5829-426f-a2a8-9c62b59135f1",
          "angulo_hotspot": 50.9,
          "pitch_hotspot": -85
        },
        {
          "id": "eecbce00-aeb5-4d7b-a601-9e4f0509d250",
          "waypoint_destino_id": "05d46a9e-046d-41ee-91ee-07375d229d72",
          "angulo_hotspot": -179.3,
          "pitch_hotspot": -80.6
        }
      ]
    },
    {
      "id": "80777a15-3854-4070-809e-da8aad00b156",
      "nome": "Ponto 9",
      "ordem": 8,
      "foto": "/tour/80777a15-3854-4070-809e-da8aad00b156.jpg",
      "pos_x": -20.09,
      "pos_y": 4.09,
      "pos_z": -5.62,
      "conexoes": [
        {
          "id": "80a89fd7-be3d-42a1-b529-2f41b021c7fb",
          "waypoint_destino_id": "77e6151b-7c96-4a0e-851c-d4cf91a40260",
          "angulo_hotspot": 45,
          "pitch_hotspot": -13.6
        },
        {
          "id": "18b1df4f-c2c3-4de6-9952-351590ea9da3",
          "waypoint_destino_id": "7d0798de-5ca4-42ad-babe-868823eea783",
          "angulo_hotspot": 105.6,
          "pitch_hotspot": -11.9
        },
        {
          "id": "065bac45-8c47-461a-bcfd-5e16103b5444",
          "waypoint_destino_id": "ef72cc5a-deed-47ec-bdc4-e478c2ad9e1f",
          "angulo_hotspot": 69.1,
          "pitch_hotspot": -12.5
        },
        {
          "id": "7a43ccf9-d415-4e88-af62-e75b29dd1463",
          "waypoint_destino_id": "05d46a9e-046d-41ee-91ee-07375d229d72",
          "angulo_hotspot": 96.2,
          "pitch_hotspot": -82.9
        }
      ]
    },
    {
      "id": "7d0798de-5ca4-42ad-babe-868823eea783",
      "nome": "Ponto 10",
      "ordem": 9,
      "foto": "/tour/7d0798de-5ca4-42ad-babe-868823eea783.jpg",
      "pos_x": -8.87,
      "pos_y": 3.91,
      "pos_z": -8.76,
      "conexoes": [
        {
          "id": "b71cae85-8580-44b0-ab6b-6081ac79295c",
          "waypoint_destino_id": "80777a15-3854-4070-809e-da8aad00b156",
          "angulo_hotspot": -74.4,
          "pitch_hotspot": -10.1
        },
        {
          "id": "cf0a27ff-ce0d-4d91-85b6-07e9d625c7dd",
          "waypoint_destino_id": "bdf1cedc-18c3-4dff-8ac5-b0bbc3c91e56",
          "angulo_hotspot": 166.2,
          "pitch_hotspot": -13.2
        },
        {
          "id": "92e2afff-9352-407b-b8d6-c04adbee6f03",
          "waypoint_destino_id": "7dd4bddb-d290-43e1-9bdc-6bf14ef494f9",
          "angulo_hotspot": -1.8,
          "pitch_hotspot": -13.8
        },
        {
          "id": "872e4db3-acee-41fc-a39a-f8f6d26f2924",
          "waypoint_destino_id": "aed206da-0c3f-4c2c-b4ae-6a87de31b80f",
          "angulo_hotspot": 44.1,
          "pitch_hotspot": -23.6
        },
        {
          "id": "6298e785-66ca-4aa2-952e-0cbb794d6987",
          "waypoint_destino_id": "ef72cc5a-deed-47ec-bdc4-e478c2ad9e1f",
          "angulo_hotspot": -34.4,
          "pitch_hotspot": -11.2
        },
        {
          "id": "194fd0bc-3d10-42df-a53b-94962d3f5192",
          "waypoint_destino_id": "93c3e030-7ac0-448f-ba18-74d5aeea88b0",
          "angulo_hotspot": 141.7,
          "pitch_hotspot": -12.2
        }
      ]
    },
    {
      "id": "bdf1cedc-18c3-4dff-8ac5-b0bbc3c91e56",
      "nome": "Ponto 11",
      "ordem": 10,
      "foto": "/tour/bdf1cedc-18c3-4dff-8ac5-b0bbc3c91e56.jpg",
      "pos_x": -7.86,
      "pos_y": 3.75,
      "pos_z": -12.87,
      "conexoes": [
        {
          "id": "7e927b1f-74c3-4a6f-ba46-b667eda5955b",
          "waypoint_destino_id": "7d0798de-5ca4-42ad-babe-868823eea783",
          "angulo_hotspot": -13.8,
          "pitch_hotspot": -8.8
        },
        {
          "id": "0c1ff1c1-cc73-4624-bf42-df6707f71e60",
          "waypoint_destino_id": "93c3e030-7ac0-448f-ba18-74d5aeea88b0",
          "angulo_hotspot": 116.3,
          "pitch_hotspot": -11
        },
        {
          "id": "3ae727de-77dd-48b3-98aa-08ea17ef7d86",
          "waypoint_destino_id": "11798a4d-3d1a-4e2f-b531-006dd8807524",
          "angulo_hotspot": -143.8,
          "pitch_hotspot": -12.2
        },
        {
          "id": "2f71fff4-9600-4332-99aa-fc1e5545aea6",
          "waypoint_destino_id": "c657ce58-8132-4a51-bb51-c5d507df710a",
          "angulo_hotspot": 152.5,
          "pitch_hotspot": -11.4
        },
        {
          "id": "bf221a24-8c62-4310-83bb-21e10bc6a684",
          "waypoint_destino_id": "ec1223c3-5e76-4075-9238-8554b9f0067e",
          "angulo_hotspot": 102.3,
          "pitch_hotspot": -11.2
        },
        {
          "id": "feb5fed6-825f-4180-a31d-c0e5b5b65e54",
          "waypoint_destino_id": "7dd4bddb-d290-43e1-9bdc-6bf14ef494f9",
          "angulo_hotspot": -8,
          "pitch_hotspot": -11.3
        }
      ]
    },
    {
      "id": "93c3e030-7ac0-448f-ba18-74d5aeea88b0",
      "nome": "Ponto 12",
      "ordem": 11,
      "foto": "/tour/93c3e030-7ac0-448f-ba18-74d5aeea88b0.jpg",
      "pos_x": -4.18,
      "pos_y": 3.75,
      "pos_z": -14.69,
      "conexoes": [
        {
          "id": "44c3c57d-6d1c-4467-88ec-95c9e419bcb4",
          "waypoint_destino_id": "bdf1cedc-18c3-4dff-8ac5-b0bbc3c91e56",
          "angulo_hotspot": -63.7,
          "pitch_hotspot": -11
        },
        {
          "id": "d798f7ab-18af-4d87-a87f-28b53b701f03",
          "waypoint_destino_id": "ec1223c3-5e76-4075-9238-8554b9f0067e",
          "angulo_hotspot": 88.6,
          "pitch_hotspot": -11.4
        },
        {
          "id": "760d42ef-10c9-443e-8e48-0314a257da98",
          "waypoint_destino_id": "c657ce58-8132-4a51-bb51-c5d507df710a",
          "angulo_hotspot": -172.5,
          "pitch_hotspot": -11.7
        },
        {
          "id": "321b1a2c-2be4-4ea4-a09c-7824a3026806",
          "waypoint_destino_id": "11798a4d-3d1a-4e2f-b531-006dd8807524",
          "angulo_hotspot": -104.1,
          "pitch_hotspot": -11.8
        },
        {
          "id": "71238834-69ab-4cbc-a6b1-bdcca1907ec3",
          "waypoint_destino_id": "7d0798de-5ca4-42ad-babe-868823eea783",
          "angulo_hotspot": -38.3,
          "pitch_hotspot": -9.8
        },
        {
          "id": "be40768e-5d74-4282-b76b-0ff7ca226d1a",
          "waypoint_destino_id": "ea50b87c-2ee9-48dc-bf81-dd538fe51135",
          "angulo_hotspot": 163.4,
          "pitch_hotspot": -10.8
        }
      ]
    },
    {
      "id": "ec1223c3-5e76-4075-9238-8554b9f0067e",
      "nome": "Ponto 13",
      "ordem": 12,
      "foto": "/tour/ec1223c3-5e76-4075-9238-8554b9f0067e.jpg",
      "pos_x": 0.04,
      "pos_y": 3.72,
      "pos_z": -14.59,
      "conexoes": [
        {
          "id": "a17762fd-6202-4584-88fa-b2379a361c05",
          "waypoint_destino_id": "93c3e030-7ac0-448f-ba18-74d5aeea88b0",
          "angulo_hotspot": -91.4,
          "pitch_hotspot": -10.6
        },
        {
          "id": "b857c89b-d790-4547-b5d0-152b454f1b43",
          "waypoint_destino_id": "11798a4d-3d1a-4e2f-b531-006dd8807524",
          "angulo_hotspot": -99,
          "pitch_hotspot": -11.3
        },
        {
          "id": "9a943d86-8030-4ef4-85eb-d0ed2467adad",
          "waypoint_destino_id": "c657ce58-8132-4a51-bb51-c5d507df710a",
          "angulo_hotspot": -132,
          "pitch_hotspot": -11.2
        },
        {
          "id": "934a08ab-db0f-4007-97bd-82057debbea1",
          "waypoint_destino_id": "ea50b87c-2ee9-48dc-bf81-dd538fe51135",
          "angulo_hotspot": -164.5,
          "pitch_hotspot": -10.6
        },
        {
          "id": "c6e4de2d-e5c4-49b5-b44f-c36b6f9bcc25",
          "waypoint_destino_id": "bdf1cedc-18c3-4dff-8ac5-b0bbc3c91e56",
          "angulo_hotspot": -77.7,
          "pitch_hotspot": -10.8
        },
        {
          "id": "6d76a351-12db-41f5-8ad2-7ec4fc1e73d9",
          "waypoint_destino_id": "09850685-6926-4f30-91bf-c309c3e33e50",
          "angulo_hotspot": -12.8,
          "pitch_hotspot": -85
        }
      ]
    },
    {
      "id": "11798a4d-3d1a-4e2f-b531-006dd8807524",
      "nome": "Ponto 14",
      "ordem": 13,
      "foto": "/tour/11798a4d-3d1a-4e2f-b531-006dd8807524.jpg",
      "pos_x": -10.32,
      "pos_y": 3.66,
      "pos_z": -16.23,
      "conexoes": [
        {
          "id": "d46ed29c-bdd7-41df-904e-31508a8adbd1",
          "waypoint_destino_id": "ec1223c3-5e76-4075-9238-8554b9f0067e",
          "angulo_hotspot": 81,
          "pitch_hotspot": -10.7
        },
        {
          "id": "a4820b70-1229-4ba0-8fbd-aa6be354fdef",
          "waypoint_destino_id": "c657ce58-8132-4a51-bb51-c5d507df710a",
          "angulo_hotspot": 115.4,
          "pitch_hotspot": -10.6
        },
        {
          "id": "2f45f452-8727-4873-ac6b-c4f968767c1d",
          "waypoint_destino_id": "bdf1cedc-18c3-4dff-8ac5-b0bbc3c91e56",
          "angulo_hotspot": 36.2,
          "pitch_hotspot": -9.8
        },
        {
          "id": "6675ac09-da38-4335-a98d-fee7ba1c76e4",
          "waypoint_destino_id": "f1238fdf-ff22-49eb-b26b-7b852ec904c7",
          "angulo_hotspot": 173,
          "pitch_hotspot": -3.2
        },
        {
          "id": "9ec6b38c-4d9c-4caf-bc3b-1c3bd6b70068",
          "waypoint_destino_id": "93c3e030-7ac0-448f-ba18-74d5aeea88b0",
          "angulo_hotspot": 75.9,
          "pitch_hotspot": -10.2
        },
        {
          "id": "a9645993-493d-4a7e-9c09-c084a901eb6f",
          "waypoint_destino_id": "01472c3e-a8ce-45e0-a79a-055729817c65",
          "angulo_hotspot": -159.1,
          "pitch_hotspot": -6.5
        }
      ]
    },
    {
      "id": "c657ce58-8132-4a51-bb51-c5d507df710a",
      "nome": "Ponto 15",
      "ordem": 14,
      "foto": "/tour/c657ce58-8132-4a51-bb51-c5d507df710a.jpg",
      "pos_x": -4.73,
      "pos_y": 3.7,
      "pos_z": -18.88,
      "conexoes": [
        {
          "id": "18988e2f-926e-413e-8817-781cd32597c6",
          "waypoint_destino_id": "11798a4d-3d1a-4e2f-b531-006dd8807524",
          "angulo_hotspot": -64.6,
          "pitch_hotspot": -11.4
        },
        {
          "id": "32971497-66d3-40d8-8815-a93abe4e0dea",
          "waypoint_destino_id": "ea50b87c-2ee9-48dc-bf81-dd538fe51135",
          "angulo_hotspot": 138.7,
          "pitch_hotspot": -10
        },
        {
          "id": "c0208499-60d7-4714-a801-39c88d51b5bf",
          "waypoint_destino_id": "93c3e030-7ac0-448f-ba18-74d5aeea88b0",
          "angulo_hotspot": 7.5,
          "pitch_hotspot": -10.3
        },
        {
          "id": "0d365285-6a4f-4f5f-a43a-5c4771300ca4",
          "waypoint_destino_id": "f1238fdf-ff22-49eb-b26b-7b852ec904c7",
          "angulo_hotspot": -113.7,
          "pitch_hotspot": -4.4
        },
        {
          "id": "c4b6b6d6-668c-4392-aea5-2b605a4c0cba",
          "waypoint_destino_id": "ec1223c3-5e76-4075-9238-8554b9f0067e",
          "angulo_hotspot": 48,
          "pitch_hotspot": -10.8
        },
        {
          "id": "8f5f8414-052d-431e-b316-e7391aec40bb",
          "waypoint_destino_id": "bdf1cedc-18c3-4dff-8ac5-b0bbc3c91e56",
          "angulo_hotspot": -27.5,
          "pitch_hotspot": -10.6
        }
      ]
    },
    {
      "id": "ea50b87c-2ee9-48dc-bf81-dd538fe51135",
      "nome": "Ponto 16",
      "ordem": 15,
      "foto": "/tour/ea50b87c-2ee9-48dc-bf81-dd538fe51135.jpg",
      "pos_x": -2.01,
      "pos_y": 3.77,
      "pos_z": -21.98,
      "conexoes": [
        {
          "id": "57533c98-b55e-421f-ae4f-5efbfc25e6e7",
          "waypoint_destino_id": "c657ce58-8132-4a51-bb51-c5d507df710a",
          "angulo_hotspot": -41.3,
          "pitch_hotspot": -12
        },
        {
          "id": "075c0b41-af9e-4137-a3c3-f6156bcfe8cd",
          "waypoint_destino_id": "3560b71f-24df-4e20-a514-ed2e47bbf116",
          "angulo_hotspot": 105.1,
          "pitch_hotspot": -11
        },
        {
          "id": "f82274f7-c714-4691-8108-49bd9c82f7f0",
          "waypoint_destino_id": "2d8cb83a-35fb-4328-95c2-df1098d176e5",
          "angulo_hotspot": -177,
          "pitch_hotspot": -8.5
        },
        {
          "id": "76925f7a-2769-456a-8f2a-1e47d54e07a9",
          "waypoint_destino_id": "93c3e030-7ac0-448f-ba18-74d5aeea88b0",
          "angulo_hotspot": -16.6,
          "pitch_hotspot": -11.2
        },
        {
          "id": "8e9effa9-d2ae-4bfc-89b4-a6d8c783b166",
          "waypoint_destino_id": "ec1223c3-5e76-4075-9238-8554b9f0067e",
          "angulo_hotspot": 15.5,
          "pitch_hotspot": -11.4
        },
        {
          "id": "09e65862-3ffd-44a8-bec4-d4536f17559a",
          "waypoint_destino_id": "f1238fdf-ff22-49eb-b26b-7b852ec904c7",
          "angulo_hotspot": -83.3,
          "pitch_hotspot": -6.9
        }
      ]
    },
    {
      "id": "3560b71f-24df-4e20-a514-ed2e47bbf116",
      "nome": "Ponto 17",
      "ordem": 16,
      "foto": "/tour/3560b71f-24df-4e20-a514-ed2e47bbf116.jpg",
      "pos_x": 2.09,
      "pos_y": 3.77,
      "pos_z": -23.09,
      "conexoes": [
        {
          "id": "b980f71c-2d85-4898-b853-aa000e4ca895",
          "waypoint_destino_id": "ea50b87c-2ee9-48dc-bf81-dd538fe51135",
          "angulo_hotspot": -74.9,
          "pitch_hotspot": -11
        },
        {
          "id": "7d360211-4103-42c8-9ded-32449ad191ce",
          "waypoint_destino_id": "2d8cb83a-35fb-4328-95c2-df1098d176e5",
          "angulo_hotspot": -124.5,
          "pitch_hotspot": -9
        },
        {
          "id": "d6749fdb-6a50-461d-b391-4721a524b337",
          "waypoint_destino_id": "ee40f6e4-e58e-4d4a-be40-8a794940cdcf",
          "angulo_hotspot": -66.3,
          "pitch_hotspot": -85
        },
        {
          "id": "aa60b9b0-05a6-4bf3-9f8b-951349915846",
          "waypoint_destino_id": "3e119669-33b9-4ed2-b5e7-78cc7d8a99b5",
          "angulo_hotspot": 118.7,
          "pitch_hotspot": -83.2
        },
        {
          "id": "84ba06c5-5945-4c45-ba81-fd8564cf77b1",
          "waypoint_destino_id": "763165f6-ccbf-47ca-85a1-f02d0670347b",
          "angulo_hotspot": -136.5,
          "pitch_hotspot": -10
        }
      ]
    },
    {
      "id": "2d8cb83a-35fb-4328-95c2-df1098d176e5",
      "nome": "Ponto 18",
      "ordem": 17,
      "foto": "/tour/2d8cb83a-35fb-4328-95c2-df1098d176e5.jpg",
      "pos_x": -2.22,
      "pos_y": 3.95,
      "pos_z": -26.05,
      "conexoes": [
        {
          "id": "e340b55a-51b7-4af9-ad52-7e67f319a5b7",
          "waypoint_destino_id": "3560b71f-24df-4e20-a514-ed2e47bbf116",
          "angulo_hotspot": 55.5,
          "pitch_hotspot": -13
        },
        {
          "id": "5090db82-7f66-47a0-8345-57b269cd6b5c",
          "waypoint_destino_id": "763165f6-ccbf-47ca-85a1-f02d0670347b",
          "angulo_hotspot": -151.6,
          "pitch_hotspot": -11.3
        },
        {
          "id": "1f4869f9-25cc-446d-95e0-b0d7413cc27b",
          "waypoint_destino_id": "ea50b87c-2ee9-48dc-bf81-dd538fe51135",
          "angulo_hotspot": 3,
          "pitch_hotspot": -13.5
        },
        {
          "id": "8ab9a1d5-c89e-4367-bd62-ff035f98585d",
          "waypoint_destino_id": "06e4264c-4e0c-49c4-8d3f-03cb34b75b2c",
          "angulo_hotspot": -127.3,
          "pitch_hotspot": -8.5
        },
        {
          "id": "32730134-6fd8-498d-a6c2-a87c01504ac9",
          "waypoint_destino_id": "a51b2ad8-a9ab-43e9-990c-c06db0d1a584",
          "angulo_hotspot": 103.8,
          "pitch_hotspot": -76.8
        },
        {
          "id": "3214fe61-9137-498c-b534-2382245292fe",
          "waypoint_destino_id": "42ed5209-36e7-455f-9c38-e79d29acadc4",
          "angulo_hotspot": -98.8,
          "pitch_hotspot": -8.9
        }
      ]
    },
    {
      "id": "763165f6-ccbf-47ca-85a1-f02d0670347b",
      "nome": "Ponto 19",
      "ordem": 18,
      "foto": "/tour/763165f6-ccbf-47ca-85a1-f02d0670347b.jpg",
      "pos_x": -4.21,
      "pos_y": 3.93,
      "pos_z": -29.73,
      "conexoes": [
        {
          "id": "d039a8cd-9346-4193-87fa-87de500753e7",
          "waypoint_destino_id": "2d8cb83a-35fb-4328-95c2-df1098d176e5",
          "angulo_hotspot": 28.4,
          "pitch_hotspot": -10.7
        },
        {
          "id": "bc811ca8-b239-4fbd-b72c-4f3332900964",
          "waypoint_destino_id": "06e4264c-4e0c-49c4-8d3f-03cb34b75b2c",
          "angulo_hotspot": -102.8,
          "pitch_hotspot": -6.2
        },
        {
          "id": "b57752b2-0c49-43cd-88d1-951211c3d627",
          "waypoint_destino_id": "42ed5209-36e7-455f-9c38-e79d29acadc4",
          "angulo_hotspot": -71.9,
          "pitch_hotspot": -8.3
        },
        {
          "id": "590e384f-3c36-414d-bed3-653336d2a956",
          "waypoint_destino_id": "5034f0a1-a35a-4afc-bd99-84249c662990",
          "angulo_hotspot": -56.3,
          "pitch_hotspot": -77.5
        },
        {
          "id": "37030f89-0183-4675-ba0b-871deab221c5",
          "waypoint_destino_id": "d81911c4-a7ab-4733-90ff-dc151ef98810",
          "angulo_hotspot": -115.6,
          "pitch_hotspot": -70.8
        },
        {
          "id": "d116c28c-f003-48ca-966d-89d7862abe8d",
          "waypoint_destino_id": "3560b71f-24df-4e20-a514-ed2e47bbf116",
          "angulo_hotspot": 43.5,
          "pitch_hotspot": -12
        }
      ]
    },
    {
      "id": "06e4264c-4e0c-49c4-8d3f-03cb34b75b2c",
      "nome": "Ponto 20",
      "ordem": 19,
      "foto": "/tour/06e4264c-4e0c-49c4-8d3f-03cb34b75b2c.jpg",
      "pos_x": -8.26,
      "pos_y": 4.28,
      "pos_z": -30.65,
      "conexoes": [
        {
          "id": "ea011cc1-fefc-451f-abc9-868267cc243d",
          "waypoint_destino_id": "763165f6-ccbf-47ca-85a1-f02d0670347b",
          "angulo_hotspot": 77.2,
          "pitch_hotspot": -15.8
        },
        {
          "id": "c20e8489-0606-4362-9c1f-75c36dab487a",
          "waypoint_destino_id": "42ed5209-36e7-455f-9c38-e79d29acadc4",
          "angulo_hotspot": -42.5,
          "pitch_hotspot": -11
        },
        {
          "id": "f3138d94-2338-46cb-a36d-911ae65ca398",
          "waypoint_destino_id": "2d8cb83a-35fb-4328-95c2-df1098d176e5",
          "angulo_hotspot": 52.7,
          "pitch_hotspot": -13.5
        },
        {
          "id": "0c55330d-3ff5-4e1e-9884-ba6b0895ccd3",
          "waypoint_destino_id": "d81911c4-a7ab-4733-90ff-dc151ef98810",
          "angulo_hotspot": -177.8,
          "pitch_hotspot": -85
        },
        {
          "id": "1f98398d-df74-4cf5-b140-8f551b346ea7",
          "waypoint_destino_id": "01472c3e-a8ce-45e0-a79a-055729817c65",
          "angulo_hotspot": -35.5,
          "pitch_hotspot": -10.9
        },
        {
          "id": "7be59c54-87a6-4c20-8670-f405ce96ae2b",
          "waypoint_destino_id": "5034f0a1-a35a-4afc-bd99-84249c662990",
          "angulo_hotspot": 23.5,
          "pitch_hotspot": -80.5
        }
      ]
    },
    {
      "id": "42ed5209-36e7-455f-9c38-e79d29acadc4",
      "nome": "Ponto 21",
      "ordem": 20,
      "foto": "/tour/42ed5209-36e7-455f-9c38-e79d29acadc4.jpg",
      "pos_x": -11.2,
      "pos_y": 4.28,
      "pos_z": -27.44,
      "conexoes": [
        {
          "id": "e57b0c54-f7b5-4dfc-815c-7d0bd9b0e823",
          "waypoint_destino_id": "06e4264c-4e0c-49c4-8d3f-03cb34b75b2c",
          "angulo_hotspot": 137.5,
          "pitch_hotspot": -11
        },
        {
          "id": "6f2f7962-5dc6-47d6-b263-d8c0f5ee4664",
          "waypoint_destino_id": "01472c3e-a8ce-45e0-a79a-055729817c65",
          "angulo_hotspot": -28.3,
          "pitch_hotspot": -10.9
        },
        {
          "id": "940b4e15-19c8-4e62-8eba-0961cdd50e11",
          "waypoint_destino_id": "f1238fdf-ff22-49eb-b26b-7b852ec904c7",
          "angulo_hotspot": 13,
          "pitch_hotspot": -10.6
        },
        {
          "id": "894c34ce-0c69-4cba-82f9-a714802ad6d6",
          "waypoint_destino_id": "763165f6-ccbf-47ca-85a1-f02d0670347b",
          "angulo_hotspot": 108.1,
          "pitch_hotspot": -13.7
        },
        {
          "id": "9a546fa5-e49f-415b-a534-19fba5a15569",
          "waypoint_destino_id": "2d8cb83a-35fb-4328-95c2-df1098d176e5",
          "angulo_hotspot": 81.2,
          "pitch_hotspot": -13.1
        },
        {
          "id": "397a1e54-c529-4daa-a386-01f28de30814",
          "waypoint_destino_id": "5034f0a1-a35a-4afc-bd99-84249c662990",
          "angulo_hotspot": 95.5,
          "pitch_hotspot": -73.9
        }
      ]
    },
    {
      "id": "01472c3e-a8ce-45e0-a79a-055729817c65",
      "nome": "Ponto 22",
      "ordem": 21,
      "foto": "/tour/01472c3e-a8ce-45e0-a79a-055729817c65.jpg",
      "pos_x": -13.19,
      "pos_y": 4.29,
      "pos_z": -23.75,
      "conexoes": [
        {
          "id": "7ed0ef97-f648-467c-8d56-3432b3bc276b",
          "waypoint_destino_id": "42ed5209-36e7-455f-9c38-e79d29acadc4",
          "angulo_hotspot": 151.7,
          "pitch_hotspot": -11.1
        },
        {
          "id": "03302d36-5159-4254-8040-72b4d80e318d",
          "waypoint_destino_id": "f1238fdf-ff22-49eb-b26b-7b852ec904c7",
          "angulo_hotspot": 52.2,
          "pitch_hotspot": -10.5
        },
        {
          "id": "8e36ecf7-14ab-44f3-8eee-a306eb432240",
          "waypoint_destino_id": "11798a4d-3d1a-4e2f-b531-006dd8807524",
          "angulo_hotspot": 20.9,
          "pitch_hotspot": -15.5
        },
        {
          "id": "7f754806-41f9-4377-986e-00929ec1e7bf",
          "waypoint_destino_id": "06e4264c-4e0c-49c4-8d3f-03cb34b75b2c",
          "angulo_hotspot": 144.5,
          "pitch_hotspot": -11.1
        }
      ]
    },
    {
      "id": "f1238fdf-ff22-49eb-b26b-7b852ec904c7",
      "nome": "Ponto 23",
      "ordem": 22,
      "foto": "/tour/f1238fdf-ff22-49eb-b26b-7b852ec904c7.jpg",
      "pos_x": -9.73,
      "pos_y": 4.33,
      "pos_z": -21.07,
      "conexoes": [
        {
          "id": "1b09c7cc-ab5d-42a4-8e4e-5f48c948ccb8",
          "waypoint_destino_id": "01472c3e-a8ce-45e0-a79a-055729817c65",
          "angulo_hotspot": -127.8,
          "pitch_hotspot": -11.5
        },
        {
          "id": "dd2a3248-34c4-498d-8888-ba5e0c0fd0ae",
          "waypoint_destino_id": "59b6c724-7acb-4f67-80b8-c0ab0a6efb82",
          "angulo_hotspot": 28.2,
          "pitch_hotspot": -32.7
        },
        {
          "id": "60364c81-5ee5-46df-aa0e-74df0f21e6c6",
          "waypoint_destino_id": "11798a4d-3d1a-4e2f-b531-006dd8807524",
          "angulo_hotspot": -7,
          "pitch_hotspot": -18.8
        },
        {
          "id": "8ece0a6b-9250-40f5-abec-fe4eb452e1e4",
          "waypoint_destino_id": "c657ce58-8132-4a51-bb51-c5d507df710a",
          "angulo_hotspot": 66.3,
          "pitch_hotspot": -17.6
        },
        {
          "id": "dd7b944f-5830-400c-b9ef-3a003a7c6606",
          "waypoint_destino_id": "42ed5209-36e7-455f-9c38-e79d29acadc4",
          "angulo_hotspot": -167,
          "pitch_hotspot": -11.4
        },
        {
          "id": "143ab0cf-7be2-482e-b74b-b27773d2dd2f",
          "waypoint_destino_id": "ea50b87c-2ee9-48dc-bf81-dd538fe51135",
          "angulo_hotspot": 96.7,
          "pitch_hotspot": -15.1
        }
      ]
    },
    {
      "id": "59b6c724-7acb-4f67-80b8-c0ab0a6efb82",
      "nome": "Ponto 24",
      "ordem": 23,
      "foto": "/tour/59b6c724-7acb-4f67-80b8-c0ab0a6efb82.jpg",
      "pos_x": -2.12,
      "pos_y": -2.06,
      "pos_z": -6.89,
      "conexoes": [
        {
          "id": "4a1e592f-8840-4ffb-bcf0-1982c2cb0ad4",
          "waypoint_destino_id": "f1238fdf-ff22-49eb-b26b-7b852ec904c7",
          "angulo_hotspot": -151.8,
          "pitch_hotspot": 10.7
        },
        {
          "id": "b9db0353-dad9-4012-ad5b-457d4212eab3",
          "waypoint_destino_id": "27e85a38-2c3c-4a1b-8d8b-1d0aa0dce4b5",
          "angulo_hotspot": -105.9,
          "pitch_hotspot": -27.8
        },
        {
          "id": "a1dc7109-3c49-48c7-bcdc-834b60cc8944",
          "waypoint_destino_id": "87913ae3-1c91-4dec-9f4d-1813223e9214",
          "angulo_hotspot": 19.4,
          "pitch_hotspot": 15
        },
        {
          "id": "fea00008-dbb6-46a5-9341-b510ae0023d0",
          "waypoint_destino_id": "aed206da-0c3f-4c2c-b4ae-6a87de31b80f",
          "angulo_hotspot": -47.2,
          "pitch_hotspot": 15
        },
        {
          "id": "93e42559-8213-467d-8cc2-d53ceeb6c047",
          "waypoint_destino_id": "80fa3af8-c943-444c-a3bd-1ce5df8ce8f2",
          "angulo_hotspot": -153.2,
          "pitch_hotspot": -40.4
        },
        {
          "id": "e29e7d4b-25b5-4bc7-8d0b-5b10975fe74c",
          "waypoint_destino_id": "5df536fe-8e03-483b-9b8d-d853dd4b5025",
          "angulo_hotspot": 52.5,
          "pitch_hotspot": 6.9
        }
      ]
    },
    {
      "id": "27e85a38-2c3c-4a1b-8d8b-1d0aa0dce4b5",
      "nome": "Ponto 25",
      "ordem": 24,
      "foto": "/tour/27e85a38-2c3c-4a1b-8d8b-1d0aa0dce4b5.jpg",
      "pos_x": -6.27,
      "pos_y": -3.36,
      "pos_z": -8.07,
      "conexoes": [
        {
          "id": "43d59a30-a345-4719-885e-28759be0130c",
          "waypoint_destino_id": "59b6c724-7acb-4f67-80b8-c0ab0a6efb82",
          "angulo_hotspot": 74.1,
          "pitch_hotspot": 5.8
        },
        {
          "id": "cd61a518-9492-486a-9962-390445f15347",
          "waypoint_destino_id": "e05c8e12-14ae-4a68-bb2d-69892167a06f",
          "angulo_hotspot": -105.4,
          "pitch_hotspot": -20.5
        },
        {
          "id": "686ae95f-e682-410a-81d6-63778c69e57f",
          "waypoint_destino_id": "3f276da4-002b-4a7e-97fe-7d9193091acd",
          "angulo_hotspot": -30,
          "pitch_hotspot": -35.7
        },
        {
          "id": "eb2e6450-8f88-42cd-958c-b15f6e109c89",
          "waypoint_destino_id": "80fa3af8-c943-444c-a3bd-1ce5df8ce8f2",
          "angulo_hotspot": 153.2,
          "pitch_hotspot": -33.8
        },
        {
          "id": "9068ff0e-a7bf-45d6-abf7-3c67909e6bca",
          "waypoint_destino_id": "aed206da-0c3f-4c2c-b4ae-6a87de31b80f",
          "angulo_hotspot": 23.4,
          "pitch_hotspot": 15
        },
        {
          "id": "238916d0-2339-4ca2-912d-9ce1b6c052d1",
          "waypoint_destino_id": "87913ae3-1c91-4dec-9f4d-1813223e9214",
          "angulo_hotspot": 51.3,
          "pitch_hotspot": 15
        }
      ]
    },
    {
      "id": "e05c8e12-14ae-4a68-bb2d-69892167a06f",
      "nome": "Ponto 26",
      "ordem": 25,
      "foto": "/tour/e05c8e12-14ae-4a68-bb2d-69892167a06f.jpg",
      "pos_x": -10.49,
      "pos_y": -4.09,
      "pos_z": -9.23,
      "conexoes": [
        {
          "id": "19349bc4-6049-4106-aa01-cd8b2cbb5d4d",
          "waypoint_destino_id": "27e85a38-2c3c-4a1b-8d8b-1d0aa0dce4b5",
          "angulo_hotspot": 74.6,
          "pitch_hotspot": -1.5
        },
        {
          "id": "806e86e6-fcbc-4058-8fef-8a0ee9cff407",
          "waypoint_destino_id": "f3b6a1d9-0979-40a7-a087-345f283780cb",
          "angulo_hotspot": -94.9,
          "pitch_hotspot": -17.7
        },
        {
          "id": "c5fc85ab-164d-4a50-be76-580a71f0b388",
          "waypoint_destino_id": "3f276da4-002b-4a7e-97fe-7d9193091acd",
          "angulo_hotspot": 28.3,
          "pitch_hotspot": -22.1
        },
        {
          "id": "eb8b7558-edf8-4c5f-97c3-932ab51d90e4",
          "waypoint_destino_id": "80fa3af8-c943-444c-a3bd-1ce5df8ce8f2",
          "angulo_hotspot": 111.5,
          "pitch_hotspot": -19.2
        },
        {
          "id": "bbf4b07f-40e2-40c2-b808-d3744780118f",
          "waypoint_destino_id": "05d46a9e-046d-41ee-91ee-07375d229d72",
          "angulo_hotspot": -63.9,
          "pitch_hotspot": -16
        },
        {
          "id": "915ff62c-b637-40cb-bd6b-a70f21f9218c",
          "waypoint_destino_id": "b9471630-6fdf-48e5-a90b-9851abaac52a",
          "angulo_hotspot": 138.6,
          "pitch_hotspot": -10.9
        }
      ]
    },
    {
      "id": "f3b6a1d9-0979-40a7-a087-345f283780cb",
      "nome": "Ponto 27",
      "ordem": 26,
      "foto": "/tour/f3b6a1d9-0979-40a7-a087-345f283780cb.jpg",
      "pos_x": -14.9,
      "pos_y": -4.61,
      "pos_z": -9.61,
      "conexoes": [
        {
          "id": "06c7a245-e3a4-439f-b7a5-8bce2aa1dcff",
          "waypoint_destino_id": "e05c8e12-14ae-4a68-bb2d-69892167a06f",
          "angulo_hotspot": 85.1,
          "pitch_hotspot": -4.3
        },
        {
          "id": "ad107094-fde4-4904-aa05-93c89536dc3c",
          "waypoint_destino_id": "05d46a9e-046d-41ee-91ee-07375d229d72",
          "angulo_hotspot": -32.2,
          "pitch_hotspot": -12.7
        },
        {
          "id": "fb786fd5-2ef5-41ed-bfe4-f30438b87022",
          "waypoint_destino_id": "5c882c93-5829-426f-a2a8-9c62b59135f1",
          "angulo_hotspot": -9.3,
          "pitch_hotspot": -11.6
        },
        {
          "id": "ebfa9a6a-6213-4a5d-b734-3bd356e42a85",
          "waypoint_destino_id": "3f276da4-002b-4a7e-97fe-7d9193091acd",
          "angulo_hotspot": 54.9,
          "pitch_hotspot": -14.2
        }
      ]
    },
    {
      "id": "05d46a9e-046d-41ee-91ee-07375d229d72",
      "nome": "Ponto 28",
      "ordem": 27,
      "foto": "/tour/05d46a9e-046d-41ee-91ee-07375d229d72.jpg",
      "pos_x": -17.22,
      "pos_y": -4.74,
      "pos_z": -5.93,
      "conexoes": [
        {
          "id": "8b627f4b-5c48-4be0-a054-842bf7940b24",
          "waypoint_destino_id": "f3b6a1d9-0979-40a7-a087-345f283780cb",
          "angulo_hotspot": 147.8,
          "pitch_hotspot": -9.3
        },
        {
          "id": "ce035c6d-e4ee-4aa9-84f1-3ec46b32e052",
          "waypoint_destino_id": "5c882c93-5829-426f-a2a8-9c62b59135f1",
          "angulo_hotspot": 14.6,
          "pitch_hotspot": -10.3
        },
        {
          "id": "8f957a41-215d-4c67-9c8a-fb0171ce9157",
          "waypoint_destino_id": "e05c8e12-14ae-4a68-bb2d-69892167a06f",
          "angulo_hotspot": 116.1,
          "pitch_hotspot": -6
        },
        {
          "id": "4cc7bf58-a2a5-44f8-ab6d-0afe97c793e3",
          "waypoint_destino_id": "33131086-e14d-4f13-aaf3-709eb3a7f635",
          "angulo_hotspot": 32.8,
          "pitch_hotspot": -11.1
        },
        {
          "id": "873912bb-8de0-4ed1-80e5-afa1c30a73ce",
          "waypoint_destino_id": "77e6151b-7c96-4a0e-851c-d4cf91a40260",
          "angulo_hotspot": 0.7,
          "pitch_hotspot": 15
        },
        {
          "id": "176691cf-c45e-4863-9517-3c8b4c80f4c5",
          "waypoint_destino_id": "80777a15-3854-4070-809e-da8aad00b156",
          "angulo_hotspot": -83.8,
          "pitch_hotspot": 15
        }
      ]
    },
    {
      "id": "5c882c93-5829-426f-a2a8-9c62b59135f1",
      "nome": "Ponto 29",
      "ordem": 28,
      "foto": "/tour/5c882c93-5829-426f-a2a8-9c62b59135f1.jpg",
      "pos_x": -16.17,
      "pos_y": -4.69,
      "pos_z": -1.89,
      "conexoes": [
        {
          "id": "96330f79-ef7d-4a42-9813-b19313406dee",
          "waypoint_destino_id": "05d46a9e-046d-41ee-91ee-07375d229d72",
          "angulo_hotspot": -165.4,
          "pitch_hotspot": -11.7
        },
        {
          "id": "36f24cfd-fc74-4efe-a624-afdc38486be3",
          "waypoint_destino_id": "33131086-e14d-4f13-aaf3-709eb3a7f635",
          "angulo_hotspot": 51.7,
          "pitch_hotspot": -11.9
        },
        {
          "id": "f205d825-8317-4ba5-9d1a-03055efc25e6",
          "waypoint_destino_id": "42bd80eb-91b9-41bc-9ac9-409f5746ad4b",
          "angulo_hotspot": 76.4,
          "pitch_hotspot": -13.5
        },
        {
          "id": "82d85b1e-65d2-4078-ae6f-3b9768a7d4be",
          "waypoint_destino_id": "f3b6a1d9-0979-40a7-a087-345f283780cb",
          "angulo_hotspot": 170.7,
          "pitch_hotspot": -10.4
        },
        {
          "id": "c54668cf-1b49-4921-b87c-70ab8015b549",
          "waypoint_destino_id": "77e6151b-7c96-4a0e-851c-d4cf91a40260",
          "angulo_hotspot": -129.1,
          "pitch_hotspot": 15
        },
        {
          "id": "c0bdd0ee-14a0-46ac-a031-12d7d63ef637",
          "waypoint_destino_id": "ef72cc5a-deed-47ec-bdc4-e478c2ad9e1f",
          "angulo_hotspot": 106.7,
          "pitch_hotspot": 15
        }
      ]
    },
    {
      "id": "33131086-e14d-4f13-aaf3-709eb3a7f635",
      "nome": "Ponto 30",
      "ordem": 29,
      "foto": "/tour/33131086-e14d-4f13-aaf3-709eb3a7f635.jpg",
      "pos_x": -13.01,
      "pos_y": -4.75,
      "pos_z": 0.61,
      "conexoes": [
        {
          "id": "e714b7e9-1a9d-4642-819f-518d2df006be",
          "waypoint_destino_id": "5c882c93-5829-426f-a2a8-9c62b59135f1",
          "angulo_hotspot": -128.3,
          "pitch_hotspot": -10.1
        },
        {
          "id": "05c44e2f-1b51-43b7-bddf-4d5722fff16c",
          "waypoint_destino_id": "42bd80eb-91b9-41bc-9ac9-409f5746ad4b",
          "angulo_hotspot": 100.2,
          "pitch_hotspot": -14.7
        },
        {
          "id": "4daed470-7440-48df-b5dd-dbf549c5950f",
          "waypoint_destino_id": "3f276da4-002b-4a7e-97fe-7d9193091acd",
          "angulo_hotspot": 138.2,
          "pitch_hotspot": -13.5
        },
        {
          "id": "ae9aefa2-6966-446e-8bbd-f66b734675c2",
          "waypoint_destino_id": "05d46a9e-046d-41ee-91ee-07375d229d72",
          "angulo_hotspot": -147.2,
          "pitch_hotspot": -10.9
        },
        {
          "id": "dc395c72-5057-4785-ac6b-aa5031faea47",
          "waypoint_destino_id": "ef72cc5a-deed-47ec-bdc4-e478c2ad9e1f",
          "angulo_hotspot": 178.2,
          "pitch_hotspot": 15
        }
      ]
    },
    {
      "id": "42bd80eb-91b9-41bc-9ac9-409f5746ad4b",
      "nome": "Ponto 31",
      "ordem": 30,
      "foto": "/tour/42bd80eb-91b9-41bc-9ac9-409f5746ad4b.jpg",
      "pos_x": -8.9,
      "pos_y": -5.02,
      "pos_z": -0.13,
      "conexoes": [
        {
          "id": "957e93a9-2472-4543-8c4c-712d27889da1",
          "waypoint_destino_id": "33131086-e14d-4f13-aaf3-709eb3a7f635",
          "angulo_hotspot": -79.8,
          "pitch_hotspot": -7.3
        },
        {
          "id": "03ba24fd-cb6a-4d54-9abb-6657c33feb9b",
          "waypoint_destino_id": "3f276da4-002b-4a7e-97fe-7d9193091acd",
          "angulo_hotspot": 170.7,
          "pitch_hotspot": -11.6
        },
        {
          "id": "c9757a8b-c672-4f09-a653-c2034d619fad",
          "waypoint_destino_id": "5c882c93-5829-426f-a2a8-9c62b59135f1",
          "angulo_hotspot": -103.6,
          "pitch_hotspot": -8.5
        }
      ]
    },
    {
      "id": "3f276da4-002b-4a7e-97fe-7d9193091acd",
      "nome": "Ponto 32",
      "ordem": 31,
      "foto": "/tour/3f276da4-002b-4a7e-97fe-7d9193091acd.jpg",
      "pos_x": -8.13,
      "pos_y": -5.07,
      "pos_z": -4.85,
      "conexoes": [
        {
          "id": "47d535b6-acd9-4a31-8821-de4a171a2681",
          "waypoint_destino_id": "42bd80eb-91b9-41bc-9ac9-409f5746ad4b",
          "angulo_hotspot": -9.3,
          "pitch_hotspot": -10.4
        },
        {
          "id": "f07b3c2b-e207-4599-b227-756e2394797e",
          "waypoint_destino_id": "80fa3af8-c943-444c-a3bd-1ce5df8ce8f2",
          "angulo_hotspot": 151.6,
          "pitch_hotspot": -10.6
        },
        {
          "id": "fd7237c8-3b54-4808-86a1-36b795ab3ab1",
          "waypoint_destino_id": "27e85a38-2c3c-4a1b-8d8b-1d0aa0dce4b5",
          "angulo_hotspot": 150,
          "pitch_hotspot": 13.7
        },
        {
          "id": "f6ff474e-8ec7-47c8-99ce-ff809d65d67f",
          "waypoint_destino_id": "e05c8e12-14ae-4a68-bb2d-69892167a06f",
          "angulo_hotspot": -151.7,
          "pitch_hotspot": 0.1
        },
        {
          "id": "fdb1f8ea-3035-4cbc-8c9e-134ec3b9cb33",
          "waypoint_destino_id": "33131086-e14d-4f13-aaf3-709eb3a7f635",
          "angulo_hotspot": -41.8,
          "pitch_hotspot": -8.5
        },
        {
          "id": "effaa231-cd7f-4607-a0db-65f278835119",
          "waypoint_destino_id": "f3b6a1d9-0979-40a7-a087-345f283780cb",
          "angulo_hotspot": -125.1,
          "pitch_hotspot": -7.8
        }
      ]
    },
    {
      "id": "80fa3af8-c943-444c-a3bd-1ce5df8ce8f2",
      "nome": "Ponto 33",
      "ordem": 32,
      "foto": "/tour/80fa3af8-c943-444c-a3bd-1ce5df8ce8f2.jpg",
      "pos_x": -4.49,
      "pos_y": -5.02,
      "pos_z": -11.59,
      "conexoes": [
        {
          "id": "bc929b47-5d54-4517-be35-0395a749254f",
          "waypoint_destino_id": "3f276da4-002b-4a7e-97fe-7d9193091acd",
          "angulo_hotspot": -28.4,
          "pitch_hotspot": -11.4
        },
        {
          "id": "6f747949-1ccc-40ce-bc5d-56c7941fa2fe",
          "waypoint_destino_id": "09850685-6926-4f30-91bf-c309c3e33e50",
          "angulo_hotspot": 110.7,
          "pitch_hotspot": -7.6
        },
        {
          "id": "8f48cad0-92dd-480d-bb6b-babfa88c49eb",
          "waypoint_destino_id": "27e85a38-2c3c-4a1b-8d8b-1d0aa0dce4b5",
          "angulo_hotspot": -26.8,
          "pitch_hotspot": 11.8
        },
        {
          "id": "87ba1754-edf3-406b-b076-1beb5686f48a",
          "waypoint_destino_id": "b9471630-6fdf-48e5-a90b-9851abaac52a",
          "angulo_hotspot": -178.1,
          "pitch_hotspot": 1.4
        },
        {
          "id": "11576ec7-9fce-4d7a-9bfc-02a54dff9849",
          "waypoint_destino_id": "59b6c724-7acb-4f67-80b8-c0ab0a6efb82",
          "angulo_hotspot": 26.8,
          "pitch_hotspot": 15
        },
        {
          "id": "2d024415-2504-4440-bcb6-d5ba32b4fa25",
          "waypoint_destino_id": "e05c8e12-14ae-4a68-bb2d-69892167a06f",
          "angulo_hotspot": -68.5,
          "pitch_hotspot": -2.8
        }
      ]
    },
    {
      "id": "09850685-6926-4f30-91bf-c309c3e33e50",
      "nome": "Ponto 34",
      "ordem": 33,
      "foto": "/tour/09850685-6926-4f30-91bf-c309c3e33e50.jpg",
      "pos_x": -0.28,
      "pos_y": -4.75,
      "pos_z": -13.18,
      "conexoes": [
        {
          "id": "f3abee44-41ca-4e7b-be57-3df2ce091285",
          "waypoint_destino_id": "80fa3af8-c943-444c-a3bd-1ce5df8ce8f2",
          "angulo_hotspot": -69.3,
          "pitch_hotspot": -14.4
        },
        {
          "id": "f2a2a5be-739c-4606-bb69-a815ab3384b2",
          "waypoint_destino_id": "b9471630-6fdf-48e5-a90b-9851abaac52a",
          "angulo_hotspot": -121.8,
          "pitch_hotspot": -3.5
        },
        {
          "id": "a9dc61d9-dfb5-4ab9-ac86-84308b6aca71",
          "waypoint_destino_id": "0def0ede-560e-4378-865f-9e78a9c5f10d",
          "angulo_hotspot": -157.7,
          "pitch_hotspot": -5.3
        },
        {
          "id": "8e5f388e-865e-46e6-b167-d1b9299f1c92",
          "waypoint_destino_id": "ec1223c3-5e76-4075-9238-8554b9f0067e",
          "angulo_hotspot": 167.2,
          "pitch_hotspot": 15
        },
        {
          "id": "4b11a7ec-be44-4f15-9981-8a97503ed386",
          "waypoint_destino_id": "c43e41ad-adf0-4384-bb06-d321a3bb33e9",
          "angulo_hotspot": 35.9,
          "pitch_hotspot": 15
        }
      ]
    },
    {
      "id": "b9471630-6fdf-48e5-a90b-9851abaac52a",
      "nome": "Ponto 35",
      "ordem": 34,
      "foto": "/tour/b9471630-6fdf-48e5-a90b-9851abaac52a.jpg",
      "pos_x": -4.63,
      "pos_y": -4.08,
      "pos_z": -15.88,
      "conexoes": [
        {
          "id": "7c6c5fa3-b692-404a-b7f2-e63ac8b31398",
          "waypoint_destino_id": "09850685-6926-4f30-91bf-c309c3e33e50",
          "angulo_hotspot": 58.2,
          "pitch_hotspot": -18.5
        },
        {
          "id": "cbf6ee97-58e3-41e6-95da-3bb058033d59",
          "waypoint_destino_id": "0def0ede-560e-4378-865f-9e78a9c5f10d",
          "angulo_hotspot": 158.2,
          "pitch_hotspot": -10.3
        },
        {
          "id": "50cbb695-84f4-48e8-bce0-41f492170303",
          "waypoint_destino_id": "80fa3af8-c943-444c-a3bd-1ce5df8ce8f2",
          "angulo_hotspot": 1.9,
          "pitch_hotspot": -23.4
        },
        {
          "id": "01649776-8f3f-4e49-8062-f887cf83b7c0",
          "waypoint_destino_id": "ee40f6e4-e58e-4d4a-be40-8a794940cdcf",
          "angulo_hotspot": 142,
          "pitch_hotspot": -9
        },
        {
          "id": "1767ba91-88ba-4499-a1a7-01ae4800b9b3",
          "waypoint_destino_id": "e05c8e12-14ae-4a68-bb2d-69892167a06f",
          "angulo_hotspot": -41.4,
          "pitch_hotspot": -11.1
        }
      ]
    },
    {
      "id": "0def0ede-560e-4378-865f-9e78a9c5f10d",
      "nome": "Ponto 36",
      "ordem": 35,
      "foto": "/tour/0def0ede-560e-4378-865f-9e78a9c5f10d.jpg",
      "pos_x": -3.03,
      "pos_y": -4.03,
      "pos_z": -19.88,
      "conexoes": [
        {
          "id": "ed118872-990f-4dc8-81df-13ce15d1f3cc",
          "waypoint_destino_id": "b9471630-6fdf-48e5-a90b-9851abaac52a",
          "angulo_hotspot": -21.8,
          "pitch_hotspot": -11.7
        },
        {
          "id": "0522ef0a-2141-4ad9-ac65-eb63bba563ae",
          "waypoint_destino_id": "ee40f6e4-e58e-4d4a-be40-8a794940cdcf",
          "angulo_hotspot": 125.6,
          "pitch_hotspot": -7.8
        },
        {
          "id": "40c39e19-6457-46f0-892f-80c10e19a3d8",
          "waypoint_destino_id": "ed640272-c22d-438d-a2f8-9b30a7e4afb7",
          "angulo_hotspot": -179.2,
          "pitch_hotspot": -9.2
        },
        {
          "id": "308b9d76-cc37-4819-89b3-e9288054c987",
          "waypoint_destino_id": "09850685-6926-4f30-91bf-c309c3e33e50",
          "angulo_hotspot": 22.3,
          "pitch_hotspot": -16.7
        },
        {
          "id": "d7032cae-6411-4b89-87c6-456bbb97a7c1",
          "waypoint_destino_id": "a51b2ad8-a9ab-43e9-990c-c06db0d1a584",
          "angulo_hotspot": 149.2,
          "pitch_hotspot": -9
        },
        {
          "id": "f06cdc25-852c-42bc-96a8-5951d4888c7d",
          "waypoint_destino_id": "3e119669-33b9-4ed2-b5e7-78cc7d8a99b5",
          "angulo_hotspot": 121.1,
          "pitch_hotspot": -8.6
        }
      ]
    },
    {
      "id": "ee40f6e4-e58e-4d4a-be40-8a794940cdcf",
      "nome": "Ponto 37",
      "ordem": 36,
      "foto": "/tour/ee40f6e4-e58e-4d4a-be40-8a794940cdcf.jpg",
      "pos_x": 0.43,
      "pos_y": -3.79,
      "pos_z": -22.36,
      "conexoes": [
        {
          "id": "40129e45-aaf8-4849-91e5-f4edbe448950",
          "waypoint_destino_id": "0def0ede-560e-4378-865f-9e78a9c5f10d",
          "angulo_hotspot": -54.4,
          "pitch_hotspot": -14.2
        },
        {
          "id": "1f152b58-161d-43c2-b7f0-eb92dabb3df0",
          "waypoint_destino_id": "3e119669-33b9-4ed2-b5e7-78cc7d8a99b5",
          "angulo_hotspot": 116.6,
          "pitch_hotspot": -9.5
        },
        {
          "id": "9ff8f0b9-8aa6-4dba-ab4e-435fbb26e35d",
          "waypoint_destino_id": "a51b2ad8-a9ab-43e9-990c-c06db0d1a584",
          "angulo_hotspot": 171.2,
          "pitch_hotspot": -10.4
        },
        {
          "id": "a494189c-600e-459c-988b-b6c76c46f6b4",
          "waypoint_destino_id": "ed640272-c22d-438d-a2f8-9b30a7e4afb7",
          "angulo_hotspot": -140.8,
          "pitch_hotspot": -11.3
        },
        {
          "id": "4b86f6f8-8a8f-44ec-a80d-cb03a640f3ae",
          "waypoint_destino_id": "3560b71f-24df-4e20-a514-ed2e47bbf116",
          "angulo_hotspot": 113.7,
          "pitch_hotspot": 15
        },
        {
          "id": "67a3dd68-bed3-4d91-9b34-a73955911398",
          "waypoint_destino_id": "b9471630-6fdf-48e5-a90b-9851abaac52a",
          "angulo_hotspot": -38,
          "pitch_hotspot": -13
        }
      ]
    },
    {
      "id": "3e119669-33b9-4ed2-b5e7-78cc7d8a99b5",
      "nome": "Ponto 38",
      "ordem": 37,
      "foto": "/tour/3e119669-33b9-4ed2-b5e7-78cc7d8a99b5.jpg",
      "pos_x": 4.19,
      "pos_y": -3.68,
      "pos_z": -24.24,
      "conexoes": [
        {
          "id": "2c41fbe6-9fc8-4130-84ca-4cdd6f6c2bee",
          "waypoint_destino_id": "ee40f6e4-e58e-4d4a-be40-8a794940cdcf",
          "angulo_hotspot": -63.4,
          "pitch_hotspot": -12.5
        },
        {
          "id": "0fd84b61-8bda-425f-87cc-8c898203f2ce",
          "waypoint_destino_id": "a51b2ad8-a9ab-43e9-990c-c06db0d1a584",
          "angulo_hotspot": -130.7,
          "pitch_hotspot": -11.9
        },
        {
          "id": "07a305f0-6d8a-4470-99f0-b2b2b43eccf7",
          "waypoint_destino_id": "ed640272-c22d-438d-a2f8-9b30a7e4afb7",
          "angulo_hotspot": -108.7,
          "pitch_hotspot": -12
        },
        {
          "id": "72a89dac-76eb-4161-8f00-f47fcdd2a50e",
          "waypoint_destino_id": "3560b71f-24df-4e20-a514-ed2e47bbf116",
          "angulo_hotspot": -61.3,
          "pitch_hotspot": 15
        },
        {
          "id": "43c332ea-5448-447c-89f3-0a90e7798830",
          "waypoint_destino_id": "0def0ede-560e-4378-865f-9e78a9c5f10d",
          "angulo_hotspot": -58.9,
          "pitch_hotspot": -13.4
        }
      ]
    },
    {
      "id": "a51b2ad8-a9ab-43e9-990c-c06db0d1a584",
      "nome": "Ponto 39",
      "ordem": 38,
      "foto": "/tour/a51b2ad8-a9ab-43e9-990c-c06db0d1a584.jpg",
      "pos_x": 1.13,
      "pos_y": -3.74,
      "pos_z": -26.87,
      "conexoes": [
        {
          "id": "b7b147d1-fe92-40cb-b2bc-4f82e30dcbc3",
          "waypoint_destino_id": "3e119669-33b9-4ed2-b5e7-78cc7d8a99b5",
          "angulo_hotspot": 49.3,
          "pitch_hotspot": -10.1
        },
        {
          "id": "1ce09acb-5b2e-4973-8a70-d76a2124c1a1",
          "waypoint_destino_id": "ed640272-c22d-438d-a2f8-9b30a7e4afb7",
          "angulo_hotspot": -88,
          "pitch_hotspot": -12.1
        },
        {
          "id": "984068a7-1d44-4c80-b463-064a3b2f66fd",
          "waypoint_destino_id": "ee40f6e4-e58e-4d4a-be40-8a794940cdcf",
          "angulo_hotspot": -8.8,
          "pitch_hotspot": -11.6
        },
        {
          "id": "f23bb16a-81c0-4ec2-b263-2ea42139c6d2",
          "waypoint_destino_id": "0def0ede-560e-4378-865f-9e78a9c5f10d",
          "angulo_hotspot": -30.8,
          "pitch_hotspot": -13
        },
        {
          "id": "f8fd32ca-5736-45be-94aa-5f53df09c81b",
          "waypoint_destino_id": "5034f0a1-a35a-4afc-bd99-84249c662990",
          "angulo_hotspot": -96.8,
          "pitch_hotspot": -12.1
        },
        {
          "id": "1c13443d-c0c6-4477-920b-c7fe624a7040",
          "waypoint_destino_id": "2d8cb83a-35fb-4328-95c2-df1098d176e5",
          "angulo_hotspot": -76.2,
          "pitch_hotspot": 15
        }
      ]
    },
    {
      "id": "ed640272-c22d-438d-a2f8-9b30a7e4afb7",
      "nome": "Ponto 40",
      "ordem": 39,
      "foto": "/tour/ed640272-c22d-438d-a2f8-9b30a7e4afb7.jpg",
      "pos_x": -3.12,
      "pos_y": -3.82,
      "pos_z": -26.72,
      "conexoes": [
        {
          "id": "46eef52f-8a55-4a0b-b09e-5d680adaf205",
          "waypoint_destino_id": "a51b2ad8-a9ab-43e9-990c-c06db0d1a584",
          "angulo_hotspot": 92,
          "pitch_hotspot": -9.9
        },
        {
          "id": "ad622a40-dfe7-4da1-bbaf-9594cf6b8a32",
          "waypoint_destino_id": "5034f0a1-a35a-4afc-bd99-84249c662990",
          "angulo_hotspot": -105.9,
          "pitch_hotspot": -12.1
        },
        {
          "id": "99f2e7f6-749b-4983-a400-764d0e0c7894",
          "waypoint_destino_id": "ee40f6e4-e58e-4d4a-be40-8a794940cdcf",
          "angulo_hotspot": 39.2,
          "pitch_hotspot": -10.7
        },
        {
          "id": "1d10826b-8416-428b-8308-1c4cd4c7c5cc",
          "waypoint_destino_id": "0def0ede-560e-4378-865f-9e78a9c5f10d",
          "angulo_hotspot": 0.8,
          "pitch_hotspot": -12.8
        },
        {
          "id": "f6b04803-8ec7-411d-aab2-f9d4d17c064b",
          "waypoint_destino_id": "d81911c4-a7ab-4733-90ff-dc151ef98810",
          "angulo_hotspot": -133.8,
          "pitch_hotspot": -11.2
        },
        {
          "id": "13ede4a6-f39a-4ba2-9377-a24bf49eb1df",
          "waypoint_destino_id": "3e119669-33b9-4ed2-b5e7-78cc7d8a99b5",
          "angulo_hotspot": 71.3,
          "pitch_hotspot": -10
        }
      ]
    },
    {
      "id": "5034f0a1-a35a-4afc-bd99-84249c662990",
      "nome": "Ponto 41",
      "ordem": 40,
      "foto": "/tour/5034f0a1-a35a-4afc-bd99-84249c662990.jpg",
      "pos_x": -7.04,
      "pos_y": -3.9,
      "pos_z": -27.84,
      "conexoes": [
        {
          "id": "2697c9f9-faf7-4469-8ffb-c882b90964fc",
          "waypoint_destino_id": "ed640272-c22d-438d-a2f8-9b30a7e4afb7",
          "angulo_hotspot": 74.1,
          "pitch_hotspot": -9.9
        },
        {
          "id": "75969da7-68b0-4179-a6c9-9869c23cdf08",
          "waypoint_destino_id": "d81911c4-a7ab-4733-90ff-dc151ef98810",
          "angulo_hotspot": -161.9,
          "pitch_hotspot": -10.3
        },
        {
          "id": "a9cbe4fb-c3cc-4b9e-a873-2ca06f97ec4e",
          "waypoint_destino_id": "a51b2ad8-a9ab-43e9-990c-c06db0d1a584",
          "angulo_hotspot": 83.2,
          "pitch_hotspot": -9.9
        },
        {
          "id": "69549a83-1d9b-4722-82e8-374dc3b86d04",
          "waypoint_destino_id": "763165f6-ccbf-47ca-85a1-f02d0670347b",
          "angulo_hotspot": 123.7,
          "pitch_hotspot": 15
        },
        {
          "id": "42e6004f-f053-4132-9722-7b35f8ed98de",
          "waypoint_destino_id": "06e4264c-4e0c-49c4-8d3f-03cb34b75b2c",
          "angulo_hotspot": -156.5,
          "pitch_hotspot": 15
        },
        {
          "id": "528715f9-6c89-4f58-98a8-260b4d63cb9a",
          "waypoint_destino_id": "42ed5209-36e7-455f-9c38-e79d29acadc4",
          "angulo_hotspot": -84.5,
          "pitch_hotspot": 15
        }
      ]
    },
    {
      "id": "d81911c4-a7ab-4733-90ff-dc151ef98810",
      "nome": "Ponto 42",
      "ordem": 41,
      "foto": "/tour/d81911c4-a7ab-4733-90ff-dc151ef98810.jpg",
      "pos_x": -8.3,
      "pos_y": -3.85,
      "pos_z": -31.69,
      "conexoes": [
        {
          "id": "c9c8f90b-e979-434c-be91-8e3bc6e80fcf",
          "waypoint_destino_id": "5034f0a1-a35a-4afc-bd99-84249c662990",
          "angulo_hotspot": 18.1,
          "pitch_hotspot": -11.7
        },
        {
          "id": "8771508f-2762-40bd-a40d-1cb9afc4d9b1",
          "waypoint_destino_id": "ed640272-c22d-438d-a2f8-9b30a7e4afb7",
          "angulo_hotspot": 46.2,
          "pitch_hotspot": -10.8
        },
        {
          "id": "f192371b-ea33-4233-8a3f-8515a091f551",
          "waypoint_destino_id": "06e4264c-4e0c-49c4-8d3f-03cb34b75b2c",
          "angulo_hotspot": 2.2,
          "pitch_hotspot": 15
        },
        {
          "id": "71c710f4-3b23-4114-9acf-fd1f375d4423",
          "waypoint_destino_id": "763165f6-ccbf-47ca-85a1-f02d0670347b",
          "angulo_hotspot": 64.4,
          "pitch_hotspot": 15
        }
      ]
    }
  ]
};
