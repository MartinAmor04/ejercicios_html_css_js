setInterval(() => {
  const now = new Date();
  const horas = now.getHours().toString().padStart(2, '0');
  const minutos = now.getMinutes().toString().padStart(2, '0');
  const segundos = now.getSeconds().toString().padStart(2, '0');
  const timeString = horas + ":" + minutos + ":" + segundos;

  const elements = document.getElementsByClassName("now");
  for (let i = 0; i < elements.length; i++) {
    elements[i].textContent = timeString;
  }
}, 1000);