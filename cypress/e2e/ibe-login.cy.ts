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

    it("should login state", function () {
        cy.url().should("include", "/search/");
        cy.wait(2000);
        cy.toggleSwitch();
        cy.get("#reedemMiles-container").should("exist");
        cy.checkWording({ identifier: ".flight-date-options-currency", wording: "Available", isExist: true });
        cy.toggleSwitch();
        cy.checkWording({ identifier: ".flight-date-options-currency", wording: "IDR", isExist: true });
    });
});


