const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://magento.softwaretestingboard.com/",
    screenshotsFolder: "MyScreens",
    trashAssetsBeforeRuns: false,
    video: false,
    videoCompression: 20,
    videosFolder: "MyVideos",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/myReport", // where to save in directory
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss",
    },
  },
});
