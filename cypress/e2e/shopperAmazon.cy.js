describe("Amazon – Jornada do Usuário", () => {
  it("TestCase: Pesquisar Produto e Adicionar ao Carrinho", () => {
    cy.start("https://www.amazon.com.br/", "#nav-logo-sprites");
    cy.searchProduct("Pilha Alcalina");
    cy.addProductToCart();
    cy.validCart();
  });
});
