import { Page } from "@playwright/test";

export default class SiteData {
  readonly STUDENT_BASE_URL: string;
  readonly ADMIN_BASE_URL: string;
  readonly AUTHOR_BASE_URL: string;
  readonly STOREFRONT_BASE_URL: string;

  constructor() {
    this.STUDENT_BASE_URL = "https://stage.gmetrix.net/";
    this.ADMIN_BASE_URL = "https://stagemanage.gmetrix.net/";
    this.AUTHOR_BASE_URL = "https://stageauthor.gmetrix.net/";
    this.STOREFRONT_BASE_URL = "https://stage.gmetrix.com/";
  }

  async getStudentURL() {
    return this.STUDENT_BASE_URL;
  }

  async getAdminURL() {
    return this.ADMIN_BASE_URL;
  }

  async getAuthorURL() {
    return this.AUTHOR_BASE_URL;
  }

  async getStorefrontURL() {
    return this.STOREFRONT_BASE_URL;
  }
}
