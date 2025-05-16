// Array de objetos representando as mídias da galeria
const Media = [
    {
        type: 'image',
        url: 'botafogo_libertadores.webp',
        alt: 'Foto do título da libertadores 2024'
    },
    {
        type: 'video',
        url: 'gols_final_libertadores_2024.mp4',
        alt: 'Gols da final da libertadores 2024'
    },
    {
        type: 'image',
        url: 'botafogo_brasileirao.webp',
        alt: 'Foto do título do brasileirão 2024'
    },
    {
        type: 'image',
        url: 'pantera_negra_alvinegra.jpg',
        alt: 'Comemoração "Pantera Negra" do LH em cima do Flamengo'
    },
    {
        type: 'video',
        url: 'botafogo_internacional_brasileirao_25_1.mp4',
        alt: 'Botafogo 4 x 0 Internacional pelo turno do Brasileirão 25'
    },
    {
        type: 'image',
        url: '24_25_1.png',
        alt: 'Camisa Home 2024/25'
    },
    {
        type: 'image',
        url: '24_25_2.png',
        alt: 'Camisa Away 2024/25'
    },
    {
        type: 'image',
        url: '24_25_3.png',
        alt: 'Camisa Third 2024/25'
    },
/*
    {
        type: 'image/video',
        url: '',
        alt: ''
    },
*/
]

// Armazena os elementos DOM das mídias
const MediaElements = []

const galeryDisplay = document.getElementById("galeryDisplay")

// Função para exibir a galeria
function displayGalery (M) {
    M.map((media) => {
        const mediaElement = document.createElement("div")
        mediaElement.classList.add("media")
        // Se for vídeo, define banner e ícone de play
        if (media.type === 'video') {
            mediaElement.style.setProperty('--url', `url(../videos/banners/${media.url.replace('.mp4', '.png')})`)
            mediaElement.setAttribute("data-alt", media.alt)
            mediaElement.innerHTML = `
                <span class="material-symbols-outlined play">
                    play_arrow
                </span>
            `
        }
        // Se for imagem, define url e ícone de fullscreen
        if (media.type === 'image') {
            mediaElement.style.setProperty('--url', `url(../images/${media.url})`)
            mediaElement.setAttribute("data-alt", media.alt)
            mediaElement.innerHTML = `
                <span class="material-symbols-outlined fullscreen">
                    fullscreen
                </span>
            `
        }
        galeryDisplay.append(mediaElement)
        MediaElements.push(mediaElement)
    })
}

// Exibe a galeria ao carregar a página
document.addEventListener("DOMContentLoaded", displayGalery(Media))

const overlay = document.getElementById("overlay")
// Adiciona evento de clique para abrir overlay com mídia
MediaElements.forEach((mediaElement) => {
    mediaElement.addEventListener("click", () => {
        const window = document.createElement("div")
        window.classList.add("window")

        const header = document.createElement("div")
        header.classList.add("header")

        const title = document.createElement("p")
        title.classList.add("title")
        title.innerHTML = mediaElement.getAttribute("data-alt")
        header.appendChild(title)

        const closeButton = document.createElement("span")
        closeButton.classList.add("material-symbols-outlined")
        closeButton.innerHTML = "close"
        header.appendChild(closeButton)

        window.appendChild(header)

        // Se for vídeo, cria elemento <video>
        if (mediaElement.style.getPropertyValue('--url').includes('videos/')) {
            const video = document.createElement("video")
            video.src = mediaElement.style.getPropertyValue('--url').replace('url(.','').replace('banners/','').replace('png)','mp4')
            video.autoplay = true
            video.controls = true
            video.innerHTML = `
                <track label="Português" kind="subtitles" srclang="pt" src="${mediaElement.style.getPropertyValue('--url').replace('url(.','').replace('banners/','').replace('png)','vtt')}" default>
            `
            window.appendChild(video)
        } else {
            // Se for imagem, cria elemento <img>
            const img = document.createElement("img")
            img.src = mediaElement.style.getPropertyValue('--url').replace('url(.', '').replace(')', '').replace(/"/g, '');
            window.appendChild(img)
        }

        overlay.appendChild(window)

        // Fecha overlay ao clicar no botão de fechar
        closeButton.addEventListener("click", () => {
            overlay.removeChild(window)
        })
    })
})
