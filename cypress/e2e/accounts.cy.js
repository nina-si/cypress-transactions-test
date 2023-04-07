import AccountAction from '../support/actions/AccountAction';
import AccountCreateFormRepository from '../support/repositories/accounts/AccountCreateFormRepository';
import AccountsViewRepository from '../support/repositories/accounts/AccountsViewRepository';
import users from '../fixtures/users.json';

const accountsViewRepo = new AccountsViewRepository();
const accountCreateFormRepo = new AccountCreateFormRepository();
const accountAction = new AccountAction();

describe('Accounts View', function () {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.login(users.user1.email, users.user1.password, users.user1.phone);
    });
    cy.visit('/accounts');
  });

  it('creates new manual register', function () {
    accountsViewRepo
      .getCreateRegisterBtn()
      .should('be.visible')
      .and('to.be.enabled');

    accountsViewRepo.getCreateRegisterBtn().click();

    accountAction.fillNewAccount('Test bank1', 'Test account1');
    accountsViewRepo
      .getFirstAccountFromList()
      .contains('td', 'Test bank1')
      .should('exist')
      .and('be.visible');
  });

  it('does not saves account when required fields are incomplete', function () {
    accountsViewRepo
      .getCreateRegisterBtn()
      .should('be.visible')
      .and('to.be.enabled');

    accountsViewRepo.getCreateRegisterBtn().click();

    accountCreateFormRepo.getAccountSaveBtn().click();

    cy.get('[id$=-error').should('have.lengthOf', 2);
  });
});
