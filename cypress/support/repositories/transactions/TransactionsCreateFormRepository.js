class TransactionsCreateFormRepository {
  getRegisterTransactionForm() {
    return cy.contains('section[role="dialog"]', 'Register transaction');
  }

  getCounterpartyField() {
    return cy.getElementByItsLabel('Counterparty', 'div');
  }

  getBankField() {
    return cy.getElementByItsLabel('Bank', 'div');
  }

  getBanksDropdown() {
    return cy.get('#portal-dropdown nav[role="menu"] .overflow-auto');
  }

  getFirstBank() {
    return cy.get('button[type="button"].group').first();
  }

  getOwnerField() {
    return cy.getElementByItsLabel('Transaction owner', 'div');
  }

  getTransactionTypeField() {
    return cy.getElementByItsLabel('Inflow or outflow', 'div');
  }

  chooseTransactionType(type) {
    return cy.contains('button[type="button"] span', type);
  }

  getDateField() {
    return cy.getElementByItsLabel('Date');
  }

  getCategoryField() {
    return cy.getElementByItsLabel('Category', 'div');
  }

  getAmountField() {
    return cy.getElementByItsLabel('Amount');
  }

  getCancelTransactionBtn() {
    return this.getRegisterTransactionForm().contains(
      'button[type="button"]',
      'Cancel'
    );
  }

  getConfirmTransactionBtn() {
    return this.getRegisterTransactionForm().find('button[type="submit"]');
  }

  getFirstDateInDropdown() {
    return cy.get('button[data-calendar-row="1"]').first();
  }
}

export default TransactionsCreateFormRepository;
