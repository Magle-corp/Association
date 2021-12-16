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

  it("Publications articles link has good text", () => {
    cy.visit("/")
      .get('[data-cy="link-publications-articles"] > a > span')
      .contains("Articles");
  });

  it("Publications articles link has good redirection", () => {
    cy.visit("/")
      .get('[data-cy="link-publications-articles"] > a')
      .should("have.attr", "href")
      .and("include", "/publications/articles")
      .then((href) => {
        cy.request(href).then((resp) => {
          expect(resp.status).to.eq(200);
        });
      });
  });

  it("Publications evenement link has good text", () => {
    cy.visit("/")
      .get('[data-cy="link-publications-evenements"] > a > span')
      .contains("Evenements");
  });

  it("Publications evenement link has good redirection", () => {
    cy.visit("/")
      .get('[data-cy="link-publications-evenements"] > a')
      .should("have.attr", "href")
      .and("include", "/publications/evenements")
      .then((href) => {
        cy.request(href).then((resp) => {
          expect(resp.status).to.eq(200);
        });
      });
  });
});
