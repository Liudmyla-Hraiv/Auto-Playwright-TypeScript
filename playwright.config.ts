import { PlaywrightTestConfig, defineConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testMatch: ["tests/FinishOrder.test.ts", "tests/Login.test.ts"],
     use: {
        headless: false,
        screenshot: "on",
        video: "retain-on-failure"
     },
     retries:0,
     reporter: [["dot"], 
                ["json", {outputFile:"Reports/reports.json"}],
                ["html", {open:"on-failure"}] ]
};
export default config;