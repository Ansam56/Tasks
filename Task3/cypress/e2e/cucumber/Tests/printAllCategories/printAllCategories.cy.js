/// <reference types="cypress"/>
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../../support/pageObjects/shared/actions.cy";
import printCategoriesAction from "../../../../support/pageObjects/printAllCategories/actions.cy";
import printCategoriesAssertion from "../../../../support/pageObjects/printAllCategories/asserions.cy";

const shardActions = new sharedActions();
const categoriesAction = new printCategoriesAction();
const categoriesAssertion = new printCategoriesAssertion();

Given("The user navigated to magento website", () => {
  shardActions.openHomePage();
});

When("Clicks on What's New menu option", () => {
  categoriesAction.clicksOnWhatsNew();
});
Then("The categories should be available in New In Womens section", () => {
  categoriesAssertion.printCategories();
});
