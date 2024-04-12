let divHora = document.getElementById("contenido");

setInterval(() => {
  const now = new Date();
  const horas = now.getHours().toString().padStart(2, '0');
  const minutos = now.getMinutes().toString().padStart(2, '0');
  const segundos = now.getSeconds().toString().padStart(2, '0');
  divHora.textContent = horas + ":" + minutos + ":" + segundos;
}, 1000);