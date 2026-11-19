import { Page, Locator } from '@playwright/test';

export class ProductPage{
    readonly addToCartButton: Locator

    constructor (private readonly page: Page){
        this.addToCartButton = page.getByRole('button', {name: 'Add to cart'})
    }

    async addToCart(){
       await this.addToCartButton.click()
    }
}