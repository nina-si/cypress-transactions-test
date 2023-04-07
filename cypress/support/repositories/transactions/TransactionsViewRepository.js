class TransactionsViewRepository {
  getTransactionsTablist() {
    return cy.get('main nav[role="tablist"]');
  }

  getTransactionsTab() {
    return this.getTransactionsTablist().contains(
      'button[role="tab"]',
      'Transactions'
    );
  }

  getRegisterTransactionBtn() {
    return cy.contains('button[type="button"]', 'Register transaction');
  }

  getTransactionsBlock() {
    return cy.contains('section', 'Transactions');
  }

  getTransactionsList() {
    return cy.get('table tbody tr[tabindex="0"]');
  }
}

export default TransactionsViewRepository;
