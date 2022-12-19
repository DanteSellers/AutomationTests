import { expect, test } from "@playwright/test";
import SiteData from "../../../CommonData/SiteData";
import AdminLoginPage from "../../../Pages/Admin/AdminLoginPage/AdminLoginForm";

// This test checks that when entering invalid login credentials,
// the login both fails and displays the following message:
// "Invalid username and/or pasword."

test("Test that login to admin fails correctly", async ({ page }) => {
  const adminLoginForm = new AdminLoginPage(page);
  const siteData = new SiteData();
  await page.goto(siteData.ADMIN_BASE_URL);
  await adminLoginForm.loginAsAdmin("w", "wrongpassword");
  await expect(adminLoginForm.signInErrorMessage).toContainText(
    "Please enter a valid username and password."
  );
  await expect(adminLoginForm.signInErrorMessage).toBeVisible();
  await page.close();
});
