class TransactionsEditFormRepository {
  getTransactionEditForm() {
    return cy.contains('section[role="dialog"]', 'Edit transaction');
  }

  getCounterpartyField() {
    return cy.getElementByItsLabel('Counterparty', 'div');
  }

  getCounterpartySearchInput() {
    return cy
      .contains('nav[role="menu"]', 'with this counterparty')
      .find('input[type="search"]');
  }

  getAddCounterpartyBtn() {
    return cy
      .contains('nav[role="menu"]', 'with this counterparty')
      .contains('button[type="submit"]', 'Add ');
  }

  getConfirmEditBtn() {
    return this.getTransactionEditForm().contains(
      'button[type="submit"]',
      'Save'
    );
  }
}

export default TransactionsEditFormRepository;
