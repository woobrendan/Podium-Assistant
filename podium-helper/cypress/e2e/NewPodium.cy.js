/// <reference types="cypress" />
import { getToday } from "../../src/functions/helperFunc";

describe("Creating New Podiums", () => {
  const formatDate = () => {
    const day = [];
    const splitDay = getToday().split("-");
    day.push(splitDay[2], splitDay[0], splitDay[1]);
    return day.join("-");
  };

  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should select event", () => {
    cy.get("#mui-component-select-event")
      .parent()
      .click()
      .get('ul > li[data-value="Sonoma Raceway"]')
      .click();
  });

  it("Should select Series", () => {
    cy.get('[data-testid="series_dropdown"]').click();
    cy.get('[data-testid="GT World Challenge America"]').click();
  });

  it("Should select Class", () => {
    cy.get("#mui-component-select-series")
      .parent()
      .click()
      .get('ul > li[data-value="GT World Challenge America"]')
      .click();

    cy.get(".class-container")
      .first()
      .click()
      .get('ul > li[data-value="Pro"]')
      .click();
  });
});
