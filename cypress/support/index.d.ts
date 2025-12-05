declare global {
    namespace Cypress {
        interface Chainable {
            selectFlightCard({ identifier, cardIndex }: { identifier: string; cardIndex: number }): Chainable<void>;
            buttonHit({
                identifier,
                index,
                isLast,
                isForceTrue,
            }: {
                identifier: string;
                index: number;
                isLast?: boolean;
                isForceTrue?: boolean;
            }): Chainable<void>;
            fillInput({
                identifier,
                index,
                data,
            }: {
                identifier: string;
                index: number;
                data: string;
            }): Chainable<void>;
            acceptTerms(): Chainable<void>;
            toggleSwitch(): Chainable<void>;
            selectBirthDate({ year, month, index }: { year: number; month?: number; index?: number }): Chainable<void>;
            confirmBooking(): Chainable<void>;
            removeBanner(): Chainable<void>;
            entryPoint({ buttonIndex, isTicketing }: { buttonIndex: number; isTicketing?: boolean }): Chainable<void>;
            entryPointInput({
                fieldIndex,
                identifier,
                value,
            }: {
                identifier: string;
                fieldIndex: number;
                value: string;
            }): Chainable<void>;
            entryPointInputAutoComplete({
                fieldIndex,
                identifier,
                numberInput,
                value,
            }: {
                identifier: string;
                fieldIndex: number;
                numberInput: number;
                value: string;
            }): Chainable<void>;
            autoCompleteComplex({
                fieldIndex,
                identifier,
                numberInput,
                value,
            }: {
                identifier: string;
                fieldIndex: number;
                numberInput: number;
                value: string;
            }): Chainable<void>;
            pickupDate({ dateIndex, identifier }: { identifier: string; dateIndex: number }): Chainable<void>;
            buttonEntryPoint({
                identifier,
                isTicketing,
            }: {
                identifier: string;
                isTicketing?: boolean;
            }): Chainable<void>;
            tncCheckBox({
                identifier,
                isvisible,
                index,
            }: {
                identifier: string;
                isvisible?: boolean;
                index: number;
            }): Chainable<void>;
            checkFlightType({ flightType, identifier }: { identifier: string; flightType: string }): Chainable<void>;
        }
    }
}

export {};









