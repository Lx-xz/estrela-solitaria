// Array de objetos representando os jogadores
const players = [
    {
        imagem: 'alex_telles.png',
        nome: 'Alex Telles',
        número: 13,
        posição: 'DEF',
    },
    {
        imagem: 'alexander_barboza.png',
        nome: 'Alexander Barboza',
        número: 20,
        posição: 'DEF',
    },
    {
        imagem: 'allan.png',
        nome: 'Allan',
        número: 25,
        posição: 'DEF',
    },
    {
        imagem: 'artur.png',
        nome: 'Artur',
        número: 7,
        posição: 'ATA',
    },
    {
        imagem: 'bastos.png',
        nome: 'Bastos',
        número: 15,
        posição: 'DEF',
    },
    {
        imagem: 'cuiabano.png',
        nome: 'Cuiabano',
        número: 66,
        posição: 'DEF',
    },
    {
        imagem: 'danilo_barbosa.png',
        nome: 'Danilo Barbosa',
        número: 5,
        posição: 'DEF',
    },
    {
        imagem: 'david_ricardo.png',
        nome: 'David Ricardo',
        número: 57,
        posição: 'DEF',
    },
    {
        imagem: 'elias_manuel.png',
        nome: 'Elias Manuel',
        número: 33,
        posição: 'ATA',
    },
    {
        imagem: 'gregore.png',
        nome: 'Gregore',
        número: 26,
        posição: 'DEF',
    },
    {
        imagem: 'igor_jesus.png',
        nome: 'Igor Jesus',
        número: 99,
        posição: 'ATA',
    },
    {
        imagem: 'jair.png',
        nome: 'Jair',
        número: 32,
        posição: 'DEF',
    },
    {
        imagem: 'jeffinho.png',
        nome: 'Jeffinho',
        número: 47,
        posição: 'ATA',
    },
    {
        imagem: 'john.png',
        nome: 'John',
        número: 12,
        posição: 'GOL',
    },
    {
        imagem: 'kauan_lindes.png',
        nome: 'Kauan Lindes',
        número: 77,
        posição: 'DEF',
    },
    {
        imagem: 'kaue.png',
        nome: 'Kauê',
        número: 18,
        posição: 'ATA',
    },
    {
        imagem: 'kayke.png',
        nome: 'Kayke',
        número: 19,
        posição: 'ATA',
    },
    {
        imagem: 'leo_linck.png',
        nome: 'Leo Linck',
        número: 24,
        posição: 'GOL',
    },
    {
        imagem: 'marcal.png',
        nome: 'Marçal',
        número: 21,
        posição: 'DEF',
    },
    {
        imagem: 'marlon_freitas.png',
        nome: 'Marlon Freitas',
        número: 17,
        posição: 'DEF',
    },
    {
        imagem: 'mastriani.png',
        nome: 'Mastriani',
        número: 39,
        posição: 'ATA',
    },
    {
        imagem: 'mateo_ponte.png',
        nome: 'Mateo Ponte',
        número: 4,
        posição: 'DEF',
    },
    {
        imagem: 'matheus_martins.png',
        nome: 'Matheus Martins',
        número: 11,
        posição: 'ATA',
    },
    {
        imagem: 'nathan_fernandes.png',
        nome: 'Nathan Fernandes',
        número: 16,
        posição: 'ATA',
    },
    {
        imagem: 'newton.png',
        nome: 'Newton',
        número: 28,
        posição: 'DEF',
    },
    {
        imagem: 'patrick_de_paula.png',
        nome: 'Patrick de Paula',
        número: 6,
        posição: 'DEF',
    },
    {
        imagem: 'rafael_lobato.png',
        nome: 'Rafael Lobato',
        número: 69,
        posição: 'ATA',
    },
    {
        imagem: 'raul.png',
        nome: 'Raul',
        número: 1,
        posição: 'GOL',
    },
    {
        imagem: 'rwan_cruz.png',
        nome: 'Rwan Cruz',
        número: 9,
        posição: 'ATA',
    },
    {
        imagem: 'santi_rodriguez.png',
        nome: 'Santi Rodriguez',
        número: 23,
        posição: 'ATA',
    },
    {
        imagem: 'savarino.png',
        nome: 'Savarino',
        número: 10,
        posição: 'ATA',
    },
    {
        imagem: 'serafim.png',
        nome: 'Serafim',
        número: 63,
        posição: 'ATA',
    },
    {
        imagem: 'vitinho.png',
        nome: 'Vitinho',
        número: 2,
        posição: 'DEF',
    },
    {
        imagem: 'yarlen.png',
        nome: 'Yarlen',
        número: 67,
        posição: 'ATA',
    },
/*
    {
        imagem: '.png',
        nome: '',
        número: 0,
        posição: '',
    },
*/
]

const playerTable = document.getElementById("playerTable")
// Cria a tabela de jogadores dinamicamente
function createPlayerTable(p) {
    // Cria o cabeçalho da tabela
    const headerRow = document.createElement("tr")
    headerRow.classList.add("header_row")
    Object.keys(p[0]).forEach(header => {
        const th = document.createElement("th")
        th.textContent = header
        headerRow.appendChild(th)
    })
    playerTable.appendChild(headerRow)

    // Adiciona cada jogador como uma linha na tabela
    p.forEach(player => {
        const row = document.createElement("tr")
        Object.keys(player).forEach(key => {
            if (key === "imagem") {
                // Adiciona a imagem do jogador
                const imgCell = document.createElement("td")
                const img = document.createElement("img")
                img.src = `images/${player[key]}`
                img.alt = player.nome
                imgCell.appendChild(img)
                row.appendChild(imgCell)
                return
            }
            // Adiciona os outros dados do jogador
            const cell = document.createElement("td")
            cell.textContent = player[key]
            row.appendChild(cell)
        })
        playerTable.appendChild(row)
    })
}

// Executa a função quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => createPlayerTable(players))