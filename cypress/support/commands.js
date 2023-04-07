import LoginAction from './actions/LoginAction';

// Should be invoked in @beforeEach. Saves session between tests

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

// Looks for id in 'for' attribute that label has,
// and then looks for html element with this id.
// Tag name can be specified instead of input.

Cypress.Commands.add('getElementByItsLabel', (labelName, tagName = 'input') => {
  return cy
    .contains('label', labelName)
    .invoke('attr', 'for')
    .then((inputId) => {
      return cy.get(`${tagName}#${inputId}`);
    });
});
