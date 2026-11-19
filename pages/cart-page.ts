import { Page, Locator } from '@playwright/test';

export class CartPage{
    constructor(private readonly page: Page){
        
    }
    itemName(productName: string): Locator {
        return this.page.getByRole('row', { name: productName})
        }

    itemQuantity(productName: string): Locator {
        return this.itemName(productName).getByTestId('product-quantity')
    }    

    itemPrice(productName: string): Locator {
        return this.itemName(productName).getByTestId('product-price')
    }

    totalPrice(productName: string): Locator {
        return this.itemName(productName).getByTestId('line-price')
    }

    async setQuantity(productName: string, quantity: number){
      await this.itemName(productName).getByTestId('product-quantity').fill(`${quantity}`)
    }
}