///   <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then("I should see two types of modes present in it", () => {
  cy.get('div[class= "tooltip"]').should("be.visible");

  cy.get("div").contains("Offline-Multiplayer").should("be.visible");
});

//Then("I should see Play With Computer visible", () => {
//cy.get("div.tooltip").find('img[src="./u_m.PNG"]').should("be.visible");
//});

Then("I should go to Offline-Multiplayer while clicking it", () => {
  cy.get("div").eq(1).click();
});

Then("I should see x should be the first move", () => {
  cy.get("div").eq(1).click();
  cy.get(".cell").eq(1).click();
  cy.get(".x").should("be.visible");
});

Then("I should see O after the first move", () => {
  cy.get(".cell").eq(2).click();
  cy.get(".circle").should("be.visible");
});

Then("I should see x and O are visible in the UI", () => {
  cy.get(".cell").eq(7).click();
  cy.get(".x").should("be.visible");
  cy.get(".cell").eq(8).click();
  cy.get(".circle").should("be.visible");
});
Then(
  "I should see x and O should be played till the first game is tied",
  () => {
    cy.get("div").eq(1).click();
    cy.get(".cell").eq(1).click();
    cy.get(".cell").eq(4).click();
    cy.get(".cell").eq(7).click();
    cy.get(".cell").eq(0).click();
    cy.get(".cell").eq(3).click();
    cy.get(".cell").eq(6).click();
    cy.get(".cell").eq(2).click();
    cy.get(".cell").eq(5).click();
    cy.get(".cell").eq(8).click();
    cy.get("div").eq(11).should("be.visible");
    cy.get("#restartButton").click();
  }
);

Then("I should see the game until x wins", () => {
  cy.get(".cell").eq(7).click();
  cy.get(".cell").eq(3).click();
  cy.get(".cell").eq(4).click();
  cy.get(".cell").eq(2).click();
  cy.get(".cell").eq(6).click();
  cy.get(".cell").eq(8).click();
  cy.get(".cell").eq(5).click();
  cy.get(".cell").eq(0).click();
  cy.get(".cell").eq(1).click();
  cy.get("div").eq(11).should("be.visible");
  cy.get("#restartButton").click();
});

Then("I should see the game played until O wins", () => {
  cy.get(".cell").eq(2).click();
  cy.get(".cell").eq(1).click();
  cy.get(".cell").eq(0).click();
  cy.get(".cell").eq(4).click();
  cy.get(".cell").eq(5).click();
  cy.get(".cell").eq(7).click();
  cy.get("div").eq(11).should("be.visible");
});

Then("I should see the Restart button once the game is over", () => {
  cy.get("#restartButton").should("be.visible");
});

Then("I am able to click on any cell", () => {
  cy.get("div").eq(1).click();
  cy.get("div").should("be.visible");
  cy.get(".x").click();
});

Then("I should not able to click the already marked cell", () => {
  cy.get(".cell").eq(0).click();
  cy.get(".cell").eq(0).should("not.be.enabled");
});

Then("I should visit play mode while clicking it", () => {
  cy.get("div.tooltip")
    .find('img[src="./u_m.PNG"]')
    .should("be.visible")
    .click();
});

When("I click Play With Computer", () => {
  cy.visit("/");
  cy.get("div.tooltip")
    .find('img[src="./u_m.PNG"]')
    .should("be.visible")
    .click();
});

Then("I should play game until it is tied", () => {
  cy.get(".cell").eq(4).click();
  cy.get(".cell").eq(0).click();
  cy.get(".cell").eq(2).click();
  cy.get(".cell").eq(6).click();
  cy.get(".cell").eq(3).click();
  cy.get(".cell").eq(5).click();
  cy.get(".cell").eq(7).click();
  cy.get(".cell").eq(1).click();
  cy.get(".cell").eq(8).click();
  cy.get("div").eq(1).should("be.visible");
});

Then("I should see Replay button is visible", () => {
  cy.get("button").should("be.visible");
});

Then("I should see message You lose  after  Playing With Computer", () => {
  cy.get(".cell").eq(0).click();
  cy.get(".cell").eq(4).click();
  cy.get(".cell").eq(3).click();
  cy.get(".cell").eq(6).click();
  cy.get(".cell").eq(1).click();
  cy.get("div").eq(1).should("be.visible");
});
