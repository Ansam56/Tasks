/// <reference types="cypress"/>
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../../support/pageObjects/shared/actions.cy";
import addWatchesActions from "../../../../support/pageObjects/addWatches/actions.cy";
import addWatchesAssertions from "../../../../support/pageObjects/addWatches/assertions.cy";

const sharedAction = new sharedActions();
const watchesActions = new addWatchesActions();
const watchesAssertion = new addWatchesAssertions();

Given("The user navigated to the Magento website", () => {
  sharedAction.openHomePage();
});

When("Clicks on the Gear menu", () => {
  watchesActions.clicksGearMenu();
});

When("Clicks on the Watches option", () => {
  watchesActions.ClicksWatchesOption();
});

When("Clicks on list mode", () => {
  watchesActions.clicksListMode();
});
let cnt = 0;

When("Adds all watches with a price greater than 55 to the cart", () => {
  cy.get(".price-wrapper .price").then(($price) => {
    for (let i = 0; i < $price.length; i++) {
      cy.wrap($price[i])
        .invoke("text")
        .then((watchPrice) => {
          let newStr = watchPrice.replace("$", "");
          let newPrice = parseInt(newStr);
          if (newPrice > 55) {
            //cy.get(".tocart").click();
            cy.wrap($price[i])
              .parents(".product-item-details")
              .find(".tocart")
              .click({ force: true });
            cy.wait(1700);
            cnt++;
          }

          //cy.log(newStr);
        });
    }
  });
});

Then(
  "All watches with a price greater than 55 should be added to the cart",
  () => {
    watchesAssertion.checksCounter(cnt);
  }
);
