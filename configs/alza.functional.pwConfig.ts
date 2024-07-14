import { PlaywrightTestConfig, devices } from "@playwright/test";
import { loadEnvFile } from "process";

loadEnvFile("./alza.env")

const stageConfig: PlaywrightTestConfig = {
    testDir: "../tests/test/functional/alza",
    workers: 2,
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