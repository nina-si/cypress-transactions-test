import TransactionAction from '../support/actions/TransactionAction';
import TransactionsCreateFormRepository from '../support/repositories/transactions/TransactionsCreateFormRepository';
import TransactionsEditFormRepository from '../support/repositories/transactions/TransactionsEditFormRepository';
import TransactionsViewRepository from '../support/repositories/transactions/TransactionsViewRepository';
import {
  generateRandomNumberInRange,
  generateRandomString,
} from '../support/utils/utils';

const transactionsRepo = new TransactionsViewRepository();
const transactionFormRepo = new TransactionsCreateFormRepository();
const transactionEditFormRepo = new TransactionsEditFormRepository();
const transactionAction = new TransactionAction();

describe('Transactions View', function () {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.login(users.user1.email, users.user1.password, users.user1.phone);
    });
    cy.visit('/transactions');
  });

  it('registers new transaction when required fields filled', function () {
    transactionsRepo
      .getTransactionsTab()
      .should('be.visible')
      .and('to.be.disabled');

    transactionsRepo
      .getRegisterTransactionBtn()
      .should('be.visible')
      .and('not.be.disabled');

    transactionsRepo.getRegisterTransactionBtn().click();

    transactionFormRepo.getRegisterTransactionForm().should('be.visible');

    const transactionAmount = generateRandomNumberInRange();

    transactionAction.fillNewTransaction(transactionAmount);

    transactionFormRepo
      .getConfirmTransactionBtn()
      .should('be.visible')
      .and('not.be.disabled');

    transactionFormRepo.getConfirmTransactionBtn().click();
    transactionFormRepo.getRegisterTransactionForm().should('not.to.exist');

    transactionsRepo.getTransactionsList().should('have.length.greaterThan', 0);

    // Filter transactions list by amount and check the filtered list is not empty
    transactionAction.filterTransactionsByAmount(
      Math.floor(transactionAmount / 100) * 100,
      Math.ceil(transactionAmount / 100) * 100
    );
    transactionsRepo.getTransactionsList().should('have.length.greaterThan', 0);
  });

  it('edits transaction', function () {
    const counterpartyName = 'Counterparty ' + generateRandomString();

    transactionsRepo
      .getTransactionsTab()
      .should('be.visible')
      .and('to.be.disabled');

    transactionsRepo.getTransactionsList().first().click();
    transactionsRepo
      .getTransactionsList()
      .first()
      .find('td:first-of-type span')
      .should('contain.html', 'svg');

    transactionsRepo
      .getManageTransactionBtn()
      .should('be.visible')
      .and('be.enabled');
    transactionsRepo.getManageTransactionBtn().click();

    transactionsRepo.getManageTransactionDropdown().should('be.visible');
    transactionsRepo
      .getManageTransactionDropdown()
      .children()
      .contains('View and edit')
      .click();

    transactionEditFormRepo.getTransactionEditForm().should('be.visible');
    transactionAction.editTransactionCounterparty(counterpartyName);

    transactionsRepo
      .getTransactionsList()
      .first()
      .find('td:nth-child(2)')
      .should('contain', counterpartyName);
  });
});
