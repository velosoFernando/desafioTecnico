# 📘 **Desafio Técnico – Automação com Cypress**

Este projeto contém uma automação end-to-end desenvolvida em Cypress, simulando o fluxo de um usuário (shopper) no site da Amazon: pesquisa de produto, validação dos resultados, seleção de item, adição ao carrinho e verificação final.

O foco deste README é **ensinar exatamente como rodar o projeto**, abrir o relatório em HTML e entender a estrutura.

---

# 🔧 **Requisitos Obrigatórios**

Antes de rodar o projeto, você precisa ter instalado:

### ✔️ **Node.js**

Ambiente necessário para rodar o Cypress.
Download: [https://nodejs.org/](https://nodejs.org/)

### ✔️ **Visual Studio Code (VS Code)**

Editor recomendado para executar o projeto e visualizar o relatório.

Instale também a extensão obrigatória:

### 🔵 **Extensão obrigatória: Live Server**

Ela será usada para abrir o arquivo `index.html` com o resultado do teste.

> **Atenção:** Para o Live Server funcionar, você precisa estar com o arquivo HTML aberto no VS Code antes de clicar em *Go Live*.

---

# 📥 **Clonando o Repositório**

```bash
git clone https://github.com/<seu-usuario>/<seu-repositorio>.git
cd desafioTecnico
```

---

# 📦 **Instalação do Projeto**

### 1️⃣ Instalar dependências

```bash
npm install
```

### 2️⃣ Instalar Cypress (caso não esteja no seu ambiente)

```bash
npm install cypress --save-dev
```

---

# ▶️ **Rodando os Testes**

## **Abrir a interface do Cypress**

```bash
npx cypress open
```

Selecione o navegador e clique no teste:

```
cypress/e2e/shopperAmazon.cy.js
```

## **Rodar em modo headless**

```bash
npx cypress run
```

## **Rodar apenas um teste específico**

```bash
npx cypress run --spec "cypress/e2e/shopperAmazon.cy.js"
```

---

# 📊 **Como Visualizar o Relatório HTML do Teste**

Após rodar o teste no modo **headless**, o relatório será gerado na pasta:

```
cypress/reports/index.html
```

Para abrir esse relatório corretamente, use o **Live Server**:

### 1. No VS Code, abra o arquivo:

```
cypress/reports/index.html
```

### 2. Com o arquivo HTML aberto, clique em **Go Live** no rodapé do VS Code.

Você verá algo parecido com:

![Image](https://docs.cypress.io/img/app/reporters/mochawesome-report.png?utm_source=chatgpt.com)

![Image](https://browserstack.wpenginepowered.com/wp-content/uploads/2022/10/Cypress-Inline-HTML-Report-for-Cypress-9-or-below.png?utm_source=chatgpt.com)

---

# 🗂️ **Estrutura do Projeto**

```
DESAFIOTECNICO/
 ├─ cypress/
 │   ├─ e2e/
 │   │   └─ shopperAmazon.cy.js
 │   ├─ fixtures/
 │   ├─ reports/
 │   │   └─ index.html   ← relatório do teste
 │   ├─ support/
 │       ├─ commands.js
 │       └─ e2e.js
 │
 ├─ cypress.config.js
 ├─ package.json
 ├─ package-lock.json
 └─ README.md
```

---

# 📝 **Sobre os Arquivos Importantes**

### 📄 **shopperAmazon.cy.js** (principal teste e2e)

Contém todo o fluxo automatizado: pesquisa, validações e adição ao carrinho.

### 📄 **commands.js**

Onde ficam os comandos customizados usados nos testes.

### 📄 **index.html**

Gerado automaticamente após rodar os testes.
Precisa ser aberto com **Live Server**.

---

# 📌 **Pasta prototipo/**

Dentro da pasta `prototipo` estão os arquivos relacionados ao **protótipo funcional dos testes** usados na fase inicial do desafio.

Conteúdo:

* **leiaTestesPrototipo.txt** → arquivo explicativo com instruções gerais.
* **Testes Prototipo.xlsx** → planilha contendo todos os cenários escritos em Gherkin.
* **testesPrototipos.pdf** → versão em PDF dos mesmos cenários, apenas para visualização do modelo.

