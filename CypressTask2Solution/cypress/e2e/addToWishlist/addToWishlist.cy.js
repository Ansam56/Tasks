/// <reference types="cypress"/>

describe("task", () => {
  before(() => {
    const email = "ansam.janajreh02@gmail.com";
    const password = "Aa*12345";
    cy.loginToMagento(email, password);
  });

  it("validate that the user can add the product to the wishlist", () => {
    cy.get("#search").type("shirt" + "{enter}");
    cy.contains(".product-item", "Radiant Tee").click();
    cy.wait(1000);
    cy.get(".towishlist").click();
    cy.get('[role="alert"]')
      .should("be.visible")
      .and(
        "contain",
        "Radiant Tee has been added to your Wish List. Click here to continue shopping."
      );
    cy.url().should(
      "eq",
      "https://magento.softwaretestingboard.com/wishlist/index/index/wishlist_id/165838/"
    );

    cy.screenshot({ capture: "fullPage" });
  });
});
