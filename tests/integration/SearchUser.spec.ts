import { expect, test } from '@playwright/test';

test('Critical path search user and get repos', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Github Repo Explorer');
  await expect(page.getByRole('textbox', { name: 'Enter username' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Enter username' }).click();
  await page.getByRole('textbox', { name: 'Enter username' }).fill('Jerry');
  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page.getByText('Showing users for "Jerry"')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Jerry Liu' })).toBeVisible();

  await page.getByRole('button', { name: 'Jerry Liu' }).click();

  await expect(page.locator('.relative').first()).toBeVisible();
  await expect(page.locator('.bg-card').first()).toBeVisible();
  await expect(page.getByLabel('Jerry Liu')).toContainText('llama_index');
  await expect(page.getByLabel('Jerry Liu')).toContainText('LlamaIndex is the leading framework for building LLM-powered agents over your data.');

  await page.getByRole('button', { name: 'Jerry Liu' }).click();

  await expect(page.getByRole('main')).toMatchAriaSnapshot(`
    - button "Jerry Liu":
      - img
    `);
});
