class SideNavigationRepository {
  getOverviewLink() {
    return cy.contains('nav a', 'Overview');
  }

  getAccountsLink() {
    return cy.contains('nav a', 'Accounts');
  }

  getTransactionsLink() {
    return cy.contains('nav a', 'Transactions');
  }

  getPaymentsLink() {
    return cy.contains('nav a', 'Payments');
  }

  getCardsLink() {
    return cy.contains('nav a', 'Cards');
  }

  getCashFlowLink() {
    return cy.contains('nav a', 'Cash flow');
  }

  getAccountingLink() {
    return cy.contains('nav a', 'Accounting');
  }

  getFinancingLink() {
    return cy.contains('nav a', 'Financing');
  }
}

export default SideNavigationRepository;
