class LoginRepository {
  getLoginBtn() {
    return cy.contains('.button', 'Login');
  }

  getEmailField() {
    return cy.get('[name="email"] input');
  }

  getPasswordField() {
    return cy.get('[name="password"] input');
  }

  getConfirmLoginBtn() {
    return cy.contains('button[type="submit"]', 'Confirm');
  }

  getDigitCodeField() {
    return cy.getElementByItsLabel('6-digit');
  }

  getConfirmDigitCodeBtn() {
    return cy.contains('button[type="button"]', 'Next');
  }
}

export default LoginRepository;
