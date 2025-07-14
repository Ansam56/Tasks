class sharedActions {
  openHomePage() {
    cy.visit("/");
    return this;
  }
}
export default sharedActions;
