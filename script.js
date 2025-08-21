window.addEventListener("load", () => {
    const splash = document.getElementById("splash")
    const contenido = document.getElementById("contenido")

    setTimeout(() => {
        splash.style.opacity = 0
        setTimeout(() => {
            splash.style.display = "none"
            contenido.style.opacity = 1
        }, 1000)
    }, 2000)
})

const quotes = [
  "No entiendo porque todas las de Jaime me parecen buenas",
  "El mundialito me ha dejado seco",
  "Prometo no calentarme, procedo a hacer cuota 1000",
  "Eres la definición perfecta de ludopata",
  "He perdido 3k por no tener sustituto, mañana me voy del grupo"
];

let index = 0;
const quoteElement = document.querySelector(".quote-container .quote");

setInterval(() => {
  
  quoteElement.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % quotes.length;
    quoteElement.textContent = quotes[index];
    quoteElement.style.opacity = 1;
  }, 500);
}, 4000); 