import { test, expect } from '../fixtures/page-fixtures'

 test('Increasing item quantity on the cart page updates Total', async ({homePage, productPage, header, cartPage, page }) => {
    const newQuantity = 3
    const productName = 'Bolt Cutters'
    const unitPrice = 48.41

    await homePage.goto()
    await homePage.openProduct(productName)
    await productPage.addToCart()
    await expect(header.cartQuantity).toHaveText('1')
    await header.gotoCart()
    await expect(page).toHaveURL(/\/checkout$/)
    await expect(cartPage.row(productName)).toBeVisible();
    await expect(cartPage.itemQuantity(productName)).toHaveValue('1')
    await expect(cartPage.itemPrice(productName)).toHaveText(`$${unitPrice.toFixed(2)}`)
    await expect(cartPage.linePrice(productName)).toHaveText(`$${unitPrice.toFixed(2)}`)
    await cartPage.setQuantity(productName, newQuantity)
    await expect(cartPage.itemPrice(productName)).toHaveText(`$${unitPrice.toFixed(2)}`)
    await expect(cartPage.linePrice(productName)).toHaveText(`$${(unitPrice * newQuantity).toFixed(2)}`)
    });