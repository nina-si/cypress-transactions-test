import LoginAction from './actions/LoginAction';
import './commands';

before(() => {
  const loginAction = new LoginAction();
  cy.visit('https://app.fridayfinance.com/auth/signin');

  loginAction.logIn('ninok1102@gmail.com', 'TestingFeature1!', '31616294112');
});
