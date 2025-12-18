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
        if (!Cypress.env("RUN_LOGIN")) this.skip();
        cy.url().should("include", "/search/");
        cy.wait(2000);
        cy.toggleSwitch();
        cy.get("#reedemMiles-container").should("exist");
        cy.checkWording({ identifier: ".subclass-info-price-value", wording: "Sold Out", isExist: true });
        cy.toggleSwitch();
        cy.checkWording({ identifier: ".subclass-info-price-value", wording: "1,919,920", isExist: true });
    });
});

