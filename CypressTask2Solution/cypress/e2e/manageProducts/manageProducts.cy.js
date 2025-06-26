/// <reference types="cypress" />;

const { should } = require("chai");

describe("Manage Products", () => {
  // before(() => {
  //   cy.loginToMagento("", "");
  // });
  //it("validate that the user can add products to the shopping cart", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#search").type("shirt" + "{enter}");
    cy.contains(".product-item", "Radiant Tee").click();
    cy.wait(1000);
    cy.get(".swatch-option").contains("M").click();
    cy.get('[option-label="Blue"]').click();
    cy.get("#product-addtocart-button").click();

    // cy.get('[role="alert"]')
    //   .should("be.visible")
    //   .and("contain", "You added Radiant Tee to your shopping cart.");
    // cy.get(".counter-number").should("be.visible").and("contain", "1");
  });

  //------------------------------------------------

  it("validate that the user can delete products from the shopping cart dialog", () => {
    cy.wait(3000);
    cy.get(".showcart").click();
    cy.get(".delete").click();
    cy.get(".action-accept").click();
    cy.get(".subtitle")
      .should("be.visible")
      .and("contain", "You have no items in your shopping cart.");
    cy.get(".counter-number").should("be.hidden");
  });

  it("validate that the user can delete products from the shopping cart page", () => {
    cy.wait(3000);
    cy.get(".showcart").click();
    cy.get(".viewcart").click();
    cy.wait(1000);
    cy.get(".action-delete").click();

    cy.get(".cart-empty")
      .should("be.visible")
      .and("contain", "You have no items in your shopping cart.")
      .and("contain", "Click here to continue shopping.");
    cy.get(".counter-number").should("be.hidden");
  });

  //----------------------------------------------------

  it("validate that the user can update products from the shopping cart dialog", () => {
    cy.wait(3000);
    cy.get(".showcart").click();
    cy.get('[title="Edit item"]').click();
    cy.get('[option-label="Orange"]').click();
    cy.get("#product-updatecart-button").click();

    cy.get('[role="alert"]')
      .should("be.visible")
      .and("contain", "Radiant Tee was updated in your shopping cart.");
    cy.url().should(
      "eq",
      "https://magento.softwaretestingboard.com/checkout/cart/"
    );
  });
  it("validate that the user can update products from the shopping cart page", () => {
    cy.wait(3000);
    cy.get(".showcart").click();
    cy.get(".viewcart").click();
    cy.wait(1000);
    cy.get('[title="Qty"]').clear().type("2");
    cy.get(".update").click();

    cy.get('[title="Qty"]').should("have.value", "2");
    cy.get(".counter-number").should("be.visible").and("contain", "2");
  });
});
