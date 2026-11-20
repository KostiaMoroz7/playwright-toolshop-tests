import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { HomePage } from '../pages/home-page';
import { ProductPage } from '../pages/product-page';
import { CartPage } from '../pages/cart-page';
import { HeaderComponent } from '../pages/header-component';

type PageFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  productPage: ProductPage;
  cartPage: CartPage;
  header: HeaderComponent
};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },

  cartPage: async ({page}, use) => {
    await use(new CartPage(page));
  },

  header: async ({page}, use) => {
    await use(new HeaderComponent(page));
  },

});

export { expect } from '@playwright/test';