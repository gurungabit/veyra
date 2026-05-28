import { expect, test } from "@playwright/test";

test("desktop shell renders", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Veyra/ })).toBeVisible();
  await expect(page.getByRole("button", { name: "Scripts", exact: true })).toBeVisible();
});
