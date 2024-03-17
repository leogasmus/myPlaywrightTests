import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 30000,
  retries: 2,
  globalTimeout: 600000,
  reporter: 'list',
  testDir: './tests/pdf',
  use: {
    headless: true,
    ignoreHTTPSErrors: true,
    screenshot: 'off',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome']},
    }
  ]
});