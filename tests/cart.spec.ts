import { test, expect } from '@playwright/test'
import { CartPage } from '../pages/cart-page';
import { HeaderComponent } from '../pages/header-component';
import { HomePage } from '../pages/home-page';
import { ProductPage } from '../pages/product-page';

 test('Increasing item quantity on the cart page updates Total', async ({ page }) => {
    const newQuantity = 3
    const productName = 'Bolt Cutters'

    const cartPage = new CartPage(page)
    const headerComponent = new HeaderComponent(page)
    const homepage = new HomePage(page)
    const productPage = new ProductPage(page)
    

    await homepage.goToHomePage()
    await homepage.openProduct(productName)
    await productPage.addToCart()
    await expect(headerComponent.cartQuantity).toHaveText('1')
    await headerComponent.gotoCart()
    await expect(page).toHaveURL(/\/checkout$/)
    await expect(cartPage.itemName(productName)).toBeVisible();
    await expect(cartPage.itemQuantity(productName)).toHaveValue('1')
    await expect(cartPage.itemPrice(productName)).toHaveText('$48.41')
    await expect(cartPage.totalPrice(productName)).toHaveText('$48.41')
    await cartPage.setQuantity(productName, newQuantity)
    await expect(cartPage.itemPrice(productName)).toHaveText('$48.41')
    await expect(cartPage.totalPrice(productName)).toHaveText(`$${48.41 * newQuantity}`)
    });