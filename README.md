# Pré-requisitos

Antes de começar, garanta que os seguintes sistemas estejam instalados em seu computador.

- [git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- npm
- [Google Chrome](https://www.google.com/intl/pt_br/chrome/) 
- [Visual Studio Code](https://code.visualstudio.com/) ou alguma outra IDE de sua preferência

> **Obs.:** Recomendo utilizar as versões mais recentes dos sistemas listados acima.

> **Obs. 2:** Ao instalar o Node.js o npm é instalado junto.

# Clone o projeto

Recomendo ao clone via SSH, pois é mais prático.

> Para detalhes sobre como criar e configurar uma chave SSH no GitHub, leia a [documentação oficial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh).

1. Em seu terminal de linha de comando (em uma pasta onde você irá salvar o projeto), execute o comando `git clone [cole-o-link-copiado-aqui]`.

> Algo como o seguinte 'git@github.com:theuspm/shopping-cart.git'

2. Após o clone do projeto, acesse o diretório recém clonado (ex.: `cd shopping-cart/`).

# Instalação e inicialização do [Cypress](https://cypress.io) 

1. Na raiz do projeto, execute o comando `npm install cypress --save-dev`
2. Logo após, execute o comando `npx cypress open` para abrir o Cypress
