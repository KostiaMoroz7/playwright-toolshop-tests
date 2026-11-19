import { test, expect } from '@playwright/test'

test('user can log in', async ({ page }) => {
    await page.goto('/auth/login')
    await page.getByLabel('Email address').fill('customer2@practicesoftwaretesting.com')
    await page.getByPlaceholder('Your password').fill('welcome01')
    await page.getByRole('button', { name: 'Login' }).click()
    await expect(page).toHaveURL(/\/account$/)
    await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible()
})