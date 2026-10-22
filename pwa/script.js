const form = document.querySelector("#form-nota");
const input = document.querySelector("#input-nota");
const lista = document.querySelector("#lista-notas");
const contador = document.querySelector("#contador-notas");
const statusBadge = document.querySelector("#status-badge");
const btnInstalar = document.querySelector("#btn-instalar");

function carregarNotas() {
  const salvas = localStorage.getItem("notas");
  return salvas ? JSON.parse(salvas) : [];
}

function salvarNotas(notas) {
  localStorage.setItem("notas", JSON.stringify(notas));
}

function renderizarNotas() {
  const notas = carregarNotas();
  lista.innerHTML = "";

  contador.textContent = notas.length === 0
    ? "Nenhuma nota ainda."
    : `${notas.length} nota(s) salva(s).`;

  notas.forEach((texto, indice) => {
    const item = document.createElement("li");
    item.className = "nota-item";

    const paragrafo = document.createElement("p");
    paragrafo.textContent = texto;

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.addEventListener("click", () => {
      const atualizadas = carregarNotas();
      atualizadas.splice(indice, 1);
      salvarNotas(atualizadas);
      renderizarNotas();
    });

    item.appendChild(paragrafo);
    item.appendChild(botaoRemover);
    lista.appendChild(item);
  });
}

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const texto = input.value.trim();
  if (texto === "") return;

  const notas = carregarNotas();
  notas.unshift(texto);
  salvarNotas(notas);

  input.value = "";
  renderizarNotas();
});

function atualizarStatus() {
  statusBadge.textContent = navigator.onLine ? "🟢 Online" : "🟠 Offline (usando cache)";
}

window.addEventListener("online", atualizarStatus);
window.addEventListener("offline", atualizarStatus);

renderizarNotas();
atualizarStatus();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js");
  });
}

let eventoInstalacao = null;

window.addEventListener("beforeinstallprompt", (evento) => {
  evento.preventDefault();
  eventoInstalacao = evento;
  btnInstalar.hidden = false;
});

btnInstalar.addEventListener("click", async () => {
  if (!eventoInstalacao) return;
  eventoInstalacao.prompt();
  await eventoInstalacao.userChoice;
  eventoInstalacao = null;
  btnInstalar.hidden = true;
});

window.addEventListener("appinstalled", () => {
  btnInstalar.hidden = true;
});
