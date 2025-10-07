describe('Testes de Adicionar ao Carrinho - SauceDemo', () => {
  beforeEach(() => {
    // Login padrão para acessar a página
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    // Limpa o carrinho antes de cada teste para estado inicial limpo
    cy.get('.shopping_cart_badge').should('not.exist'); // Verifica se está vazio
  });

  it('CT1: adicionar um produto disponível ao carrinho', () => {
    // Adicionar o primeiro produto
    cy.get('.inventory_item').first().find('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    
    // Verifica se ícone do carrinho aparece
    cy.get('.shopping_cart_link').should('be.visible');
    
    // Navega para o carrinho e verifica presença do item
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('have.length', 1);
    cy.contains('Sauce Labs Backpack').should('be.visible');
    cy.get('.cart_quantity').should('contain', '1');
  });

  it('CT2: tentar adicionar o mesmo produto múltiplas vezes sem duplicar', () => {
    const productName = 'Sauce Labs Backpack';
    
    //Adicionar o produto uma vez
    cy.get('.inventory_item').first().find('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    
    //Tentar adicionar novamente
    cy.get('.inventory_item').first().find('[data-test="remove-sauce-labs-backpack"]').should('be.visible');
    
    // Verificação
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('have.length', 1);
    cy.contains(productName).should('be.visible');
    cy.get('.cart_quantity').should('contain', '1');
  });

  it('CT3: adicionar diferentes produtos ao carrinho e verificar lista completa', () => {
    // Adicionar 3 produtos diferentes
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click(); // Primeiro
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click(); // Segundo
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click(); // Terceiro
    
    // Verifica se tem 3 itens no carrinho
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('have.length', 3);
    cy.contains('Sauce Labs Backpack').should('be.visible');
    cy.contains('Sauce Labs Bike Light').should('be.visible');
    cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible');
    cy.get('.cart_quantity').first().should('contain', '1'); 
  });

  it('CT4: remover produto do carrinho e verificar atualização', () => {
    // Adicionar produto
    cy.get('.inventory_item').first().find('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    
    // Navega ao carrinho e remove
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    
    // Verifica carrinho vazio
    cy.get('.cart_item').should('not.exist');
    cy.get('.shopping_cart_badge').should('not.exist');
  });

  it('CT5: verificar contador do ícone do carrinho após adicionar item', () => {
    //Verifica carrinho vazio 
    cy.get('.shopping_cart_badge').should('not.exist');
    
    //Adicionar produto
    cy.get('.inventory_item').first().find('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    
    // Verificar badge aparece com "1"
    cy.get('.shopping_cart_badge').should('contain', '1');
  });

  it('CT6: adicionar produto em viewport mobile', () => {
    // Simula viewport mobile
    cy.viewport(375, 667);
    
    cy.get('.inventory_item').first().find('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    
    cy.get('.shopping_cart_link').should('be.visible');
    cy.get('.shopping_cart_badge').should('contain', '1');
    
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('have.length', 1);
  });

});
