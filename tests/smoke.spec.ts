import { test, expect } from '@playwright/test';

test('Rename By A developer', async({page}) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Toolshop/)
    await expect(page.getByTestId('product-name').first()).toBeVisible()
})