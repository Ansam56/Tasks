class addWatchesActions {
  clicksGearMenu() {
    cy.get(".level-top").eq(6).click();
    return this;
  }

  ClicksWatchesOption() {
    cy.get(".last a").eq(8).click({ force: true });
    cy.wait(1700);
    return this;
  }

  clicksListMode() {
    cy.get("#mode-list").click();
    cy.wait(1700);
    return this;
  }
}

export default addWatchesActions;
