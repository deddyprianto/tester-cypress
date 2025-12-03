/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("TESTING", () => {
    let testData;

    before(() => {
        cy.fixture("payload").then((data) => {
            testData = data;
        });
    });

    beforeEach(() => {
        const baseUrl = Cypress.config("baseUrlIBE");
        cy.visit(`${baseUrl}/search/${testData.searchToken}`);
    });
});


