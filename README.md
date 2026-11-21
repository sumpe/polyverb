# Piotrek's Polyverb Tincture

Treinos de conjugação verbal, cada um numa só página.

- **Português europeu** (`portuguese/index.html`): nove tempos do indicativo, condicional e conjuntivo, incluindo o futuro do conjuntivo. Verbos regulares e irregulares, formas de *vós* opcionais e tabelas de verbos com comparação com o espanhol.
- **Polaco** (`polish/index.html`): verbos regulares em -ać, -ować e -ić/-yć no presente, no passado, no futuro e no condicional, com as formas de cada género.
- **Sueco** (`swedish/index.html`): os tempos principais (presens, preteritum e supinum) dos 100 verbos mais comuns, mais sete verbos curtos da terceira conjugação, com as quatro conjugações à escolha. Ainda sem tabelas.

## Como usar

Não é preciso instalar nada: abre o `index.html` num browser e escolhe uma língua.

## Ficheiros

- `site.css`: as cores (claro e escuro), a tipografia, a barra de navegação e o rodapé, comuns às três páginas.
- `trainer.css`: o que os dois treinos partilham (escolhas, cartão da pergunta, revisão, tabelas).
- `portuguese/verbs.js`: os dados dos verbos portugueses e espanhóis.
- `swedish/verbs.js`: os 107 verbos suecos e os seus tempos principais.
- `gloss.js`: mostra a tradução inglesa de um texto quando se passa o rato por cima (só com rato; nunca em ecrãs táteis).

Cada página acrescenta as suas próprias cores num bloco `<style>`. Não há passo de compilação: os ficheiros são carregados com `<link>` e `<script src>` simples, por isso tudo funciona tanto aberto diretamente do disco como servido pelo GitHub Pages.
