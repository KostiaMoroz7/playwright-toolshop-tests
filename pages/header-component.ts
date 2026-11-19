import { Page, Locator } from '@playwright/test';

export class HeaderComponent{
    readonly cartQuantity: Locator
    readonly cartIcon: Locator

    constructor (private readonly page: Page){
        this.cartQuantity = page.getByTestId('cart-quantity')
        this.cartIcon = page.getByTestId('nav-cart')
    }

    async gotoCart(){
        await this.cartIcon.click()
    }
}