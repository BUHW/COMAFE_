// Janela modal

function abrirModal(){
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal'){
            modal.classList.remove('abrir')
        }
    })
}

function abrirModal1(){
    const modal = document.getElementById('janela-modal1')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar1' || e.target.id == 'janela-modal1'){
            modal.classList.remove('abrir')
        }
    })
}

function abrirModal2(){
    const modal = document.getElementById('janela-modal2')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar2' || e.target.id == 'janela-modal2'){
            modal.classList.remove('abrir')
        }
    })
}

function abrirModal3(){
    const modal = document.getElementById('janela-modal3')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar3' || e.target.id == 'janela-modal3'){
            modal.classList.remove('abrir')
        }
    })
}

function abrirModal4(){
    const modal = document.getElementById('janela-modal4')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar4' || e.target.id == 'janela-modal4'){
            modal.classList.remove('abrir')
        }
    })
}

function abrirModal5(){
    const modal = document.getElementById('janela-modal5')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar5' || e.target.id == 'janela-modal5'){
            modal.classList.remove('abrir')
        }
    })
}

function abrirModal6(){
    const modal = document.getElementById('janela-modal6')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar6' || e.target.id == 'janela-modal6'){
            modal.classList.remove('abrir')
        }
    })
}

function abrirModal7(){
    const modal = document.getElementById('janela-modal7')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar7' || e.target.id == 'janela-modal7'){
            modal.classList.remove('abrir')
        }
    })
}

function abrirModal8(){
    const modal = document.getElementById('janela-modal8')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar8' || e.target.id == 'janela-modal8'){
            modal.classList.remove('abrir')
        }
    })
}

// Btn buscar

// Função para pesquisar os itens do catálogo
const inputPesquisa = document.getElementById('search');
const btnBusca = document.getElementById('btnBusca');

function pesquisarCatalogo() {
    const termoPesquisa = inputPesquisa.value.toLowerCase();
    const catalogItems = document.querySelectorAll('.card-item');

    catalogItems.forEach(item => {
        const titulo = item.querySelector('h3').textContent.toLowerCase();

        if (titulo.includes(termoPesquisa)) {
            item.classList.remove('oculto');
        } else {
            item.classList.add('oculto');
        }
    });
}

btnBusca.addEventListener('click', pesquisarCatalogo);

// Adicione um ouvinte de evento para capturar a tecla Enter pressionada
inputPesquisa.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        pesquisarCatalogo();
    }
});

