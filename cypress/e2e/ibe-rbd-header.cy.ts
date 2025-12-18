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
        cy.get(".subclass-info-price-value").contains("Sold Out", { matchCase: true }).should("exist").should("be.visible")
        cy.toggleSwitch();
        cy.get(".subclass-info-price-value").contains("1,919,920", { matchCase: true }).should("exist").should("be.visible")
    });

    it("should not login state", function () {
        if (!Cypress.env("RUN_NOT_LOGIN")) this.skip();
        cy.url().should("include", "/search/");
        cy.wait(5000);
        cy.get("#reedemMiles-container").should("not.exist");
        cy.toggleSwitch();
        cy.fillInput({
            data: testData.user.milesID,
            identifier: "input[placeholder='Email Address / Card Number']",
            index: 0,
        });
        cy.fillInput({ data: testData.user.password, identifier: "input[placeholder='Password']", index: 0 });
        cy.buttonHit({ identifier: ".sign-in-garuda-miles", index: 0 });
        cy.wait(3000);
        cy.toggleSwitch();
        cy.get("#reedemMiles-container").should("exist").should("be.visible");
        cy.get(".subclass-info-price-value")
            .should("exist")
            .should("be.visible")
            .contains("Sold Out", { matchCase: true });
    });
});
