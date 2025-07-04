function mostrarFrase() {
  const frases = [
    "Estudia con amor, no con presión. ❤️",
    "Lo que aprendes hoy, te construye mañana. 📘",
    "Tú puedes con todo, ¡no te rindas! 💪",
    "Cada noche de estudio es una victoria futura. 🏆",
    "Hazlo por ti, por tus sueños, por tu vida. ✨"
  ];

  const aleatoria = frases[Math.floor(Math.random() * frases.length)];
  const p = document.getElementById("fraseExtra");

  p.innerText = aleatoria;
  p.classList.remove("oculto");
}
