const botaoMenu = document.querySelector("#btn-menu");
const menuLinks = document.querySelector("#menu-links");

botaoMenu.addEventListener("click", () => {
  menuLinks.classList.toggle("aberto");
});

const indicador = document.querySelector("#indicador-breakpoint");

const faixas = [
  { query: "(min-width: 1200px)", texto: "🖥️✨ Tela larga (≥ 1200px)" },
  { query: "(min-width: 900px)", texto: "🖥️ Desktop (900px – 1199px)" },
  { query: "(min-width: 600px)", texto: "📟 Tablet (600px – 899px)" },
];

function atualizarIndicador() {
  const faixaAtiva = faixas.find((faixa) => window.matchMedia(faixa.query).matches);
  indicador.textContent = faixaAtiva ? faixaAtiva.texto : "📱 Mobile (< 600px)";
}

faixas.forEach((faixa) => {
  window.matchMedia(faixa.query).addEventListener("change", atualizarIndicador);
});

atualizarIndicador();
