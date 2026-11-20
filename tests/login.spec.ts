
import { test, expect } from '../fixtures/page-fixtures'

test('user can log in', async ({loginPage, page }) => {
    await loginPage.goto()
    await loginPage.login('customer2@practicesoftwaretesting.com', 'welcome01')
    await expect(page).toHaveURL(/\/account$/)
    await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible()
})