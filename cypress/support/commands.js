/// <reference types="Cypress" />
import "cypress-real-events";

// IBE
Cypress.Commands.add("selectFlightCard", (identifier, cardIndex) => {
    cy.get(identifier).eq(cardIndex).click();
});

Cypress.Commands.add("nextButton", (identifier, index, isLast) => {
    if (isLast) {
        cy.get(identifier).last().click();
    } else {
        cy.get(identifier).eq(index).click();
    }
});

Cypress.Commands.add("fillPassengerData", (identifier, index, data) => {
    cy.get(identifier).eq(index).type(data);
});

Cypress.Commands.add("acceptTerms", () => {
    cy.get('input[type="checkbox"]').first().check({ force: true });
});

Cypress.Commands.add("toggleSwitch", () => {
    cy.get(".MuiSwitch-root input").click({ force: true });
});

Cypress.Commands.add("selectBirthDate", (year, month = 0, index) => {
    cy.get(".MuiPickersCalendarHeader-labelContainer, .MuiPickersCalendarHeader-label").eq(index).click();
    const yearButtonIndex = 2024 - year + 105;
    console.log(yearButtonIndex);
    cy.get(`.MuiPickersYear-yearButton`).contains(year.toString()).click();
    cy.get(".MuiPickersMonth-monthButton").eq(month).click();
    cy.get(".MuiPickersDay-root").eq(20).click();
});

Cypress.Commands.add("confirmBooking", () => {
    cy.get('.btn-confirm, button[type="submit"]')
        .contains(/confirm|konfirmasi/i)
        .click();
});

// GAWEB
// TnC
Cypress.Commands.add("removeBanner", () => {
    cy.get(".button-back").click();
    cy.get(".button-container > .MuiButton-contained").click();
});

Cypress.Commands.add("entryPoint", (buttonIndex, isTicketing) => {
    if (isTicketing) {
        cy.get(".form-booking .list-button-flight").find(`:nth-child(${buttonIndex})`).first().click();
    } else {
        cy.get(".form-booking .list-button-flight").find(`:nth-child(${buttonIndex})`).click();
    }
});

Cypress.Commands.add("entryPointInput", (indentifier, fieldIndex, value) => {
    cy.get(`${indentifier} .MuiGrid-item`).eq(fieldIndex).find("input").type(value);
});

Cypress.Commands.add("entryPointInputAutoComplete", (indentifier, fieldIndex, numberInput, value) => {
    cy.get(`${indentifier} .MuiGrid-item`)
        .eq(fieldIndex)
        .find("input")
        .eq(numberInput)
        .type(value, { delay: 100 })
        .wait(1000)
        .type("{enter}");
});

Cypress.Commands.add("autoCompleteComplex", (indentifier, fieldIndex, numberInput, value) => {
    cy.get(`${indentifier} .MuiAutocomplete-root`)
        .eq(fieldIndex)
        .find("input")
        .eq(numberInput)
        .type(value, { delay: 100 })
        .wait(1000) // beri waktu suggestion muncul
        .realPress("Tab"); // <-- ini meniru tab nyata (trigger blur dan commit)
});

Cypress.Commands.add("pickupDate", (identifier, dateIndex) => {
    cy.get(identifier).should("be.visible").click();
    cy.get(".calendar-content")
        .find(".calender-date-bagus")
        .first()
        .find(`:nth-child(${dateIndex}) > .MuiButtonBase-root`)
        .click();
});

Cypress.Commands.add("buttonEntryPoint", (identifier, isTicketing) => {
    if (isTicketing) {
        cy.get(identifier).first().should("be.visible").click();
    } else {
        cy.get(identifier).should("be.visible").click();
    }
});

Cypress.Commands.add("tncCheckBox", (identifier, isvisible, index) => {
    if (isvisible) {
        cy.get(identifier).should("be.visible").click();
    } else {
        cy.get(identifier).eq(index).click();
    }
});

Cypress.Commands.add("checkFlightType", (identifier, flightType) => {
    if (flightType === "return") {
        cy.get(identifier).should("be.visible").click();
    } else {
        cy.get(identifier).should("be.visible").click();
    }
});

