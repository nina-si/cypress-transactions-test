class AccountCreateFormRepository {
  getCreateRegisterModal() {
    return cy.contains('section', 'Create new manual register');
  }

  getBankNicknameField() {
    return cy
      .contains('label', 'Bank nickname')
      .invoke('attr', 'for')
      .then((inputId) => {
        return cy.get(`input#${inputId}`);
      });
  }

  getAccountNicknameField() {
    return cy
      .contains('label', 'Account nickname')
      .invoke('attr', 'for')
      .then((inputId) => {
        return cy.get(`input#${inputId}`);
      });
  }

  getCurrencyField() {
    return cy
      .contains('label', 'Currency')
      .invoke('attr', 'for')
      .then((inputId) => {
        return cy.get(`input#${inputId}`);
      });
  }

  getBalanceField() {
    return cy
      .contains('label', 'Balance')
      .invoke('attr', 'for')
      .then((inputId) => {
        return cy.get(`input#${inputId}`);
      });
  }

  getAccountSaveBtn() {
    return cy.contains('button[type="submit"]', 'Save');
  }

  getCancelBtn() {
    return cy.contains('button[type="button"]', 'Cancel');
  }
}

export default AccountCreateFormRepository;
