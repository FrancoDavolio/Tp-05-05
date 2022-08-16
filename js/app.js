let tiempoRef = Date.now();
let cronometrar = false;
let acumulador = 0;

function iniciar() {
  cronometrar = true;
}

function pausar() {
  cronometrar = false;
}

function reiniciar() {
  acumulador = 0;
}

setInterval(() => {
  let tiempo = document.getElementById("tiempo");
  if (cronometrar) {
    acumulador += Date.now() - tiempoRef;
  }
  tiempoRef = Date.now();
  tiempo.innerHTML = formatearMS(acumulador);
}, 1000 / 60);

function formatearMS(tiempo_ms) {
  let mS = tiempo_ms % 1000;
  let sT = Math.floor((tiempo_ms - mS) / 1000);
  let s = sT % 60;
  let m = Math.floor((s / 60) % 60);
  let h = Math.floor(m / 60);
  Number.prototype.ceros = function (n) {
    return (this + "").padStart(n, 0);
  };
  return h.ceros(2) + ":" + m.ceros(2) + ":" + s.ceros(2);
}
