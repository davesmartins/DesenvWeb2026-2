# Resumo - Animações com CSS

## O que foi estudado

Animações ajudam a explicar mudanças na interface. Elas funcionam melhor quando dão retorno de uma ação, mostram que algo está carregando ou conduzem a atenção para uma informação importante.

### `transition`

Use `transition` quando já existe uma mudança de estado, como `:hover`, `:focus-visible` ou uma classe adicionada pelo JavaScript. A propriedade define quais mudanças serão suavizadas, quanto tempo elas levam e o ritmo do movimento.

```css
.cartao {
  transition: transform .25s ease, background-color .25s ease;
}

.cartao:hover {
  transform: translateY(-8px);
}
```

### `@keyframes` e `animation`

Use `@keyframes` quando o elemento precisa passar por uma sequência de estados. Os pontos `from` e `to` representam início e fim. Também é possível usar porcentagens para criar mais etapas.

```css
@keyframes flutuar {
  0%, 100% { transform: translateY(6px); }
  50% { transform: translateY(-12px); }
}

.aviso {
  animation: flutuar 1.8s ease-in-out infinite;
}
```

## Propriedades importantes

| Propriedade | Para que serve |
| --- | --- |
| `animation-name` | Escolhe o `@keyframes` usado. |
| `animation-duration` | Define quanto tempo cada ciclo leva. |
| `animation-timing-function` | Controla o ritmo, por exemplo `ease`, `linear` ou `ease-in-out`. |
| `animation-delay` | Espera um tempo antes de começar. |
| `animation-iteration-count` | Escolhe quantas vezes a animação repete. |
| `animation-play-state` | Pausa ou retoma uma animação. |

## Exemplos desta pasta

- O cartão em `index.html` usa `transition` para responder ao mouse e ao teclado.
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
