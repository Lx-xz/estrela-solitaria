// Array de objetos representando as camisas
const Tshirts = [
    {
        nome: 'Tradição',
        modelo: '1',
        temporada: '2024-25'
    },
    {
        nome: 'Forjada no fogo',
        modelo: '2',
        temporada: '2024-25'
    },
    {
        nome: 'O futuro é glorioso',
        modelo: '3',
        temporada: '2024-25'
    },
]

// Seleciona o elemento onde os cards serão exibidos
const display = document.getElementById("display")

// Para cada camisa no array, cria um card
Tshirts.forEach(tshirt => {
    const card = document.createElement("div")
    card.className = "card"
    
    // Cria a div da imagem e define as imagens de frente e verso via CSS custom property
    const imageDiv = document.createElement("div")
    imageDiv.style.setProperty("--front", `url(/images/24_25_${tshirt.modelo}.png)`)
    imageDiv.style.setProperty("--back", `url(/images/24_25_${tshirt.modelo}_back.png)`)
    imageDiv.className = "image"
    card.appendChild(imageDiv)

    // Cria a div com os dados da camisa
    const dataDiv = document.createElement("div")
    dataDiv.className = "data"
    dataDiv.innerHTML = `
        <p>${tshirt.nome}</p>
    `
    card.appendChild(dataDiv)

    // Adiciona o card ao display
    display.appendChild(card)
})