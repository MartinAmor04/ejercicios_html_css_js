let tiempoIn = document.getElementById("temporizador");
let boton = document.getElementById("inicio");

boton.onclick = function() {
  let tiempo = parseInt(tiempoIn.value);


  let intervalId = setInterval(() => {
    if (tiempo === 0) {
      clearInterval(intervalId);
      alert("Se acabó el tiempo");
      return;
    }
    tiempo--;
    tiempoIn.textContent = tiempo;
  }, 1000);
};