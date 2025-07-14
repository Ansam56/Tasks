class printCategoriesAction {
  clicksOnWhatsNew() {
    cy.get(".level-top").eq(0).click();
    return this;
  }
}
export default printCategoriesAction;
