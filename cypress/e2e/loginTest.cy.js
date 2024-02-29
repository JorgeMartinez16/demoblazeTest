describe('Pruebas de inicio de sesión en DemoBlaze', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  it('Inicia sesión y cierra sesión con credenciales válidas desde fixture', () => {
    cy.fixture('usuarios').then((usuarios) => {
      usuarios.forEach((usuario) => {
        cy.login('usuarios', usuario.user, usuario.password);
        cy.log('Inicio de sesión exitoso');
        cy.logout();

        cy.visit('https://www.demoblaze.com/'); // Visito el home para probar con otros datos
      });
    });
  });
});
