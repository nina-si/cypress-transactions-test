import LoginAction from './actions/LoginAction';

Cypress.Commands.add('login', (email, password, phone) => {
  cy.session(
    [email, password, phone],
    () => {
      const loginAction = new LoginAction();
      cy.visit('/auth/signin');

      loginAction.logIn(email, password, phone);
    },
    {
      cacheAcrossSpecs: true,
    }
  );
});
