🔥 Desafio Técnico – Automação E2E com Cypress

Automação completa de um fluxo de compra na Amazon, iniciando pela busca de produto até a validação final no carrinho.
Projeto criado para demonstrar domínio de automação, boas práticas, organização e escrita clara de testes.

🧰 Tech & Tools

Principais tecnologias utilizadas no projeto

<p align="left"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" /> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=fff" /> <img src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=fff" /> <img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=fff" /> <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=fff" /> <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=fff" /> <img src="https://img.shields.io/badge/Amazon-FF9900?style=for-the-badge&logo=amazon&logoColor=000" /> </p>
👨‍💻 QA – Sobre Mim

Sou QA com foco em automação e criação de testes estruturados e confiáveis.
Meu objetivo é entregar qualidade com eficiência, clareza e consistência.

O que aplico no dia a dia

✔️ Escrita de testes E2E usando Cypress

✔️ Criação de seletores estáveis e legíveis

✔️ Validações funcionais orientadas ao comportamento do usuário

✔️ Organização escalável em pastas, comandos e fixtures

✔️ Execuções em pipeline e testes headless

✔️ Geração de logs, evidências e relatórios

Meu estilo como QA

Gosto de código limpo e direto.

Evito complexidade desnecessária.

Priorizo confiabilidade ao invés de “testes bonitos”.

Busco sempre aprendizado contínuo.

📥 Como Clonar o Projeto
git clone https://github.com/<seu-usuario>/<seu-repositorio>.git
cd desafioTecnico

🔧 Instalação
npm install
npm install cypress --save-dev

▶️ Execução dos Testes
Interface do Cypress (modo gráfico)

Ideal para visualizar passo a passo:

npx cypress open


Selecione E2E Testing → escolha o navegador → execute:

cypress/e2e/shopperAmazon.cy.js

Modo Headless (sem abrir navegador)

Usado em CI/CD ou execuções rápidas:

npx cypress run

Chrome headless
npx cypress run --browser chrome

Executar arquivo específico
npx cypress run --spec "cypress/e2e/shopperAmazon.cy.js"

🗂 Estrutura do Projeto
DESAFIOTECNICO/
 ├─ cypress/
 │   ├─ e2e/
 │   │   └─ shopperAmazon.cy.js
 │   ├─ fixtures/
 │   ├─ support/
 │       ├─ commands.js
 │       └─ e2e.js
 │
 ├─ cypress.config.js
 ├─ package.json
 └─ README.md

🧪 Fluxo Automatizado

Acessar Amazon

Pesquisar produto

Validar resultados da busca

Selecionar item da lista

Adicionar ao carrinho

Validar que o produto entrou corretamente

📄 Licença

Projeto de caráter educativo e demonstrativo.

