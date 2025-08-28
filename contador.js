 // Esperamos a que el documento cargue todo su contenido
  document.addEventListener("DOMContentLoaded", () => {
    // Definimos la fecha objetivo del partido:
    // 14 de septiembre de 2025 a las 17:30 horas (5:30 PM)
    const fechaObjetivo = new Date("2025-09-14T17:30:00").getTime() / 1000;

    // Inicializamos FlipDown con la fecha objetivo y el contenedor "flipdown"
    new FlipDown(fechaObjetivo, "flipdown")
      .start() // Inicia el contador
      .ifEnded(() => {
        // Cuando llegue a 0, reemplaza el contador con este mensaje
        document.getElementById("flipdown").innerHTML =
          "<p>¡El partido ha comenzado! ⚽💎</p>";
      });

    // Cambiamos las etiquetas predeterminadas (en inglés)
    // por sus equivalentes en español
    const traducciones = ["Días", "Horas", "Minutos", "Segundos"];
    document.querySelectorAll(".rotor-group-heading").forEach((el, i) => {
      el.textContent = traducciones[i];
    });
  });