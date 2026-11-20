import { test, expect } from '../fixtures/page-fixtures';
import { CUSTOMER_AUTH_FILE } from '../utils/auth';

test.use({ storageState: CUSTOMER_AUTH_FILE});

test('customer cannot access admin dashboard', async ({ page }) => {
  await page.goto('/account')
  await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible()
  await page.goto('/admin/dashboard');
  await expect(page).not.toHaveURL(/\/admin/);
  await expect(page.getByRole('heading', { name: 'Sales over the years' })).toBeHidden()
  
});