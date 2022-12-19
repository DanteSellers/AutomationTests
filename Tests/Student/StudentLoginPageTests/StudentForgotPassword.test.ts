import { expect, test } from "@playwright/test";
import SiteData from "../../../CommonData/SiteData";
import ForgotPassword from "../../../Pages/Student/StudentLoginPage/ForgotPassword";

test("Forgot password page opens", async({ page }) => {
    const siteData = new SiteData();
    const helper = new ForgotPassword(page);
    await page.goto(siteData.STUDENT_BASE_URL);
    await helper.clickForgotPassword();
    await expect(page).toHaveURL(/PasswordRecovery.aspx/);
    page.close();
});

test("Error message should appear when entering an invalid username", async({ page }) => {
    const helper = new ForgotPassword(page);
    const siteData = new SiteData();
    await page.goto(siteData.STUDENT_BASE_URL);
    await helper.clickForgotPassword();
    await helper.enterUsername("wdelawdela"); // invalid username
    await helper.clickNext();
    await helper.findExpectedErrorMessage();
    page.close();
});

test("Forgot password page should have title and instruction text", async({ page }) => {
    const helper = new ForgotPassword(page);
    const siteData = new SiteData();
    await page.goto(siteData.STUDENT_BASE_URL);
    await helper.clickForgotPassword();
    await helper.findExpectedInstructionText();
    await helper.findExpectedTitleText();
    page.close();
});