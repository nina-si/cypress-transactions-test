import CounterpartiesViewRepository from '../repositories/counterparties/CounterpartiesViewRepository';

const counterpartiesViewRepo = new CounterpartiesViewRepository();

class CounterpartyAction {
  createCounterparty(counterPartyName) {
    counterpartiesViewRepo.getCreateCounterpartyBtn().click();
    counterpartiesViewRepo.getCreateCounterpartyModal().should('be.visible');
    counterpartiesViewRepo
      .getCounterpartyNameField()
      .click()
      .clear()
      .type(counterPartyName);
    counterpartiesViewRepo.getConfirmCreateCounterpartyBtn().click();
  }
}

export default CounterpartyAction;
