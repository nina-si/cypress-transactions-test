class AccountsViewRepository {
  getCreateRegisterBtn() {
    return cy.contains('button[type="button"]', 'Create new register');
  }

  getFirstAccountFromList() {
    return cy.get('tbody tr[tabindex="-1"').first();
  }
}

export default AccountsViewRepository;
