import AccountCreateFormRepository from '../repositories/accounts/AccountCreateFormRepository';

const registerFormRepo = new AccountCreateFormRepository();

class AccountAction {
  // Method to fill in required fields for the NEW account:

  fillNewAccount(bankNickname, AccountNickname) {
    registerFormRepo.getBankNicknameField().click().clear().type(bankNickname);

    registerFormRepo
      .getAccountNicknameField()
      .click()
      .clear()
      .type(AccountNickname);

    registerFormRepo.getAccountSaveBtn().click();
  }
}

export default AccountAction;
