describe("Front test", () => {
  it("Test URL", () => {
    cy.request("/");
    cy.request("/publications");
    cy.request("/publications/articles");
    cy.request("/publications/evenements");
  });
});
