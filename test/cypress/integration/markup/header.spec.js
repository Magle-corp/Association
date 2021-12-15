describe("Header markup", () => {
  it("Is there a header", () => {
    cy.visit("/").get("header").should("be.visible");
  });

  it("Is there a navigation in the header", () => {
    cy.visit("/").get("header").should("contain.html", "nav");
  });

  it("Is there a list in the navigation", () => {
    cy.visit("/").get("header > nav").should("contain.html", "ul");
  });

  it("Is there an item in the navigation list", () => {
    cy.visit("/").get("header > nav > ul").should("contain.html", "li");
  });

  it("Is there a link in the list item", () => {
    cy.visit("/").get("header > nav > ul").should("contain.html", "li");
  });
});
