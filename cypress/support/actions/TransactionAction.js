import TransactionsCreateFormRepository from '../repositories/transactions/TransactionsCreateFormRepository';

const registerFormRepo = new TransactionsCreateFormRepository();

class TransactionAction {
  // Method to fill in required fields for the NEW transaction:

  fillNewTransaction() {
    registerFormRepo.getBankField().click();
    registerFormRepo.getFirstBank().click();

    registerFormRepo.getTransactionTypeField().click();
    registerFormRepo.chooseTransactionType('Inflow').click();

    registerFormRepo.getDateField().click();
    registerFormRepo.getFirstDate().click();

    registerFormRepo.getAmountField().focus().type(10000);
  }
}

export default TransactionAction;
