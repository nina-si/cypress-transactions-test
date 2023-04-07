import LoginRepository from '../repositories/LoginRepository';
import { fetchDigitCode } from '../utils/utils';

const loginRepo = new LoginRepository();

class LoginAction {
  logIn(email, password, phone) {
    loginRepo.getEmailField().clear().type(email, { delay: 30 });
    loginRepo.getPasswordField().clear().type(password, { delay: 30 });
    cy.wait(3000);
    loginRepo.getConfirmLoginBtn().click();

    cy.pause();

    // QA should provide SMS-code if asked by a system.
    // For test user digit code could be found here: https://receive-smss.com/sms/31616294112/
    // Then QA should resume testing in Cypress GUI
  }
}

export default LoginAction;
