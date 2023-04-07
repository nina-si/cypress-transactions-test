// retrieve One-Time-Password from sms provider

export const fetchDigitCode = (phoneNumber) => {
  return cy
    .request(`https://receive-smss.com/sms/${phoneNumber}`)
    .then((html) => {
      const digitLine = html.body.match(/.*Friday.*/);

      const digitCode = digitLine[0].toString().split('<b>')[1].slice(0, 6);
      return digitCode;
    });
};

// Returns string up to 12 characters

export const generateRandomString = () => {
  return Math.random().toString(36).slice(2);
};
