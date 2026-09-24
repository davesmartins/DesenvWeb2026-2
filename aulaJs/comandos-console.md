# Comandos para testar no Console do navegador

Roteiro para demonstrar ao vivo com a página `index.html` desta pasta aberta.
Abra o DevTools (F12) → aba **Console** e vá digitando os comandos abaixo.

## 1. Selecionar elementos

```js
document.querySelector("#titulo-demo")
document.querySelector("#caixa-alvo")
document.querySelectorAll("button")   // pega todos os botões de uma vez
```

## 2. Ler e mudar texto

```js
document.querySelector("#titulo-demo").textContent
document.querySelector("#titulo-demo").textContent = "Alterado pelo console!"
document.querySelector("#caixa-alvo").textContent = "Testando no console"
```

## 3. Mexer em estilo (CSS via JS)

```js
document.querySelector("#caixa-alvo").style.backgroundColor = "purple"
document.querySelector("#caixa-alvo").style.fontSize = "24px"
document.body.style.backgroundColor = "black"
```

## 4. Trabalhar com classes (mais "certo" que mexer em style direto)

```js
document.querySelector("#caixa-alvo").classList.add("teste")
document.querySelector("#caixa-alvo").classList.remove("teste")
document.querySelector("#caixa-alvo").classList.toggle("teste")  // liga/desliga
```

## 5. Ver atributos

```js
document.querySelector("#caixa-alvo").id
document.querySelector(".layer")  // se existir, mostra a primeira classe encontrada
document.querySelector("#caixa-alvo").getAttribute("id")
```

## 6. Reagir a eventos direto no console

```js
document.querySelector("#btn-reset").addEventListener("click", () => alert("Cliquei no reset!"))
```

Depois peça para clicarem no botão "Resetar" — vai disparar o `alert` junto com o comportamento original.

## 7. Fechando com o DOM como árvore

```js
document.body            // mostra o body inteiro
document.body.children   // lista os "filhos diretos" do body
document.querySelector("main").children
```

## Ordem sugerida para a aula

1 → 2 → 3 → 4 → 7, deixando o 6 como bônus para conectar com o `addEventListener` já usado em `script.js`.
