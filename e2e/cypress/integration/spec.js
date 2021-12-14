describe("My First Test", () => {
  it("Does not do much!", () => {
    cy.request("/");
    cy.request("/publications");
    cy.request("/publications/articles");
    cy.request("/publications/evenements");
  });
});
