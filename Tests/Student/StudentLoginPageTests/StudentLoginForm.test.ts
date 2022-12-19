import { expect, test } from "@playwright/test";
import LoginForm from "../../../Pages/Student/StudentLoginPage/LoginForm";
import SiteData from "../../../CommonData/SiteData";

// This test checks that when entering invalid login credentials,
// the login both fails and displays the following message:
// "Invalid username and/or pasword."

test("Test login fails with correct error message", async ({ page }) => {
  const siteData = new SiteData();
  const loginPage = new LoginForm(page);
  await page.goto(siteData.STUDENT_BASE_URL);
  loginPage.loginAsStudent("w", "wrongpassword");
  const locator = page.locator("#body_pError");
  await expect(locator).toContainText("Invalid username and/or password.");
  await expect(locator).toBeVisible();
  await page.close();
});

