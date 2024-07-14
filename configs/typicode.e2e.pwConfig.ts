import { PlaywrightTestConfig, devices } from "@playwright/test";
import { loadEnvFile } from "process";

loadEnvFile("./typicode.env")

const stageConfig: PlaywrightTestConfig = {
    testDir: "../tests/test/e2e/typicode",
    workers: 1,
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ]
}
export default stageConfig;