/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("TESTING GA WEB", () => {
    beforeEach(() => {
        const baseUrl = Cypress.config("baseUrlGAWEB");
        cy.visit(baseUrl);
    });

    it("TICKET", () => {
        cy.removeBanner();
        cy.entryPoint(1, true);
        cy.autoCompleteComplex("#container-search", 0, 0, "CGK");
        cy.autoCompleteComplex("#container-search", 1, 0, "KNO");
        cy.checkFlightType(".Home-SearchingForm-Toggle-OneWay", "One Way");
        cy.pickupDate(".input-date-startDate", 25);
        // cy.pickupDate(".input-date-endDate", 27);
        cy.buttonEntryPoint(".btn-search-flight", true);
    });

    // it("Check in", () => {
    //     cy.removeBanner();
    //     cy.entryPoint(2);
    //     cy.entryPointInput(".content-component", 0, "FMHNNV");
    //     cy.entryPointInput(".content-component", 1, "One");
    //     cy.tncCheckBox(".PrivateSwitchBase-root", trueÍ);
    //     cy.buttonEntryPoint(".btn-confirmation");
    // });

    // it("My Trip", () => {
    //     cy.removeBanner();
    //    cy.entryPoint(3);
    //     cy.wait(1000);
    //     cy.entryPointInput(".my-trip-wrapper", 0, "DEMNQ4");
    //     cy.entryPointInput(".my-trip-wrapper", 1, "Test");
    //     cy.buttonEntryPoint(".btn-confirmation");
    // });

    // it("My Trip", () => {
    //     cy.removeBanner();
    //     cy.entryPoint(4);
    //     cy.entryPointInputAutoComplete(".content-component", 0, 1, "JAKARTA");
    //     cy.entryPointInputAutoComplete(".content-component", 1, 1, "SURABAYA");
    //     cy.pickupDate("#startDate", 20);
    //     cy.pickupDate("#endDate", 25);
    //     cy.buttonEntryPoint(".btn-check");
    // });
});