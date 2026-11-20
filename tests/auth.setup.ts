import { test as setup, expect } from '../fixtures/page-fixtures';
import { requireEnv } from '../utils/env';
import { CUSTOMER_AUTH_FILE } from '../utils/auth';

setup('authenticate as customer', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.login(requireEnv('TEST_USER_EMAIL'), requireEnv('TEST_USER_PASSWORD'));
  await expect(page).toHaveURL(/\/account$/)
  await page.context().storageState({ path: CUSTOMER_AUTH_FILE});
});