// Facilita o start (definindo resoulução e site que iremos visitar).
Cypress.Commands.add("start", (site, logo) => {
  cy.viewport(1920, 1080); // Resolução FULL HD.
  cy.visit(site);
  cy.get(logo).should("be.visible");
});

// Pesquisa pelo produto.
Cypress.Commands.add("searchProduct", (nameProduct) => {
  cy.get("#twotabsearchtextbox").click().type(nameProduct);
  cy.get("#nav-search-submit-button").click();
  cy.get("img.s-image").eq(1).click({ force: true });
  cy.contains(nameProduct).should("be.visible");
});

// Adiciona o produto ao carrinho.
Cypress.Commands.add("addProductToCart", () => {
  cy.get("#add-to-cart-button").click();

  cy.get("body").then(($body) => {
    cy.contains("h1", "Adicionado ao carrinho").should("be.visible");
  });
});

// Valida a presença do produto no carrinho
Cypress.Commands.add("validCart", () => {
  cy.contains("a", "Ir para o carrinho").click();
  cy.contains(
    "span.a-label.a-checkbox-label",
    "Este pedido contém um presente"
  ).should("be.visible");
});
