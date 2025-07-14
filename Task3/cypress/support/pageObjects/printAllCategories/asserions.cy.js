class printCategoriesAssertion {
  printCategories() {
    //cy.get(".items").eq(1);
    cy.get(".items")
      .eq(1)
      .then(($categories) => {
        for (let i = 0; i < $categories.length; i++) {
          cy.wrap($categories[i])
            .invoke("text")
            .then((category) => {
              cy.log(category);
            });
        }
      });
    return this;
  }
}
export default printCategoriesAssertion;
