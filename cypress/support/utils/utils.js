export const testUser = {
  email: 'ninok1102@gmail.com',
  password: 'TestingFeature1!',
  phone: '31616294112',
};

// retrieve One-Time-Password from sms provider

export const fetchDigitCode = async (phoneNumber) => {
  return cy
    .request(`https://receive-smss.com/sms/${phoneNumber}`)
    .then((html) => {
      const digitLine = html.body.match(/.*Friday.*/);

      const digitCode = digitLine[0].toString().split('<b>')[1].slice(0, 6);
      return digitCode;
    });
};
