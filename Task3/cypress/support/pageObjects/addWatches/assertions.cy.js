class addWatchesAssertions {
  checksCounter(cnt) {
    cy.get(".counter-number").should("contain", cnt);
    return this;
  }
}

export default addWatchesAssertions;
