describe('First test', function () {
  it('opens main page', function () {
    cy.visit('/');
    cy.contains('Login');
  });
});
