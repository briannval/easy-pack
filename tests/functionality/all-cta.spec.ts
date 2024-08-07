import { test, expect } from "@playwright/test";

test.describe("CTA Buttons", () => {
  test("home products CTA", async ({ page }) => {
    await page.goto("/");

    await page.click("a#view-products");

    await expect(page).toHaveURL(/.*products/);
  });

  test("home about CTA", async ({ page }) => {
    await page.goto("/");

    await page.click("a#view-about");

    await expect(page).toHaveURL(/.*about/);
  });

  test("about products CTA", async ({ page }) => {
    await page.goto("/about");

    await page.click("a#view-products");

    await expect(page).toHaveURL(/.*products/);
  });
});
