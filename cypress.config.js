/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://notes-serverless-app.com",
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 15000,
  setupNodeEvents(on, config) {
    require('@cypress/grep/src/plugin')(config)
    return config
  }
});

