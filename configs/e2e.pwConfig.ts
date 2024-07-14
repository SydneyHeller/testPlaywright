import { PlaywrightTestConfig, devices } from "@playwright/test";
import { loadEnvFile } from "process";

loadEnvFile("./url.env")

const stageConfig: PlaywrightTestConfig = {
    testDir: "../tests/test/e2e/",
    workers: 1,
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },

        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
    ]
}
export default stageConfig;