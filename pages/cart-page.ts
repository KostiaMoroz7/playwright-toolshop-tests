import { Page, Locator } from '@playwright/test';

export class CartPage{
    constructor(private readonly page: Page){
        
    }
    row(productName: string): Locator {
        return this.page.getByRole('row', { name: productName})
        }

    itemQuantity(productName: string): Locator {
        return this.row(productName).getByTestId('product-quantity')
    }    

    itemPrice(productName: string): Locator {
        return this.row(productName).getByTestId('product-price')
    }

    linePrice(productName: string): Locator {
        return this.row(productName).getByTestId('line-price')
    }

    async setQuantity(productName: string, quantity: number){
      await this.row(productName).getByTestId('product-quantity').fill(`${quantity}`)
    }
}