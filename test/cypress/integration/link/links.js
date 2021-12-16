describe("Links", () => {
  it("Main navigation links redirection", () => {
    cy.visit("/")
      .get('[data-cy="link"] > a')
      .each((link) => {
        cy.get(link)
          .should("have.attr", "href")
          .then((href) => {
            cy.request(href).then((resp) => {
              expect(resp.status).to.eq(200);
            });
          });
      });
  });

  it("Main navigations links text", () => {
    cy.visit("/").get('[data-cy="link"] > a > span');
  });

  it("Page publications links", () => {
    cy.visit("/publications")
      .get('[data-cy="link"] > a')
      .each((link) => {
        cy.get(link)
          .should("have.attr", "href")
          .then((href) => {
            cy.request(href).then((resp) => {
              expect(resp.status).to.eq(200);
            });
          });
      });
  });

  it("Page publication links text", () => {
    cy.visit("/").get('[data-cy="link"] > a > span');
  });
});
