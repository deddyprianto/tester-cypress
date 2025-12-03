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

    describe("One Way Flight", () => {
        const fillPassengerForm = () => {
            cy.selectFlightCard(".FlightOffer-FlightFare-Container-SelectLowerClass", 0);
            cy.nextButton(".swiper-slide-active", 0);
            cy.nextButton(".last-row", 0);
            cy.wait(1000);
            // is upsell - conditional check
            cy.document().then((doc) => {
                const el = doc.querySelector(".content-button");
                if (el) {
                    cy.nextButton(".content-button", 1);
                }
            });

            cy.fillPassengerData("input#outlined-start-adornment", 0, testData.passenger.firstName);
            cy.fillPassengerData("input#outlined-start-adornment", 1, testData.passenger.lastName);
            cy.fillPassengerData("input#outlined-start-adornment", 2, testData.passenger.phone);
            cy.fillPassengerData("input#outlined-start-adornment", 3, testData.passenger.email);

            cy.tncCheckBox(".PrivateSwitchBase-input", false, 0);
            cy.document().then((doc) => {
                const els = doc.querySelectorAll(".PrivateSwitchBase-input");
                if (els.length > 1) {
                    cy.tncCheckBox(".PrivateSwitchBase-input", false, 1);
                }
            });
            cy.nextButton(".passenger-form .textfield", 3);
            cy.selectBirthDate(testData.birthDate.year, testData.birthDate.month, 0);
        };

        // it("without SSR", () => {
        //     fillPassengerForm();
        //     cy.nextButton(".btn-cancel", 0);
        //     cy.tncCheckBox(".tnc-consent .PrivateSwitchBase-input", false, 0);
        //     cy.nextButton(".payment-and-cta", 0);
        // });

        it("with SSR", () => {
            // cy.wait(5000)
            fillPassengerForm();
            cy.nextButton(".btn-confirm", 0);
            cy.wait(15000);
            // SEAT
            cy.nextButton(".main-menu-detail > .main-menu", 0);
            cy.nextButton(".MuiDialogActions-root > .MuiButtonBase-root", 0);
            cy.nextButton("img[alt='Available Seat']", 0, true);
            cy.nextButton("#confirmationButton", 0);
            cy.wait(15000);

            // MEAL
            cy.nextButton(".main-menu-detail > .main-menu", 1);
            cy.nextButton(".drawer-custom-textfield", 0);
            cy.nextButton("div.MuiMenu-paper ul.MuiMenu-list", 0);
            cy.nextButton("#confirmationButton", 0);

            // BAGGAGE
            cy.nextButton(".main-menu-detail > .main-menu", 2);
            cy.nextButton(".drawer-custom-textfield", 0);
            cy.nextButton("div.MuiMenu-paper ul.MuiMenu-list", 0);
            cy.nextButton("#confirmationButton", 0);

            // GPS
            cy.nextButton(".main-menu-detail > .main-menu", 3);
            cy.nextButton("#openGPS", 0);
            cy.nextButton(".inner-box > .MuiButtonBase-root", 0);
            cy.nextButton(".button-box > .MuiButtonBase-root", 0);
            cy.nextButton(".dialog-actions > .MuiButtonBase-root", 0);

            // LOUNGE
            cy.nextButton(".main-menu-detail > .main-menu", 4);
            cy.nextButton(".inner-box > .MuiButtonBase-root", 0);
            cy.nextButton(".button-box > .MuiButtonBase-root", 0);
            cy.nextButton(".dialog-actions > .MuiButtonBase-root", 0);

            // INSURANCE
            cy.nextButton(".main-menu-detail > .main-menu", 5);
            cy.nextButton("#handleButtonInsurance", 0);
            cy.tncCheckBox(".PrivateSwitchBase-input", false, 0);
            cy.nextButton("#confirmationButton", 0);
            cy.nextButton(".SSR-Confirmation-Button-GoToNextStep", 0);

            // BACK SESSION
            cy.wait(15000);
            cy.nextButton("svg[data-testid='ExpandMoreIcon']", 0);
            cy.wait(3000);
            cy.nextButton("svg[data-testid='ExpandMoreIcon']", 0);

            // confirmation page
            // cy.tncCheckBox(".PrivateSwitchBase-input", false, 0);
            // cy.nextButton(".ReviewBooking-Confirmation-Button-GoToPayment", 0);
        });
    });
});