import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login-page'

test('user can log in', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.goto()
    await loginPage.login('customer2@practicesoftwaretesting.com', 'welcome01')
    await expect(page).toHaveURL(/\/account$/)
    await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible()
})