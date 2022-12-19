import { Page, Locator, expect } from "@playwright/test";

export default class ForgotPassword {
  readonly forgotYourPasswordLink: Locator;
  readonly enterUsernameInput: Locator;
  readonly forgotPasswordNextButton: Locator;
  readonly forgotPasswordBackButton: Locator;
  readonly forgotYourPasswordPageTitle: Locator;
  readonly forgotYourPasswordInstructions: Locator;
  readonly titleExpectedText: string;
  readonly instructionsExpectedText: string;
  readonly errorLocator: Locator;
  readonly errorExpectedText: string;

  constructor(public page: Page) {
    // Forgot your password? link that appears on the Student login form 
    this.forgotYourPasswordLink = this.page.locator("#body_lbLoginForgotPass");

    // Forgot your password? form buttons 
    this.enterUsernameInput = this.page.getByPlaceholder("Username");
    this.forgotPasswordBackButton = this.page.getByRole("link", { name: "Back" });
    this.forgotPasswordNextButton = this.page.getByRole("link", { name: "Next" });


    // Title and Instructions locators and expected text on the Forgot Your Password? screen 
    this.forgotYourPasswordPageTitle = this.page.locator("#title");
    this.forgotYourPasswordInstructions = this.page.locator(".instructions");
    this.titleExpectedText = "Forgot your password?";
    this.instructionsExpectedText = "Please enter your username to reset your password. Your Username may be the same as your e-mail address. If you cannot recover your password, please contact us at support.gmetrix.net."

    // Locator and expected text for the Account Not Found error message 
    this.errorLocator = this.page.locator("#body_usernameInputValidation");
    this.errorExpectedText = "Account not found: This account doesn't exist.";
  }

  async clickForgotPassword() {
    await this.forgotYourPasswordLink.click();
  }

  async enterUsername(username: string) {
    await this.enterUsernameInput.fill(username);
  }

  async clickBack() {
    await this.forgotPasswordBackButton.click();
  }

  async clickNext() {
    await this.forgotPasswordNextButton.click();
  }

  async findExpectedTitleText() {
    await expect(this.forgotYourPasswordPageTitle).toContainText(this.titleExpectedText);
  }

  async findExpectedInstructionText () {
    await expect(this.forgotYourPasswordInstructions).toContainText(this.instructionsExpectedText);
  }

  async findExpectedErrorMessage() {
    await expect(this.errorLocator).toContainText(this.errorExpectedText);
  }
}
