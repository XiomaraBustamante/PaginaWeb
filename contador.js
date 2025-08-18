document.addEventListener("DOMContentLoaded", () => {
  const fechaObjetivo = new Date("2025-08-23T18:00:00").getTime() / 1000;

  new FlipDown(fechaObjetivo, "flipdown")
    .start()
    .ifEnded(() => {
      document.getElementById("flipdown").innerHTML =
        "<p>¡El partido ha comenzado! ⚽💎</p>";
    });

  // Reemplazar etiquetas por español
  const traducciones = ["Días", "Horas", "Minutos", "Segundos"];
  document.querySelectorAll(".rotor-group-heading").forEach((el, i) => {
    el.textContent = traducciones[i];
  });
});