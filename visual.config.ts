import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 30000,
  retries: 2,
  globalTimeout: 600000,
  reporter: 'list',
  testDir: './tests/visual',
  use: {
    headless: true,
    baseURL:'https://skleptest.pl/',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome']},
    },
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome']},
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox']},
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari']},
    },
  ],
});