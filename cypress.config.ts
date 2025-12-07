/// <reference types="cypress" />
const { defineConfig } = require("cypress");
const dotenv = require("dotenv");
const path = require("path");
const webpack = require("@cypress/webpack-preprocessor");

dotenv.config({ path: path.resolve(__dirname, ".env.dev") });

module.exports = defineConfig({
    viewportWidth: 1350,
    viewportHeight: 750,

    e2e: {
        experimentalSessionAndOrigin: true,
        defaultCommandTimeout: 10000,
        chromeWebSecurity: false,
        baseUrlIBE: "http://localhost:6970",
        baseUrlGAWEB: "http://localhost:3005/oc/en",
        setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
            const options = {
                webpackOptions: {
                    resolve: {
                        extensions: [".ts", ".js"],
                    },
                    module: {
                        rules: [
                            {
                                test: /\.ts$/,
                                exclude: /node_modules/,
                                use: [
                                    {
                                        loader: "ts-loader",
                                        options: {
                                            configFile: "cypress/tsconfig.json",
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                },
            };
            on("file:preprocessor", webpack(options));
        },
    },

    env: {
        uncaughtExceptionHandler: true,
        RUN_LOGIN: true,
        RUN_NOT_LOGIN: false,
    },

    component: {
        devServer: {
            framework: "react",
            bundler: "vite", // Ganti dari "webpack" ke "vite"
        },
    },
});


