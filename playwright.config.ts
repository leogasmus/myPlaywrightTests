import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30000,
  retries: 2,
  globalTimeout: 600000,
  reporter: 'list',
  testDir: './tests',
  use: {
    headless: true,
    baseURL:'https://skleptest.pl/',
    screenshot: 'only-on-failure',
  },
});