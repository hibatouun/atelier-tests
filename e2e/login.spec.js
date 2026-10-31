
const { test, expect } = require('@playwright/test');

test('connexion réussie', async ({ page }) => {
    await page.goto('/login.html');

    await page.locator('#email').fill('a@test.fr');
    await page.locator('#password').fill('secret');

    await page.locator('button[type="submit"]').click();

    await expect(page).toHaveURL(/dashboard\.html/);
    await expect(page.locator('h1')).toHaveText('Dashboard');
});

test('connexion échouée', async ({ page }) => {
    await page.goto('/login.html');

    await page.locator('#email').fill('wrong@test.fr');
    await page.locator('#password').fill('wrong');

    await page.locator('button[type="submit"]').click();

    await expect(page.locator('body')).toContainText('Identifiants invalides');
});
