import { expect, test } from "@playwright/test";
import LoginForm from "../../../Pages/Student/StudentLoginPage/LoginForm";

// This test checks that when entering invalid login credentials,
// the login both fails and displays the following message:
// "Invalid username and/or pasword."

test("Test Login With Wrong Credentials", async ({ page }) => {
  const loginPage = new LoginForm(page);
  await page.goto("https://www.gmetrix.net");
  loginPage.loginAsStudent("w", "wrongpassword");
  const locator = page.locator("#body_pError");
  await expect(locator).toContainText("Invalid username and/or password.");
  await expect(locator).toBeVisible();
  await page.close();
});
