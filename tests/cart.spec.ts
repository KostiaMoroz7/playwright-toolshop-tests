import { test, expect } from '@playwright/test'

 test('Increasing item quantity on the cart page updates Total', async ({ page }) => {
    const expectedItems = [
        { name: 'Bolt Cutters', price: 48.41, quantity: 1},
        ] 
    const newQuantity = 3
    await page.goto('/')
    await page.getByRole('link', { name: expectedItems[0].name }).click()
    await page.getByRole('button', {name: 'Add to cart'}).click()
    await expect(page.getByTestId('cart-quantity')).toHaveText('1')
    await page.getByTestId('nav-cart').click()
    await expect(page).toHaveURL(/\/checkout$/)
    const rowsItem = page.getByRole('row', { name: expectedItems[0].name});
    await expect(rowsItem).toBeVisible();
    await expect(rowsItem.getByTestId('product-quantity')).toHaveValue(`${expectedItems[0].quantity}`)
    await expect(rowsItem.getByTestId('product-price')).toHaveText(`$${expectedItems[0].price}`)
    await expect(rowsItem.getByTestId('line-price')).toHaveText(`$${(expectedItems[0].price * expectedItems[0].quantity).toFixed(2)}`)
    await rowsItem.getByTestId('product-quantity').fill(`${newQuantity}`)
    await expect(rowsItem.getByTestId('product-price')).toHaveText(`$${expectedItems[0].price}`)
    await expect(rowsItem.getByTestId('line-price')).toHaveText(`$${(expectedItems[0].price * newQuantity).toFixed(2)}`)
    });