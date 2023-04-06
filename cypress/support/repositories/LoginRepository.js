class LoginRepository {
  constructor() {}

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
    const inputId = cy.contains('label', '6-digit').for;
    return cy.get(`input#${inputId}`);
  }

  getConfirmDigitCodeBtn() {
    return cy.contains('button[type="button"]', 'Next');
  }
}

export default LoginRepository;
