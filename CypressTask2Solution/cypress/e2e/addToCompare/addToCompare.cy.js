/// <reference types="cypress"/>

describe("task", () => {
  it("validate that the user can add the product to compare", () => {
    cy.visit("/");
    cy.get("#search").type("shirt" + "{enter}");
    cy.contains(".product-item", "Radiant Tee").click();
    cy.wait(1000);
    cy.get(".tocompare").click();
    cy.get('[role="alert"]')
      .should("be.visible")
      .and("contain", "You added product Radiant Tee to the comparison list.");
  });
});
