# Resumo - Animações com CSS

## O que foi estudado

Animações ajudam a explicar mudanças na interface. Elas funcionam melhor quando dão retorno de uma ação, mostram que algo está carregando ou conduzem a atenção para uma informação importante.

### `transition`

Use `transition` quando já existe uma mudança de estado, como `:hover`, `:focus-visible` ou uma classe adicionada pelo JavaScript. A propriedade define quais mudanças serão suavizadas, quanto tempo elas levam e o ritmo do movimento.

```css
.cartao {
  transition:
    transform 0.25s ease,
    background-color 0.25s ease;
}

.cartao:hover {
  transform: translateY(-8px);
}
```

### Transformações mais usadas

O `transform` muda a aparência visual do elemento sem empurrar os outros itens do layout. A página traz uma galeria para comparar os efeitos ao passar o mouse ou navegar pelo teclado.

| Função                          | Efeito                                                            |
| ------------------------------- | ----------------------------------------------------------------- |
| `translateX()` e `translateY()` | Move o elemento.                                                  |
| `scale()`                       | Aumenta ou reduz o elemento.                                      |
| `rotate()`                      | Gira o elemento em graus.                                         |
| `skewX()` e `skewY()`           | Inclina o elemento.                                               |
| Várias funções                  | Combina movimentos, por exemplo `translateY(-8px) rotate(-3deg)`. |
| `transform-origin`              | Define o ponto de origem da rotação ou escala.                    |

É possível combinar várias funções em um único `transform`. A ordem faz diferença: primeiro o navegador aplica a função à esquerda e segue para as próximas.

### `@keyframes` e `animation`

Use `@keyframes` quando o elemento precisa passar por uma sequência de estados. Os pontos `from` e `to` representam início e fim. Também é possível usar porcentagens para criar mais etapas.

```css
@keyframes flutuar {
  0%,
  100% {
    transform: translateY(6px);
  }
  50% {
    transform: translateY(-12px);
  }
}

.aviso {
  animation: flutuar 1.8s ease-in-out infinite;
}
```

### Órbitas do título

No cabeçalho da página, o elemento `<div class="orbit">` desenha o anel grande. Dentro dele há três `<span>` vazios. Cada `span` vira um ponto luminoso porque recebe tamanho, cor, `border-radius: 50%` e sombra.

```html
<div class="orbit" aria-hidden="true">
  <span></span>
  <span></span>
  <span></span>
</div>
```

O movimento parte do `@keyframes orbit`. A combinação de `rotate()` com `translateX(310px)` mantém o ponto afastado do centro enquanto ele gira. Na prática, esse deslocamento forma o caminho circular do ponto. O `translate(70px, 130px)` apenas ajusta a posição desse caminho dentro do anel.

```css
.orbit span {
  animation: orbit 7s linear infinite;
}

@keyframes orbit {
  from {
    transform: translate(70px, 130px) rotate(0deg) translateX(310px);
  }
  to {
    transform: translate(70px, 130px) rotate(360deg) translateX(310px);
  }
}
```

Os outros dois pontos reaproveitam a mesma animação, mas mudam de tamanho, cor, duração e atraso. Por exemplo, `animation-delay: -2s` faz o ponto entrar no meio do ciclo, evitando que todos saiam juntos. A animação é decorativa, por isso o contêiner usa `aria-hidden="true"` e não interfere na leitura por tecnologias assistivas.

## Propriedades importantes

| Propriedade                 | Para que serve                                                   |
| --------------------------- | ---------------------------------------------------------------- |
| `animation-name`            | Escolhe o `@keyframes` usado.                                    |
| `animation-duration`        | Define quanto tempo cada ciclo leva.                             |
| `animation-timing-function` | Controla o ritmo, por exemplo `ease`, `linear` ou `ease-in-out`. |
| `animation-delay`           | Espera um tempo antes de começar.                                |
| `animation-iteration-count` | Escolhe quantas vezes a animação repete.                         |
| `animation-play-state`      | Pausa ou retoma uma animação.                                    |

## Exemplos desta pasta

- O cartão em `index.html` usa `transition` para responder ao mouse e ao teclado.
- A galeria de transformações compara `translate`, `scale`, `rotate`, `skew`, combinações e `transform-origin`.
- Os três pontos representam uma área de carregamento com atraso entre os elementos.
- O balão de mensagem usa `@keyframes` para flutuar.
- O controle de duração usa JavaScript para atualizar `animation-duration` em tempo real e permite pausar o movimento.
- A entrada de conteúdo usa atraso e `animation-fill-mode: both` para preservar o estado inicial e o final.
- A mensagem digitada mostra o uso de `steps()` para criar mudanças em etapas.
- O skeleton usa um gradiente que se desloca com `background-position` enquanto o conteúdo carrega.

## Boas práticas

- Anime `transform` e `opacity` sempre que possível. Normalmente eles deixam o navegador trabalhar com mais fluidez.
- Prefira movimentos curtos. Em botões e cartões, algo entre 150 ms e 300 ms costuma ser suficiente.
- Não use animação apenas como enfeite. Ela precisa ajudar a pessoa a entender a interface.
- Respeite `prefers-reduced-motion` para reduzir movimentos para quem configurou essa preferência no sistema.
