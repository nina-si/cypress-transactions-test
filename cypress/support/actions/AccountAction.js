import AccountCreateFormRepository from '../repositories/accounts/AccountCreateFormRepository';

const registerFormRepo = new AccountCreateFormRepository();

class AccountAction {
  // Method to create a NEW account:

  createNewAccount(bankNickname, accountNickname, balance = 10000) {
    registerFormRepo.getBankNicknameField().click().clear().type(bankNickname);

    registerFormRepo
      .getAccountNicknameField()
      .click()
      .clear()
      .type(accountNickname);

    registerFormRepo.getBalanceField().click().type(balance);

    registerFormRepo.getAccountSaveBtn().click();
  }
}

export default AccountAction;
