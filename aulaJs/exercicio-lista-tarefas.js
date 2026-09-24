// ==========================================================================
// EXERCÍCIO: Lista de Tarefas com Carregamento Simulado
// Complete os TODOs abaixo. Não é necessário mexer no HTML/CSS.
// ==========================================================================

const input = document.querySelector("#input-tarefa");
const botaoAdicionar = document.querySelector("#btn-adicionar");
const statusSalvando = document.querySelector("#status-salvando");
const listaTarefas = document.querySelector("#lista-tarefas");

function adicionarTarefa() {
  const texto = input.value.trim();
  if (texto === "") return;

  console.log("1 - comecei a salvar");

  // TODO 1: mostrar "Salvando..." dentro de statusSalvando
  // statusSalvando.textContent = ...

  // TODO 2: usar setTimeout (1500ms) para simular a espera de um servidor.
  // Dentro da função do setTimeout, você deve:
  //   a) criar um <li class="todo-item"> com createElement
  //   b) colocar o texto da tarefa dentro dele
  //   c) criar um <button> "Remover" e adicioná-lo dentro do <li>
  //   d) fazer esse botão, ao ser clicado, remover o <li> da tela (li.remove())
  //   e) adicionar o <li> pronto dentro de listaTarefas (appendChild)
  //   f) limpar o texto de statusSalvando
  //   g) dar um console.log("2 - salvei de verdade")
  //
  // setTimeout(() => {
  //   ...
  // }, 1500);

  console.log("3 - segui em frente"); // Repare: isso aparece ANTES do "2 - salvei de verdade"

  input.value = "";
}

// TODO 3: chamar adicionarTarefa() quando o botão "Adicionar" for clicado
// botaoAdicionar.addEventListener("click", ...)

// TODO 4: chamar adicionarTarefa() quando o usuário pressionar Enter no input
// dica: dentro do listener de "keydown", verifique se evento.key === "Enter"
// input.addEventListener("keydown", (evento) => { ... })
