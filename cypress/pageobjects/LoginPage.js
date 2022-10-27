require("cypress-xpath");
const loginPortal = "https://portal.telnyx.com/#/login/sign-in";

class LoginPage {

  openLoginPage(){
    return cy.visit(loginPortal);
}

  emailInput() {
    return cy.get('[name="email"]').first();
  }
  passwordInput() {
    return cy.get('[name="password"]');
  }
  forgotPasswordBtn() {
    return cy.get('[href="/#/login/password-reset"]');
  }
  SubmitBtn() {
    return cy.get('form[aria-label="loginForm"] > button')
  }
  errorMessage() {
    return cy.get('[data-testid="login.signin.message"]');
  }
  singleSignInBtn() {
    return cy.get('[data-testid="login.signin.tab.sso"]');
  }
  SubmitSignleBtn() {
    return cy.xpath('//*[contains(@class,"LoginButton")]').last();
  }
  emailInputSignle() {
    return cy.get('[name="email"]').last();
  }
  resetPasswordBtn() {
    return cy.get('div [type="submit"]');
  }
  successMessage() {
    return cy.get('div [type="success"]');
  }

  exisstingUserEmail() {
    return "sokesi7058@lurenwu.com";
  }

  exisstingUserPassword() {
    return "CyppressTestSt1234@";
  }

  randomEmailGenerator(length = 8) {
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let str = "";
    for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str + "@gmail.com";
  }
  randomPasswordGenerator(length = 8) {
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let str = "";
    for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
  }
}

export default LoginPage;
