import { Page, Locator } from '@playwright/test';

export class HomePage{
    constructor(private readonly page: Page){
        
    }

    async goto(){
        await this.page.goto('/')
    }

    async openProduct(productName: string) {
        await this.page.getByRole('link', { name: productName}).click()
        }
}