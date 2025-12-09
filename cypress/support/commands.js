// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Facilita o start (definindo resoulução e site que iremos visitar).
Cypress.Commands.add("start", () => {
  cy.viewport(1920, 1080); // Resolução FULL HD.
  cy.visit("https://www.amazon.com.br/");
  cy.get("#nav-logo-sprites").should("be.visible");
});

// Pesquisa pelo produto.
Cypress.Commands.add("searchProduct", () => {
  cy.get("#twotabsearchtextbox").click().type("Nintendo Switch");
  cy.get("#nav-search-submit-button").click();
  cy.get("img.s-image").eq(1).click({ force: true });
  cy.contains(
    /Case Capa Protetora Compatível com Nintendo Switch e OLED/i
  ).should("be.visible"); // Evita falgas caso haja espaços invisíveis
});

// Adiciona o produto ao carrinho.
Cypress.Commands.add("addProductToCart", () => {
  cy.get("#add-to-cart-button").click();
  cy.contains("h1", "Adicionado ao carrinho").should("be.visible");
});

// Valida a presença do produto no carrinho
Cypress.Commands.add("validCart", () => {
  cy.contains("a", "Ir para o carrinho").click();
  cy.contains(
    "span.a-label.a-checkbox-label",
    "Este pedido contém um presente"
  ).should("be.visible");
});
