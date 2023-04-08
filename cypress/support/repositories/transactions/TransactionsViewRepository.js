class TransactionsViewRepository {
  // Transactions top menu

  getTransactionsTablist() {
    return cy.get('main nav[role="tablist"]');
  }

  getTransactionsTab() {
    return this.getTransactionsTablist().contains(
      'button[role="tab"]',
      'Transactions'
    );
  }

  getCounterpartiesTab() {
    return this.getTransactionsTablist().contains(
      'button[role="tab"]',
      'Counterparties'
    );
  }

  getRegisterTransactionBtn() {
    return cy.contains('button[type="button"]', 'Register transaction');
  }

  // Transactions table

  getTransactionsBlock() {
    return cy.contains('section', 'Transactions');
  }

  getTransactionsList() {
    return this.getTransactionsBlock().find('table tbody tr[tabindex="0"]');
  }

  // Manage Transaction

  getManageTransactionBtn() {
    return cy.contains('button[type="button"]', 'Manage transaction');
  }

  getManageTransactionDropdown() {
    return cy.contains('nav[role="menu"]', 'View and edit');
  }

  // Filtering

  getFilterBtn() {
    return cy.contains('button[type="button"]', 'Filter');
  }

  getFilterDropdown() {
    return cy.contains('nav[role="menu"]', 'Origin');
  }

  getActiveFilterTab() {
    return this.getFilterDropdown().find('button[tabindex="-1"]');
  }

  getAmountFilterTab() {
    return this.getFilterDropdown().contains('button', 'Amount');
  }

  getFromAmountField() {
    return cy.getElementByItsLabel('From amount');
  }

  getToAmountField() {
    return cy.getElementByItsLabel('To amount');
  }
}

export default TransactionsViewRepository;
