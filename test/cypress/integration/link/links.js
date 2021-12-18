describe("Links", () => {
  it("Homepage links", () => {
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

  it("Homepage links text", () => {
    cy.visit("/").get('[data-cy="link"] > a > span');
  });

  it("/publications links", () => {
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

  it("/publication links text", () => {
    cy.visit("/publications").get('[data-cy="link"] > a > span');
  });

  it("/publications/articles links", () => {
    cy.visit("/publications/articles")
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

  it("/publication/articles links text", () => {
    cy.visit("/publications/articles").get('[data-cy="link"] > a > span');
  });

  it("/publications/evenements links", () => {
    cy.visit("/publications/evenements")
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

  it("/publications/evenements links text", () => {
    cy.visit("/publications/evenements").get('[data-cy="link"] > a > span');
  });
});
