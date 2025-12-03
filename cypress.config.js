import { defineConfig } from "cypress";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, ".env.dev") });

export default defineConfig({
    viewportWidth: 1350,
    viewportHeight: 750,

    e2e: {
        experimentalSessionAndOrigin: true,
        defaultCommandTimeout: 10000,
        chromeWebSecurity: false,
        baseUrlIBE: "http://localhost:6970",
        baseUrlGAWEB: "http://localhost:3005/oc/en",
    },

    env: {
        uncaughtExceptionHandler: true,
    },

    component: {
        devServer: {
            framework: "react",
            bundler: "vite", // Ganti dari "webpack" ke "vite"
        },
    },
});
