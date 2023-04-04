///   <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then("I should see two types of modes present in it", () => {
  cy.get("img").should("be.visible");
});

Then("I should go to {string} while clicking it", () => {
  cy.get("img").eq(1).click();
});

Then("I should see {string} should be the first move", () => {
  cy.get(".cell").eq(1).click().should("be.visible");
});

Then("I should see O after the first move", () => {
  cy.get(".circle").click().should("be.visible");
});

Then("I should see x and O are visible in the UI", () => {
  cy.get(".cell").eq(7).click().should("be.visible");
  cy.get(".cell").eq(8).click().should("be.visible");
});
Then(
  "I should see x and O should be played till the first game is tied",
  () => {
    cy.get(".cell").eq(1).click();
    cy.get(".cell").eq(4).click();
    cy.get(".cell").eq(7).click();
    cy.get(".cell").eq(0).click();
    cy.get(".cell").eq(3).click();
    cy.get(".cell").eq(6).click();
    cy.get(".cell").eq(2).click();
    cy.get(".cell").eq(5).click();
    cy.get(".cell").eq(8).click();
  }
);

Then("I should see  x wins", () => {
  cy.get(".cell").eq(7).click();
  cy.get(".cell").eq(3).click();
  cy.get(".cell").eq(4).click();
  cy.get(".cell").eq(2).click();
  cy.get(".cell").eq(6).click();
  cy.get(".cell").eq(8).click();
  cy.get(".cell").eq(5).click();
  cy.get(".cell").eq(0).click();
  cy.get(".cell").eq(1).click();
});

Then("I should see O wins", () => {
  cy.get(".cell").eq(2).click();
  cy.get(".cell").eq(1).click();
  cy.get(".cell").eq(0).click();
  cy.get(".cell").eq(4).click();
  cy.get(".cell").eq(5).click();
  cy.get(".cell").eq(7).click();
});

Then("I should see the {string} game once the game is over", () => {
  cy.get("#restartButton").click();
});

Then("I am able to click on any cell", () => {
  cy.get("div").should("be.visible");
  cy.get(".x").click();
});

Then("I should not able to click the already marked cell", () => {
  cy.get(".cell").eq(0).click();
  cy.get(".cell").eq(0).should("not.be.enabled");
});
