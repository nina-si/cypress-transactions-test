// retrieve One-Time-Password from sms provider

export const fetchDigitCode = (phoneNumber) => {
  return cy
    .request(`https://receive-smss.com/sms/${phoneNumber}`)
    .then((html) => {
      const codeLine = html.body.match(/.*Friday Finance.*/);
      const digitCode = codeLine[0].match(/<b>\d+/);
      return digitCode[0].match(/\d+/)[0];
    });
};
