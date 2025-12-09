describe("Amazon – Jornada do Usuário", () => {
  it("TestCase: Pesquisar Produto e Adicionar ao Carrinho", () => {
    cy.start();
    cy.searchProduct();
    cy.addProductToCart();
    cy.validCart();
  });
});
