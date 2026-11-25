import { test, expect } from '@playwright/test';


test('Smoke test', async({page}) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Toolshop/)
    await expect(page.getByTestId('product-name').first()).toBeVisible()
})