function mostrarSorpresa() {
  const frases = [
    "Eres muy capaz y muy inteligente 💕",
    "Tu puedes con todo, no te rindas! 🍬",
    "Eres la mejor en lo que haces ✨",
    "Eres tan única como una Princesa de chocolate 🍫👑",
    "Estás hecha de amor, magia y esfuerzo 💖"
  ];

  const aleatoria = frases[Math.floor(Math.random() * frases.length)];

  const div = document.getElementById("sorpresa");
  const frase = document.querySelector(".frase");

  frase.innerText = aleatoria;
  div.classList.remove("oculto");
}

function guardarMensaje() {
  const texto = document.getElementById("respuesta").value.trim();

  if (texto.length > 0) {
    alert("Tu mensaje ha sido guardado 💌:\n\n" + texto);
    document.getElementById("respuesta").value = ""; // limpiar
  } else {
    alert("Por favor, escribe algo bonito antes de enviar 💭");
  }
}
