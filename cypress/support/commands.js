Cypress.Commands.add('login', (fixtureName, user, password) => {
  cy.fixture(fixtureName).then(() => {
    cy.get('#login2', { timeout: 10000 }).should('be.visible').click();
    cy.get('#loginusername', { timeout: 10000 })
      .should('be.visible')
      .type(user);
    cy.get('#loginpassword', { timeout: 10000 })
      .should('be.visible')
      .type(password);
    cy.get(
      '#logInModal > div > div > div.modal-footer > button.btn.btn-primary',
    )
      .should('be.visible')
      .click();
    cy.url().should('not.include', '/login');
  });
});

Cypress.Commands.add('credential', () => {
  const user = '123';
  const password = '123';

  cy.get('#login2', { timeout: 10000 }).should('be.visible').click();
  cy.get('#loginusername', { timeout: 10000 }).should('be.visible').type(user);
  cy.get('#loginpassword', { timeout: 10000 })
    .should('be.visible')
    .type(password);
  cy.get('#logInModal > div > div > div.modal-footer > button.btn.btn-primary')
    .should('be.visible')
    .click();

  cy.url().should('not.include', '/login');
});

Cypress.Commands.add('logout', () => {
  cy.get('#logout2', { timeout: 10000 }).should('exist');
  cy.wait(2000); // sin el wait no se ve el botón
  cy.url({ timeout: 15000, log: false }).should('not.include', '/login');
});

Cypress.Commands.add('chooseItem', (locator) => {
  cy.get(locator, { timeout: 5000 })
    .should('be.visible')
    .click({ force: true });
});

Cypress.Commands.add('multiple', (locator) => {
  cy.get(locator, { timeout: 5000 })
    .should('exist')
    .click({ force: true, multiple: true })
    .as('chosenItems');
});

/* Cypress.Commands.add('addToCart', (itemName) => {
  cy.get('.card-title').then(($items) => {
    if (!$items.find(`a:contains("${itemName}")`).length){
      throw new Error(`Producto "${itemName}" no encontrado`);
    }
  });

  cy.get('.card-title')
    .contains(itemName)
    .should('be.visible')
    .click({ force: true });

  cy.contains('Add to cart', { timeout: 5000 })
    .should('be.visible')
    .click({ force: true });
  cy.get('body').type('{enter}');
  cy.go(-2);
}); */

/* Cypress.Commands.add('addToCart', (itemName) => {
  cy.get('.card-title')
    .contains(itemName)
    .should('be.visible')
    .click({ force: true });

  cy.contains('Add to cart', { timeout: 5000 })
    .should('be.visible')
    .click({ force: true });
  cy.get('body').type('{enter}');
  cy.go(-2);
}); */

Cypress.Commands.add('placeOrder', () => {
  cy.addToCart('Sony xperia z5');
  cy.addToCart('Iphone 6 32gb');
  cy.addToCart('Nexus 6');
  cy.get('#cartur').should('be.visible').contains('Cart').click({ force: true });
  cy.wait(2000);
  cy.get('button').contains('Place Order')
    .should('be.visible')
    .click();

  cy.get('.form-group #name', { timeout: 10000 })
    .should('be.visible')
    .type('Tino Asprilla');

  cy.get('.form-group #country', { timeout: 10000 })
    .should('be.visible')
    .type('Colombia');

  cy.get('.form-group #city', { timeout: 10000 })
    .should('be.visible')
    .type('Cartagena');

  cy.get('body').type('{enter}');

  cy.get('.form-group #card', { timeout: 10000 })
    .should('be.visible')
    .type('1234 5678 4455 9900');

  cy.get('.form-group #year', { timeout: 10000 })
    .should('be.visible')
    .type('30');

  cy.get('.form-group #month', { timeout: 10000 })
    .should('be.visible').type('12');

  cy.get('.modal-footer', { timeout: 2000 })
    .should('be.visible')
    .contains('Purchase')
    .click({ force: true });

  cy.get('body').type('{enter}');
});

Cypress.Commands.add('placeOrderByParameters', (items) => {
  items.forEach((item) => {
    cy.addToCart(item);
  });

  cy.get('#cartur').should('be.visible')
    .contains('Cart')
    .click({ force: true });
  cy.wait(2000);

  cy.get('button').contains('Place Order')
    .should('be.visible')
    .click();

  cy.get('.form-group #name', { timeout: 10000 })
    .should('be.visible')
    .type('Tino Asprilla');

  cy.get('.form-group #country', { timeout: 10000 })
    .should('be.visible')
    .type('Colombia');

  cy.get('.form-group #city', { timeout: 10000 })
    .should('be.visible')
    .type('Cartagena');

  cy.get('body').type('{enter}');

  cy.get('.form-group #card', { timeout: 10000 })
    .should('be.visible')
    .type('1234 5678 4455 9900');

  cy.get('.form-group #year', { timeout: 10000 })
    .should('be.visible')
    .type('30');

  cy.get('.form-group #month', { timeout: 10000 })
    .should('be.visible').type('12');

  cy.get('.modal-footer', { timeout: 2000 })
    .should('be.visible')
    .contains('Purchase')
    .click({ force: true });

  cy.get('body').type('{enter}');
});

Cypress.Commands.add('addMultipleItemsToCart', (items) => {
  items.forEach((item) => {
    cy.addToCart(item.name, item.index);
    cy.wait(2000);
  });
});

Cypress.Commands.add('addToCart', (itemName) => {
  // Verifico la presencia del elemento antes de realizar acciones en él
  cy.contains('.card-title a', itemName).should('be.visible');
  // Hago clic en el elemento con el nombre del producto, se forzo para evitar error
  cy.contains('.card-title a', itemName).click({ force: true });
  // Verifico y hacer clic en 'Add to cart'
  cy.contains('Add to cart', { timeout: 5000 }).should('be.visible').click();
  cy.get('body').type('{enter}');
  cy.go(-2);
});
