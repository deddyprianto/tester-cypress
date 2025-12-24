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
        cy.wait(5000);
        cy.toggleSwitch({});
        cy.buttonHit({ identifier: ".MuiButtonBase-root:has(.light-blue)", index: 0 });
        cy.toggleSwitch({ identifier: "#return" });
        cy.buttonHit({ identifier: "input[placeholder='Return']", index: 0, isLast: true });
        cy.get(".calender-bagus").find(".MuiGrid-container").find(".MuiButtonBase-root").eq(30).click({ force: true });
        cy.buttonHit({ identifier: '.MuiButtonBase-root:has(p:contains("Finish"))', index: 0 });
        cy.buttonHit({ identifier: ".MuiButtonBase-root:has(.light-white)", index: 0 });
        //
        cy.buttonHit({ identifier: ".MuiButtonBase-root:has(.light-blue)", index: 0 });
        cy.toggleSwitch({ identifier: "#oneWay" });
        cy.buttonHit({ identifier: ".MuiButtonBase-root:has(.light-white)", index: 0 });
        cy.wait(2000);
        cy.toggleSwitch({});
    });
});

