import { expect, test } from "@playwright/test";
import AdminLoginPage from "../../../Helpers/Admin/AdminLoginPage/AdminLoginPage";

// This test checks that when entering invalid login credentials,
// the login both fails and displays the following message:
// "Invalid username and/or pasword."

test("Test that login to admin fails correctly", async ({ page }) => {
  const alp = new AdminLoginPage(page);
  await page.goto("https://manage.gmetrix.net/Access/Login.aspx");
  await alp.loginAsAdmin("w", "wrongpassword");
  await expect(alp.locators.signInErrorMessage).toContainText(
    "Please enter a valid username and password."
  );
  await expect(alp.locators.signInErrorMessage).toBeVisible();
  await page.close();
});
