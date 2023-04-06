import LoginRepository from '../repositories/LoginRepository';
import { fetchDigitCode } from '../utils/utils';

const loginRepo = new LoginRepository();

class LoginAction {
  logIn(email, password, phone) {
    loginRepo.getEmailField().clear().type(email);
    loginRepo.getPasswordField().clear().type(password);
    loginRepo.getConfirmLoginBtn().click();
    const digitCode = fetchDigitCode(phone);
    loginRepo.getDigitCodeField().clear().type(digitCode);
    loginRepo.getConfirmDigitCodeBtn().click();
  }
}

export default LoginAction;
