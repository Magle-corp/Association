describe("Main navigation", () => {
  it("Publications link has good text", () => {
    cy.visit("/")
      .get('[data-cy="link-publications"] > a > span')
      .contains("Publications");
  });

  it("Publications link has good redirection", () => {
    cy.visit("/")
      .get('[data-cy="link-publications"] > a')
      .should("have.attr", "href")
      .and("include", "/publications")
      .then((href) => {
        cy.request(href).then((resp) => {
          expect(resp.status).to.eq(200);
        });
      });
  });
});
