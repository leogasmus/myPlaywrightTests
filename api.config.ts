import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 30000,
  // retries: 2,
  globalTimeout: 600000,
  reporter: 'list',
  testDir: './tests/api',
  use: {
    headless: true,
    baseURL:'https://jsonplaceholder.typicode.com/',
    screenshot: 'off',
  }
});