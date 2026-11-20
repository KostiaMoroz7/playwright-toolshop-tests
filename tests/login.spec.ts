import { test, expect } from '../fixtures/page-fixtures'
import { requireEnv } from '../utils/env'

test('user can log in', async ({loginPage, page }) => {
    await loginPage.goto()
    await loginPage.login(requireEnv('TEST_USER_EMAIL'), requireEnv('TEST_USER_PASSWORD'))
    await expect(page).toHaveURL(/\/account$/)
    await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible()
})