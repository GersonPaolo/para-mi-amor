// Oculta el título unos segundos antes de que termine la canción,
// para que la foto y las flores se queden solas en pantalla.
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (!titulo) return;
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 220000);

// Aparición suave de la carta y la galería al hacer scroll
document.addEventListener("DOMContentLoaded", function () {
  var reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  if (!("IntersectionObserver" in window)) {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach(function (el) {
    observer.observe(el);
  });

  // Red de seguridad: si por lo que sea el observer no dispara
  // (saltos de scroll muy bruscos, navegadores raros, etc.),
  // igual mostramos todo pasado un rato para que nada se quede invisible.
  setTimeout(function () {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }, 15000);

  var scrollCue = document.querySelector(".scroll-cue");
  if (scrollCue) {
    scrollCue.addEventListener("click", function () {
      var carta = document.querySelector(".carta");
      if (carta) carta.scrollIntoView({ behavior: "smooth" });
    });
    scrollCue.style.cursor = "pointer";
  }
});
