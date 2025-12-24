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
        cy.buttonHit({ identifier: ".MuiButtonBase-root:contains('Change')", index: 0 });
        cy.fillInput({
            data: "MEDAN",
            identifier: "input[placeholder='From']",
            index: 0,
            isForce: true,
        });
        // cy.wait(3000);
        // cy.fillInput({
        //     data: "UPG",
        //     identifier: "input[placeholder='To']",
        //     index: 0,
        //     isForce: true,
        // });
        // // get option mui autocomplete
        // cy.get(".MuiAutocomplete-popper li").eq(0).click();
    });
});

