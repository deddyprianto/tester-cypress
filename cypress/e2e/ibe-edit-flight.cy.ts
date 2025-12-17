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

    it("check performance after edit flight and check the button Join GarudaMiles", function () {
        cy.get(".departure-location").contains("Jakarta", { matchCase: true }).should("be.visible");
        cy.buttonHit({ identifier: ".MuiButtonBase-root:has(.light-blue)", index: 0 });
        cy.buttonHit({ identifier: ".switch-origin", index: 0 });
        cy.buttonHit({ identifier: ".MuiButtonBase-root:has(.light-white)", index: 0 });
        cy.get(".departure-location").contains("Denpasar-Bali", { matchCase: true }).should("be.visible");
        cy.buttonHit({ identifier: ".MuiButtonBase-root:has(.light-blue)", index: 0 });
        cy.get('input[placeholder="Departure"]').should("be.visible").click();
        cy.get(".calender-bagus").find(".MuiGrid-container").find(".MuiButtonBase-root").eq(20).click();
        cy.buttonHit({ identifier: '.MuiButtonBase-root:has(p:contains("Finish"))', index: 0 });
        cy.buttonHit({ identifier: ".MuiButtonBase-root:has(.light-white)", index: 0 });
        cy.toggleSwitch();
        cy.buttonHit({ identifier: ".join-garuda-miles", index: 0 });
    })

});