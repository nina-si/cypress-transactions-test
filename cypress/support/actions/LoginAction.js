import LoginRepository from '../repositories/LoginRepository';
import { fetchDigitCode } from '../utils/utils';

const loginRepo = new LoginRepository();

class LoginAction {
  logIn(email, password, phone) {
    loginRepo.getEmailField().clear().type(email, { delay: 30 });
    loginRepo.getPasswordField().clear().type(password, { delay: 30 });
    cy.wait(4000);
    loginRepo.getConfirmLoginBtn().click();

    // cy.request(`https://receive-smss.com/sms/${phone}`).then((html) => {
    //   const digitLine = html.body.match(/.*Friday.*/);

    //   cy.log(
    //     '----------------' +
    //       digitLine[0].toString().split('<b>')[1].slice(0, 6) +
    //       '---------------------------------------------'
    //   );
    // });

    cy.pause();
    // .then((digitCode) => {
    //   loginRepo.getDigitCodeField().clear().type(digitCode, { delay: 30 });
    //   cy.wait(2000);
    //   loginRepo.getConfirmDigitCodeBtn().click();
    // });
  }
}

export default LoginAction;
