describe('Fluxo de Finalizar Compra', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    
  });

  it('finalizar compra com sucesso', () => {
    cy.get('.inventory_item').first().contains('Add to cart').click();
    cy.get('.shopping_cart_link').click();
    cy.get('#checkout').click();
    cy.url().should('include', '/checkout-step-one.html');
    cy.get('#first-name').type('Matheus');
    cy.get('#last-name').type('Porfírio');
    cy.get('#postal-code').type('69114-000');
    cy.get('#continue').click();
    cy.get('#finish').click();
    cy.contains('Thank you for your order!').should('be.visible');
  });

  it('validar erro ao tentar finalizar sem preencher dados obrigatórios', () => {
    cy.get('.inventory_item').first().contains('Add to cart').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('contain', 'Error: First Name is required');
  });

  it('finalizar compra com múltiplos produtos', () => {
    cy.get('.inventory_item').first().contains('Add to cart').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('#first-name').type('Matheus');
    cy.get('#last-name').type('Porfírio');
    cy.get('#postal-code').type('69114-000');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.get('.complete-header').should('contain', 'Thank you for your order!');
  });
});
