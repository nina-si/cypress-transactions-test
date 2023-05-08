import TransactionsCreateFormRepository from '../repositories/transactions/TransactionsCreateFormRepository';
import TransactionsEditFormRepository from '../repositories/transactions/TransactionsEditFormRepository';
import TransactionsViewRepository from '../repositories/transactions/TransactionsViewRepository';

const registerFormRepo = new TransactionsCreateFormRepository();
const editFormRepo = new TransactionsEditFormRepository();
const transactionsView = new TransactionsViewRepository();

class TransactionAction {
  // Method to fill in required fields for the NEW transaction:

  fillNewTransaction(amount = 10000) {
    registerFormRepo.getBankField().click();
    registerFormRepo.getFirstBank().click();

    registerFormRepo.getTransactionTypeField().click();
    registerFormRepo.chooseTransactionType('Inflow').click();

    registerFormRepo.getDateField().click();
    registerFormRepo.getFirstDateInDropdown().click();

    registerFormRepo.getAmountField().focus().type(amount);
  }

  editTransactionCounterparty(counterpartyName) {
    editFormRepo.getCounterpartyField().click();
    editFormRepo
      .getCounterpartySearchInput()
      .click()
      .clear()
      .type(counterpartyName, { delay: 30 });

    editFormRepo.getAddCounterpartyBtn().should('be.visible').and('be.enabled');
    editFormRepo.getAddCounterpartyBtn().click();

    editFormRepo.getCounterpartyField().should('contain', counterpartyName);

    editFormRepo.getConfirmEditBtn().click();
  }

  filterTransactionsByAmount(minAmount, maxAmount) {
    transactionsView.getFilterBtn().click();

    transactionsView.getAmountFilterTab().click();
    if (minAmount) {
      transactionsView
        .getFromAmountField()
        .click()
        .type(minAmount + '{enter}', { delay: 100 });
      // wait for list to be filtered
      cy.wait(500);
    }

    if (maxAmount) {
      transactionsView
        .getToAmountField()
        .click()
        .type(maxAmount + '{enter}', { delay: 100 });
      // wait for list to be filtered
      cy.wait(500);
    }

    cy.get('div[role="presentation"]').click('bottomRight');
  }
}

export default TransactionAction;
