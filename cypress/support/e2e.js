import "./commands";
Cypress.on("uncaught:exception", (err, runnable) => {
    console.log(runnable);
    if (err.message.includes("Failed to register a ServiceWorker")) {
        return false;
    }
    if (err.message.includes("device is not defined")) {
        return false;
    }

    if (err.message.includes("DigitalAnalytics")) {
        return false;
    }
    return true;
});
