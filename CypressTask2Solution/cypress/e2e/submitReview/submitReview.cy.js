/// <reference types="cypress" />;

const { should } = require("chai");

describe("Submit a Review", () => {
  it("validate that the user can submit a review on the product page", () => {
    cy.visit("/hero-hoodie.html");
    cy.get("#tab-label-reviews-title").click();
    cy.get(".legend")
      .should("be.visible")
      .and("contain", "You're reviewing:Hero Hoodie");

    cy.get(".review-field-ratings")
      .should("be.visible")
      .and("contain", "Your Rating");

    cy.get("#Rating_rating_label")
      .should("be.visible")
      .and("contain", "Rating");

    cy.get("#Rating_4_label").click({ force: true });

    cy.get('[for="nickname_field"]').should("be.visible");
    cy.get("#nickname_field").type("ansam");

    cy.get('[for="summary_field"]').should("be.visible");
    cy.get("#summary_field").type("lalala");

    cy.get('[for="review_field"]').should("be.visible");
    cy.get("#review_field").type("good");

    cy.get(".submit").contains("Submit Review").click();

    cy.get('[role="alert"]')
      .should("be.visible")
      .and("contain", "You submitted your review for moderation.");
  });

  it("Verify that the validation for the inputs field is correct", () => {
    cy.visit("/hero-hoodie.html");
    cy.get("#tab-label-reviews-title").click();
    cy.get(".submit").contains("Submit Review").click();

    cy.get(".mage-error[for='ratings[4]']")
      .should("be.visible")
      .and("contain", "Please select one of each of the ratings above.");

    cy.get("#nickname_field-error")
      .should("be.visible")
      .and("contain", "This is a required field.");

    cy.get("#summary_field-error")
      .should("be.visible")
      .and("contain", "This is a required field.");

    cy.get("#review_field-error")
      .should("be.visible")
      .and("contain", "This is a required field.");
  });
});
