// src/planLogic.js
export function generarPlan(dias, ejercicios, rmValues) {
  const plan = [
    {
      dia: 1,
      ejercicios: [
        {
          nombre: "Banca",
          series: 4,
          repes: 8,
          peso: Math.round(rmValues.banca * 0.7),
        },
        {
          nombre: "Sentadilla",
          series: 4,
          repes: 6,
          peso: Math.round(rmValues.sentadilla * 0.75),
        },
        {
          nombre: "Peso Muerto",
          series: 3,
          repes: 5,
          peso: Math.round(rmValues.pesoMuerto * 0.7),
        },
      ],
    },
  ];

  return plan;
}
