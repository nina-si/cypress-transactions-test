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

    accountAction.createNewAccount(bankName, accountName);
    accountsViewRepo
      .getFirstAccountFromList()
      .should('contain', bankName)
      .and('be.visible');
  });

  it('does not save account when required fields are empty', function () {
    accountsViewRepo
      .getCreateRegisterBtn()
      .should('be.visible')
      .and('to.be.enabled');

    accountsViewRepo.getCreateRegisterBtn().click();

    accountCreateFormRepo.getBalanceField().click().type(200);

    accountCreateFormRepo.getAccountSaveBtn().click();

    cy.get('[id$=-error').should('have.lengthOf', 2);
    accountCreateFormRepo
      .getCreateRegisterModal()
      .should('exist')
      .and('be.visible');
  });

  it('removes register from list', function () {
    accountsViewRepo.getFirstRegisterName().then((prevBankName) => {
      cy.log(prevBankName);
      accountsViewRepo
        .getRegisterOptionsBtn()
        .should('be.visible')
        .and('be.enabled');

      accountsViewRepo.getRegisterOptionsBtn().click();

      accountsViewRepo.getRegisterOptionsDropdown().should('be.visible');
      accountsViewRepo
        .getRegisterOptionsDropdown()
        .contains('Remove register')
        .click();

      accountsViewRepo
        .getRemoveRegisterModal()
        .should('be.visible')
        .and('contain', prevBankName);

      cy.url().should('include', 'remove-consent');

      accountsViewRepo
        .getConfirmRemoveRegisterBtn()
        .should('be.visible')
        .and('be.enabled');

      accountsViewRepo
        .getCancelRemoveRegisterBtn()
        .should('be.visible')
        .and('be.enabled');

      accountsViewRepo.getConfirmRemoveRegisterBtn().click();
      accountsViewRepo
        .getFirstAccountFromList()
        .should('not.contain', prevBankName);
    });
  });

  it('cancels register removing', function () {
    // wait for accounts list to be loaded
    cy.wait(0);
    accountsViewRepo.getFirstRegisterName().then((prevBankName) => {
      cy.log(prevBankName);
      accountsViewRepo
        .getRegisterOptionsBtn()
        .should('be.visible')
        .and('be.enabled');

      accountsViewRepo.getRegisterOptionsBtn().click();
      cy.wait(300);

      accountsViewRepo.getRegisterOptionsDropdown().should('be.visible');
      accountsViewRepo
        .getRegisterOptionsDropdown()
        .contains('span', 'Remove register')
        .click();

      accountsViewRepo
        .getRemoveRegisterModal()
        .should('be.visible')
        .and('contain', prevBankName);

      cy.url().should('include', 'remove-consent');

      accountsViewRepo
        .getConfirmRemoveRegisterBtn()
        .should('be.visible')
        .and('be.enabled');

      accountsViewRepo
        .getCancelRemoveRegisterBtn()
        .should('be.visible')
        .and('be.enabled');

      accountsViewRepo.getCancelRemoveRegisterBtn().click();
      accountsViewRepo
        .getFirstAccountFromList()
        .should('contain', prevBankName)
        .and('be.visible');
    });
  });
});
