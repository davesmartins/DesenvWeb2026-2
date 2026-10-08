// script.js — cadastro + armazenamento local

const form = document.getElementById("formCadastro");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const idade = document.getElementById("idade");
const resultado = document.getElementById("resultado");

// Carrega do localStorage (ou cria array vazio)
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Funções de validação
function validarNome(valor) {
  return valor.trim().length > 2;
}

function validarEmail(valor) {
  return valor.includes("@") && valor.includes(".");
}

function validarIdade(valor) {
  return Number.isInteger(valor) && valor >= 18 && valor <= 120;
}

// Funções auxiliares
function mostrarResultado(html, tipo = "info") {
  resultado.innerHTML = `<div class="alert alert-${tipo} mt-3">${html}</div>`;
}

function marcarCampo(inputEl, valido) {
  inputEl.classList.remove("is-valid", "is-invalid");
  if (valido) inputEl.classList.add("is-valid");
  else inputEl.classList.add("is-invalid");
}

// Função para adicionar usuário e salvar no localStorage
function adicionarUsuario(n, e, i) {
  usuarios.push({ nome: n, email: e, idade: i });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Validação em tempo real
if (nome && email && idade) {
  nome.addEventListener("input", () => marcarCampo(nome, validarNome(nome.value)));
  email.addEventListener("input", () => marcarCampo(email, validarEmail(email.value)));
  idade.addEventListener("input", () => marcarCampo(idade, validarIdade(Number(idade.value))));
}

// Cadastro
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nomeValido = validarNome(nome.value);
    const emailValido = validarEmail(email.value);
    const idadeValida = validarIdade(Number(idade.value));

    marcarCampo(nome, nomeValido);
    marcarCampo(email, emailValido);
    marcarCampo(idade, idadeValida);

    if (nomeValido && emailValido && idadeValida) {
      adicionarUsuario(nome.value, email.value, Number(idade.value));
      mostrarResultado("Usuário cadastrado com sucesso!", "success");
      form.reset();
      [nome, email, idade].forEach(i => i.classList.remove("is-valid", "is-invalid"));
    } else {
      mostrarResultado("Há erros no formulário. Verifique os campos.", "danger");
    }
  });
}

