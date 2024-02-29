const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

/* const { defineConfig } = require('cypress');

module.exports = defineConfig({
  baseUrl: 'https://www.demoblaze.com',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
 */
