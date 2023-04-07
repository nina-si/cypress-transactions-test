import AccountAction from '../support/actions/AccountAction';
import AccountCreateFormRepository from '../support/repositories/accounts/AccountCreateFormRepository';
import AccountsViewRepository from '../support/repositories/accounts/AccountsViewRepository';
import { generateRandomString } from '../support/utils/utils';

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

    const bankName = 'Bank ' + generateRandomString();
    const accountName = 'Account ' + generateRandomString();

    accountAction.fillNewAccount(bankName, accountName);
    accountsViewRepo
      .getFirstAccountFromList()
      .contains('td', bankName)
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
