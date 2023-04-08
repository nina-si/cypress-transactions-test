class CounterpartiesViewRepository {
  getCreateCounterpartyBtn() {
    return cy.contains('button[type="button"]', 'Create counterparty');
  }

  getCreateCounterpartyModal() {
    return cy.contains('section[role="dialog"]', 'Create counterparty');
  }

  getCounterpartyNameField() {
    return cy.getElementByItsLabel('Counterparty name');
  }

  getCategoryNameField() {
    return cy.getElementByItsLabel('Category', 'div');
  }

  getConfirmCreateCounterpartyBtn() {
    return this.getCreateCounterpartyModal().contains(
      'button[type="submit"]',
      'Create'
    );
  }

  getCancelCreateCounterpartyBtn() {
    return this.getCreateCounterpartyModal().contains(
      'button[type="button"]',
      'Cancel'
    );
  }
}

export default CounterpartiesViewRepository;
