# 📘 **Desafio Técnico – Automação com Cypress**

Este repositório contém a automação de um fluxo de shopper no e-commerce Amazon, desenvolvido como parte de um desafio técnico.

O teste consiste em acessar o site, pesquisar por um produto, validar que os resultados exibidos correspondem ao termo pesquisado, selecionar um item da lista, adicioná-lo ao carrinho e confirmar que o produto foi corretamente inserido no carrinho.

---

# 🚀 **Tecnologias Utilizadas**

### **Node.js**

* É o ambiente que permite executar JavaScript fora do navegador.
* Necessário para rodar o Cypress e instalar dependências.
* Download: [https://nodejs.org/](https://nodejs.org/)

### **Visual Studio Code**

* Editor de código recomendado.
* Extensões úteis:

    * *ESLint*: valida e padroniza o código, encontrando erros automaticamente.

    * *Prettier*: formata o código de forma consistente e organizada ao salvar.

    * *Cypress Snippets*: fornece atalhos para escrever comandos Cypress mais rápido.

### **Cypress**

* Framework de testes end-to-end para aplicações web.
* Rápido, moderno e extremamente fácil de usar.

---

# 📥 **Como Clonar Este Projeto**

Abra seu terminal e execute:

```bash
git clone https://github.com/<seu-usuario>/<seu-repositorio>.git
```

Em seguida, acesse a pasta:

```bash
cd desafioTecnico
```

---

# 🔧 **Instalação do Projeto**

### 1️⃣ Instalar dependências do Node

```bash
npm install
```

### 2️⃣ Instalar o Cypress

```bash
npm install cypress --save-dev
```

**O que significa o `--save-dev`?**
Ele adiciona o Cypress como dependência de **desenvolvimento**, ou seja, usada apenas durante testes — não em produção.

---

# ▶️ **Como Rodar o Cypress**

### **Abrir a interface gráfica:**

```bash
npx cypress open
```

### **Rodar em modo headless (ideal para CI/CD):**

```bash
npx cypress run
```

Esses comandos usam a versão instalada dentro do projeto, garantindo compatibilidade.

---

# 🗂️ **Estrutura do Projeto**

A estrutura deste repositório segue o padrão oficial do Cypress:

```
DESAFIOTECNICO/
 ├─ cypress/
 │   ├─ e2e/
 │   │   └─ shopperAmazon.cy.js
 │   ├─ fixtures/
 │   │   └─ example.json
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

## 📌 **Detalhamento das pastas**

### 📁 **cypress/**

Pasta principal onde toda a automação acontece.

---

### 📁 **cypress/e2e/**

Armazena os arquivos de teste.
Exemplo:

* **shopperAmazon.cy.js** → contém o fluxo automatizado do desafio (login, ações, validações).

---

### 📁 **cypress/fixtures/**

Usada para armazenar dados estáticos, massa de teste ou mocks.
Exemplo:

* **example.json** → arquivo de exemplo gerado pelo Cypress.

---

### 📁 **cypress/support/**

Contém arquivos que **suportam a execução dos testes**.

#### `commands.js`

* Aqui você cria **comandos customizados do Cypress**.
  Exemplo: login, start, submitLogin, etc.

#### `e2e.js`

* Carrega automaticamente antes de cada teste.
* Importa `commands.js`.
* Pode conter tratativas globais (ex.: ignorar erros de terceiros).

---

### 📄 **cypress.config.js**

Arquivo principal de configuração do Cypress.
Aqui você define:

* Base URL
* Padrão dos testes
* Configs de execução
* Setup do Node (tasks)

---

### 📄 **package.json**

Arquivo que descreve o projeto:

* Dependências (como o Cypress)
* Scripts executáveis
* Versão do Node
* Informações do projeto

---

### 📄 **package-lock.json**

Controle detalhado das versões instaladas — garante que todo mundo do time use exatamente as mesmas versões.

---

### 📄 **README.md**

Arquivo que você está lendo agora 😉.
Serve como documentação do repositório.

---

# 🧪 **Executando o Teste do Desafio**

Depois que tudo estiver instalado, rode:

```bash
npx cypress open
```

E clique no teste:

```
cypress/e2e/shopperAmazon.cy.js
````


