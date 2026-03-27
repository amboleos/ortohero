import { test, expect } from '@playwright/test';

test.describe('homepage screenshots (regression)', () => {
  test('full page matches baseline', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    await expect(page.getByLabel('Orthero milestones')).toContainText('60,000', {
      timeout: 15_000,
    });

    await expect(page).toHaveScreenshot('home-full.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('viewport (hero + stats) matches baseline', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await expect(page.getByLabel('Orthero milestones')).toContainText('60,000', {
      timeout: 15_000,
    });
    await expect(page).toHaveScreenshot('home-viewport.png', {
      fullPage: false,
      animations: 'disabled',
    });
  });
});
