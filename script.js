const cardsEl = document.querySelectorAll('.card')

for (const card of cardsEl) {
    card.setAttribute('style', 'background-color: #FB7500;')
}

const tituloCardsEl = document.querySelectorAll('.titulo-card')

for (const tituloCard of tituloCardsEl) {
    tituloCard.setAttribute('style', 'color: #2B385B; margin:10px;')
    tituloCard.innerHTML = "Meu Card"
}

const descricaoCardsEl = document.querySelectorAll('.descricao-card')

for (const descricaoCard of descricaoCardsEl) {
    descricaoCard.setAttribute('style', 'color: white; margin: 20px 0px; font-size: 15px')
    descricaoCard.innerHTML = "Descrição modificada pelo JavaScript"
}

const botaoEditarEl = document.querySelectorAll('.botao-editar')

for (const botaoEditar of botaoEditarEl) {
    botaoEditar.setAttribute('style', 'background-color:Green; color:white; border: 1px solid green; width:70px; height:40px;  border-radius: 10px; margin-top:10px')
}

const botaoApagarEl = document.querySelectorAll('.botao-apagar')

for (const botaoApagar of botaoApagarEl) {
    botaoApagar.setAttribute('style', 'background-color:red; color:white; border: 1px solid red; width:70px; height:40px;  border-radius: 10px; margin-top:10px')
}


function editarCard() {
    alert("Clicou em Editar")
}


function apagarCard() {
    let confirma = true
    confirma = confirm("Tem certeza que deseja apagar?")
    if (confirma) {
        alert("Confirmado!")
    }else {
        alert("Cancelou!")
    }
}