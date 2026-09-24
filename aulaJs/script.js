// ==========================================================================
// DEMO 1: primeiro contato — JS mudando algo que já existe na página
// ==========================================================================
const titulo = document.querySelector("#titulo-demo");
const botaoDemo = document.querySelector("#botao-demo");

botaoDemo.addEventListener("click", () => {
  titulo.textContent = "O JavaScript mudou este texto! 🎉";
  titulo.style.color = "#f7df1e";
});

// ==========================================================================
// PLAYGROUND: selecionar um elemento do DOM e reagir a cliques
// ==========================================================================
const caixaAlvo = document.querySelector("#caixa-alvo");
const textoOriginal = caixaAlvo.textContent;

document.querySelector("#btn-azul").addEventListener("click", () => {
  caixaAlvo.style.backgroundColor = "#3b82f6";
  caixaAlvo.style.color = "#ffffff";
});

document.querySelector("#btn-verde").addEventListener("click", () => {
  caixaAlvo.style.backgroundColor = "#10b981";
  caixaAlvo.style.color = "#ffffff";
});

document.querySelector("#btn-texto").addEventListener("click", () => {
  caixaAlvo.textContent = "Meu conteúdo foi alterado pelo JS!";
});

document.querySelector("#btn-reset").addEventListener("click", () => {
  caixaAlvo.style.backgroundColor = "#334155";
  caixaAlvo.style.color = "#f8fafc";
  caixaAlvo.textContent = textoOriginal;
});
