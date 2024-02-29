describe("probando carrito de compras", () => {
  beforeEach(() => {
    cy.visit("https://www.demoblaze.com/");
    cy.credential();
  });

  it("agregar artículos al carrito de compras", () => {
    cy.addToCart("Iphone 6 32gb");
    /*  cy.addToCart('pote de suero'); */
    cy.addToCart("Sony xperia z5");
    cy.addToCart("Iphone 6 32gb");
    cy.addToCart("Nexus 6");
    cy.get("#cartur")
      .should("be.visible")
      .contains("Cart")
      .click({ force: true });
  });

  it("agregar articulos al carrito y generar la orden de compra", () => {
    cy.placeOrder();
  });

  it("agregar articulos al carrito y generar la orden de compra", () => {
    const itemsToOrder = [
      "Sony xperia z5",
      "Iphone 6 32gb",
      "Nexus 6",
      "Sony xperia z5",
    ];
    cy.placeOrderByParameters(itemsToOrder);
  });

  it("agregar artículos al carrito de compras", () => {
    cy.addToCart("Iphone 6 32gb");
    /* cy.addToCart('pote de suero'); */
    cy.addToCart("Sony xperia z5");
    cy.addToCart("Iphone 6 32gb");
    cy.addToCart("Nexus 6");
    cy.get("#cartur")
      .should("be.visible")
      .contains("Cart")
      .click({ force: true });
  });
});
