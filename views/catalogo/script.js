// // Janela modal

// function abrirModal(){
//     const modal = document.getElementById('janela-modal')
//     modal.classList.add('abrir')

//     modal.addEventListener('click', (e) => {
//         if(e.target.id == 'fechar' || e.target.id == 'janela-modal'){
//             modal.classList.remove('abrir')
//         }
//     })
// }

function abrirModal(targetId) {
    const modal = document.getElementById(targetId);
    modal.classList.add('abrir');

    
    // Adicione um ouvinte de evento de clique ao botão de fechar dentro da modal
    const fecharBotao = modal.querySelector('.fechar-modal');
    fecharBotao.addEventListener('click', () => {
        modal.classList.remove('abrir');
    });

    // Centralizar a janela modal em relação ao botão clicado
    const button = document.querySelector(`[data-target="${targetId}"]`);
    const rect = button.getBoundingClientRect();
    modal.style.top = `${rect.top + window.scrollY}px`;
    modal.style.left = `${rect.left + window.scrollX + (rect.width - modal.offsetWidth) / 2}px`;
}
console.log('data-target')

// Adicione um ouvinte de evento de clique a todos os botões "Tenho interesse"
const botoesInteresse = document.querySelectorAll('.btn');
botoesInteresse.forEach(botao => {
    botao.addEventListener('click', () => {
        const targetId = botao.getAttribute('data-target');
        abrirModal(targetId); // Certifique-se de passar o ID correto aqui
        console.log(targetID)
    });
});
