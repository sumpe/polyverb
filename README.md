# Piotrek's Polyverb Tincture

Treinos de conjugação verbal, cada um numa só página.

- **Português europeu** (`portuguese/index.html`): nove tempos do indicativo, condicional e conjuntivo, incluindo o futuro do conjuntivo. Verbos regulares e irregulares, formas de *vós* opcionais e tabelas de verbos com comparação com o espanhol.
- **Polaco** (`polish/index.html`): verbos regulares em -ać, -ować e -ić/-yć no presente, no passado, no futuro e no condicional, com as formas de cada género.

## Como usar

Não é preciso instalar nada: abre o `index.html` num browser e escolhe uma língua.

## Ficheiros

- `site.css`: as cores (claro e escuro), a tipografia, a barra de navegação e o rodapé, comuns às três páginas.
- `trainer.css`: o que os dois treinos partilham (escolhas, cartão da pergunta, revisão, tabelas).
- `portuguese/verbs.js`: os dados dos verbos portugueses e espanhóis.

Cada página acrescenta as suas próprias cores num bloco `<style>`. Não há passo de compilação: os ficheiros são carregados com `<link>` e `<script src>` simples, por isso tudo funciona tanto aberto diretamente do disco como servido pelo GitHub Pages.
