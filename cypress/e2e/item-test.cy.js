describe('Pruebas click', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
    cy.credential();
  });

  it('Inspeccionar item', () => {
    cy.chooseItem('#tbodyid > div:nth-child(9) > div > div > h4 > a');
    cy.wait(2000);
    cy.url({ timeout: 15000, log: false }).should('include', '/prod.html?idp_=9');
    cy.go('back');

    cy.get('.card-title').contains('HTC One M9').should('be.visible').click();
    cy.wait(2000);

    cy.go('back');

    cy.chooseItem('#itemc').contains('Phones').should('be.visible').click();
  });
});
