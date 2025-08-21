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
