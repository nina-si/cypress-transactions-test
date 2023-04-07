import TransactionAction from '../support/actions/TransactionAction';
import TransactionsCreateFormRepository from '../support/repositories/transactions/TransactionsCreateFormRepository';
import TransactionsViewRepository from '../support/repositories/transactions/TransactionsViewRepository';

const transactionsRepo = new TransactionsViewRepository();
const transactionFormRepo = new TransactionsCreateFormRepository();
const transactionAction = new TransactionAction();
let initialTransactionsCount = 0;

describe('Transactions View', function () {
  beforeEach(() => {
    cy.visit('/transactions');
  });

  it('registers new transaction with required fields filled', function () {
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

    transactionAction.fillNewTransaction();

    transactionFormRepo
      .getConfirmTransactionBtn()
      .should('be.visible')
      .and('not.be.disabled');

    transactionFormRepo.getConfirmTransactionBtn().click();
    transactionFormRepo.getRegisterTransactionForm().should('not.to.exist');

    cy.get('table tbody tr[tabindex="0"]').should('have.length.greaterThan', 0);
  });
});
