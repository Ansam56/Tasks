class sharedAssertions {
  checkCurrentURLIsContain(url) {
    cy.url().should("eq", url);
    return this;
  }
  checkPageTitleIsContain(title) {
    cy.get(".page-title").should("contain", title);
    return this;
  }

  checkMsgBarIsVisisble() {
    cy.get("[role=alert]").should("be.visible");
    return this;
  }
  checkMsgBarIsContain(message) {
    cy.get("[role=alert]").should("contain", message);
    return this;
  }
}
export default sharedAssertions;
