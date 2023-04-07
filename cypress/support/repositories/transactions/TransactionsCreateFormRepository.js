class TransactionsCreateFormRepository {
  getRegisterTransactionForm() {
    return cy.contains('section[role="dialog"]', 'Register transaction');
  }

  getCounterpartyField() {
    return this.getRegisterTransactionForm().contains('Select counterparty');
  }

  getBankField() {
    return this.getRegisterTransactionForm().contains('Select bank');
  }

  getBanksDropdown() {
    return cy.get('#portal-dropdown nav[role="menu"] .overflow-auto');
  }

  getFirstBank() {
    return cy.get('button[type="button"].group').first();
  }

  getOwnerField() {
    return this.getRegisterTransactionForm().contains('Tag a team member');
  }

  getTransactionTypeField() {
    return cy.getElementByItsLabel('Inflow or outflow', 'div');
  }

  chooseTransactionType(type) {
    return cy.contains('button[type="button"] span', type);
  }

  getDateField() {
    return this.getRegisterTransactionForm().find('[placeholder="DD/MM/YYYY"]');
  }

  getCategoryField() {}

  getAmountField() {
    return cy.getElementByItsLabel('Amount');
  }

  getCancelTransactionBtn() {}

  getConfirmTransactionBtn() {
    return this.getRegisterTransactionForm().find('button[type="submit"]');
  }

  getFirstDateInDropdown() {
    return cy.get('button[data-calendar-row="1"]').first();
  }
}

export default TransactionsCreateFormRepository;
