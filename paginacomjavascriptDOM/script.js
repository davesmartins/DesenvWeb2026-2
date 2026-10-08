// 1. SELECIONANDO ELEMENTOS DO DOM
// Seleção usando querySelector e getElementById
const titulo = document.querySelector('#titulo-pagina');
const botao = document.getElementById('btn-carregar');
const statusText = document.getElementById('status');
const lista = document.getElementById('lista-usuarios');

// 2. MANIPULANDO ELEMENTOS
// Alterando conteúdo de texto inicial
titulo.textContent = 'Módulo 05: DOM, Eventos e Assincronismo';

// 3. ASSINCRONISMO (Promises e async/await)
async function buscarDados() {
    try {
        // Alterando estilo e classe durante o carregamento
        botao.classList.add('ativo');
        botao.textContent = 'Carregando...';
        statusText.textContent = 'Status: Buscando dados na API...';

        // Requisição assíncrona com fetch (API pública de testes)
        // const resposta = await fetch('origem-dos-dados.txt');
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await resposta.json();
        console.log ('Resposta da requisição:', usuarios);
        console.log ('terminou:');
        
        //

        // Limpa a lista antes de adicionar novos itens
        lista.innerHTML = '';

        // Preenchendo a lista com os dados retornados
        usuarios.forEach(usuario => {
            const li = document.createElement('li');
            li.textContent = usuario.name;
            lista.appendChild(li);
        });

        statusText.textContent = 'Status: Dados carregados com sucesso!';
    } catch (erro) {
        // Tratamento de erro com try/catch
        statusText.textContent = 'Status: Erro ao carregar dados.';
        console.error('Erro na requisição:', erro);
    } finally {
        // Restaurando o botão ao estado original
        botao.classList.remove('ativo');
        botao.textContent = 'Carregar Dados Assíncronos';
    }
}

// 4. EVENTOS (addEventListener)
// Adicionando evento de clique ao botão
botao.addEventListener('click', buscarDados);

// 5. DELEGAÇÃO DE EVENTOS
// Evento adicionado no pai <ul> para capturar cliques nos <li> filhos dinâmicos
lista.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.style.backgroundColor = '#d1ecf1';
        alert('Você clicou no usuário: ' + e.target.textContent);
    }
});