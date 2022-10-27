import {  Given, When, Then  } from "@badeball/cypress-cucumber-preprocessor";
import SignUpPage from "../../pageobjects/SignUpPage"
import JoinTheWaitlistPage from "../../pageobjects/JoinTheWaitlistPage";
import LoginPage from "../../pageobjects/LoginPage";
const loginPage = new LoginPage();
const joinTheWaitlistPage = new JoinTheWaitlistPage();
const signUpPage = new SignUpPage();
const randomEmail = signUpPage.randomEmailGenerator();
const emailInput = '[type="email"]';
const submitBtn = '[type="submit"]';
const base = require("../../pageobjects/Base");
const productPage = "https://telnyx.com/products";
const productsList = "h2";

Given('I am on the Telnyx page and click the cookies', () => {
  base.navigate();
  base.CookiesButton.click();
});

//Scenario#1

When('I open products page', async () => {
  cy.visit(productPage);
  cy.get(productsList).its("length").should("eq", 30);
});

Then('I see 30 products links', async () => {
  cy.get(productsList).its("length").should("eq", 30);
}); 

//Scenario#2

When('I type random email into the email input in Try for free form', async () => {
  cy.get(emailInput).type(randomEmail);
});

Then('I click on "Try for free" button', async () => {
  cy.get(submitBtn).click();
});

Then('I see that my email is already entered on the new page', async () => {
  signUpPage.emailInput().should("have.value", randomEmail);
});

//Scenario#3

When('I click on the Join the Waitlist button', async () => {
  joinTheWaitlistPage.JoinTheWaitlistBtn().click();
    cy.wait(3000);
});

Then('I follow the next page', async () => {
  joinTheWaitlistPage.JoinTheWaitlistBtn2().click();
    cy.wait(10000);
});

Then('I enter valid data to the form', async () => {
  joinTheWaitlistPage
      .nameInput()
      .type(joinTheWaitlistPage.randomNameGenerator());
    joinTheWaitlistPage
      .lastNameInput()
      .type(joinTheWaitlistPage.randomNameGenerator());
    joinTheWaitlistPage
      .emailInput()
      .type(joinTheWaitlistPage.randomEmailGenerator());
    joinTheWaitlistPage
      .additionalInfoInput()
      .type("Hello every one, it's test message, thanks!");
});

Then('I click "Submit" button', async () => {
  joinTheWaitlistPage.submitBtn().click();
});

Then('I should see thank you message', async () => {
  joinTheWaitlistPage.thankYouMessage().contains("Thanks for signing up!");
});

//Scenario#4

When('I open signUp page', () => {
  signUpPage.openSignUpPage();
});

Then('I enter valid credentials to sign up fields', async () => {
  signUpPage.emailInput().type(signUpPage.randomEmailGenerator());
  signUpPage.passwordInput().type(signUpPage.randomPasswordGenerator(12));
  signUpPage.nameInput().type(signUpPage.randomNameGenerator());
  signUpPage.checkBox().click();
});

Then('I click "Create Account" button', async () => {
  signUpPage.createAccountBtn().click();
  cy.wait(5000);
});

Then('I see the captcha error', async () => {
  signUpPage.errorMessage().contains("reCAPTCHA");
});

//Scenario#5
Then('I enter invalid email on signUp page', async () => {
  signUpPage.emailInput().type(signUpPage.invalidEmail());
});

Then('I click on the name input', async () => {
  signUpPage.nameInput().click();
});

Then('I see the error message about the wrong email', async () => {
  signUpPage
      .emeailErrorMessage()
      .contains("Please enter a valid email address");
});

//Scenario#6

When('I open the Login page', () => {
  loginPage.openLoginPage();
});

Then('I enter valid email', async () => {
  loginPage.emailInput().type(loginPage.exisstingUserEmail());
});

Then('I enter invalid password', async () => {
  loginPage.passwordInput().type(loginPage.randomPasswordGenerator());
});

Then('I click "Submit" button on Login page', async () => {
  loginPage.SubmitBtn().click();
});

Then('I see error message', async () => {
  loginPage
      .errorMessage()
      .contains("That email and password combination is not valid");
});

//Scenario#7

Then('I enter invalid email', async () => {
  loginPage.emailInput().type(loginPage.randomEmailGenerator());
});

Then('I enter valid password', async () => {
  loginPage.passwordInput().type(loginPage.exisstingUserPassword());
});

//Scenario#8

Then('I enter blocked account email', async () => {
  loginPage.emailInput().type("sokesi7058@lurenwu.com");

});

Then('I enter blocked account password', async () => {
  loginPage.passwordInput().type("CyppressTestSt1234@");
});

Then('I see that account is blocked message', async () => {
  loginPage.errorMessage().contains("Your account has been blocked.");
});

//Scenario#9

Then('I click on Signle Sign In button', async () => {
  loginPage.singleSignInBtn().click();
});

Then('I click "Submit" button on SignleSignIn page', async () => {
  loginPage.SubmitSignleBtn().click();
});

Then('I enter blocked account into email input', async () => {
  loginPage.emailInputSignle().type("sokesi7058@lurenwu.com");
});


Then('I see that account isnt valid for this option', async () => {
  loginPage
  .errorMessage()
  .contains("The requested resource or URL could not be found");
});

//Scenario#10
Then('I click on forgot password button', async () => {
  loginPage.forgotPasswordBtn().click();
});

Then('I enter random email', async () => {
  loginPage.emailInput().type(loginPage.randomEmailGenerator());

});

Then('I click "Reset Password" button', async () => {
  loginPage.resetPasswordBtn().click();
});

Then('I see that my reset password request was received', async () => {
  loginPage
  .successMessage()
  .contains("We have accepted your password reset request");
});


