/// <reference types="Cypress" />
/// <reference path="../support/index.d.ts" />

describe("TESTING", () => {
    let testData : any;

    before(() => {
        cy.fixture("payload").then((data) => {
            testData = data;
        });
    });

    beforeEach(() => {
        const baseUrl = Cypress.env("baseUrlIBE") as string;
        cy.visit(`${baseUrl}/search/${testData.searchToken}`);
    });

    it("should load search page", () => {
        cy.url().should("include", "/search/");
        cy.wait(5000);
        cy.toggleSwitch();
        cy.get("#reedemMiles-container").should("not.exist");
        cy.toggleSwitch();
        cy.get("#reedemMiles-container").should("exist");
        cy.buttonHit({ identifier: "#basic-button", index: 0 });
        cy.buttonHit({identifier: '#basic-button', index: 1});
    });
});


