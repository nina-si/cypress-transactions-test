class AccountCreateFormRepository {
  getCreateRegisterModal() {
    return cy.contains('section', 'Create new manual register');
  }

  getBankNicknameField() {
    return cy.getElementByItsLabel('Bank nickname');
  }

  getAccountNicknameField() {
    return cy.getElementByItsLabel('Account nickname');
  }

  getCurrencyField() {
    return cy.getElementByItsLabel('Currency');
  }

  getBalanceField() {
    return cy.getElementByItsLabel('Balance');
  }

  getAccountSaveBtn() {
    return cy.contains('button[type="submit"]', 'Save');
  }

  getCancelBtn() {
    return cy.contains('button[type="button"]', 'Cancel');
  }
}

export default AccountCreateFormRepository;
