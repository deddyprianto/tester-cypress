/// <reference types="cypress" />

describe("TESTING", () => {
    let testData: any;

    before(() => {
        cy.fixture("payload").then((data) => {
            testData = data;
        });
    });

    beforeEach(() => {
        const baseUrl = (Cypress.config() as any).baseUrlIBE as string;
        cy.visit(`${baseUrl}/search/${testData.searchToken}`);
    });

    it("should can login and logout", () => {
        cy.url().should("include", "/search/");
        cy.wait(5000);
        cy.toggleSwitch();
        cy.get("#reedemMiles-container").should("not.exist");
        cy.wait(3000);
        cy.toggleSwitch();
        cy.get("#reedemMiles-container").should("exist");
        cy.buttonHit({ identifier: "#basic-button", index: 0 });
        cy.buttonHit({ identifier: ".pm-footer", index: 0 });
        cy.get("#reedemMiles-container").should("not.exist");
        cy.toggleSwitch();
        cy.get("button").contains("Sign In GarudaMiles", {matchCase: true}).should("exist").should('be.visible');
    });
});



