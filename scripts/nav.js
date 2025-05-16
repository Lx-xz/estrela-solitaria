// Rola para o topo quando o logo é clicado
const logo = document.getElementById("logo")
logo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

// Rola para a seção ao clicar no botão de navegação
const nav_buttons = Array.from(document.querySelectorAll(".nav_buttons"))
nav_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target")
        const targetElement = document.querySelector(targetId)

        if (targetElement) {
            // Compensa o cabeçalho fixo
            const offset = 3.5 * parseFloat(getComputedStyle(document.documentElement).fontSize)
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }
    })
})

// Abre/fecha o menu portátil
const portable_menu_button = document.getElementById("portable_menu_button")
const portable_menu_close_button = document.getElementById("portable_menu_close_button")
const menu = document.getElementById("menu")
portable_menu_button.addEventListener("click", () => {
    menu.classList.toggle("active")
})
portable_menu_close_button.addEventListener("click", () => {
    menu.classList.toggle("active")
})