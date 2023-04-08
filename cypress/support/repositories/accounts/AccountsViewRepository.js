class AccountsViewRepository {
  getCreateRegisterBtn() {
    return cy.contains('button[type="button"]', 'Create new register');
  }

  getFirstAccountFromList() {
    return cy.get('tbody tr[tabindex="-1"]').first();
  }

  // Returns the name of 1st Register in the table. Must be chained further
  getFirstRegisterName() {
    return this.getFirstAccountFromList()
      .find('td:first-of-type picture + span > span:first-child')
      .invoke('text');
  }

  // Kebab Menu btn in a Register row
  getRegisterOptionsBtn() {
    return this.getFirstAccountFromList()
      .find('td')
      .last()
      .find('button[type="button"]');
  }

  getRegisterOptionsDropdown() {
    return cy.contains('nav[role="menu"]', 'Remove register');
  }

  getRemoveRegisterModal() {
    return cy.contains('section[role="dialog"]', 'Remove register');
  }

  getConfirmRemoveRegisterBtn() {
    return this.getRemoveRegisterModal().contains(
      'button[type="submit"]',
      'Confirm'
    );
  }

  getCancelRemoveRegisterBtn() {
    return this.getRemoveRegisterModal().contains(
      'button[type="button"]',
      'Cancel'
    );
  }
}

export default AccountsViewRepository;
