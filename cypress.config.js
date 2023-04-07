const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app.fridayfinance.com/',
    experimentalRunAllSpecs: true,
    defaultCommandTimeout: 6000,
  },
});
