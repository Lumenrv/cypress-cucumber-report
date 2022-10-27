Feature: Test of Login page
     

   Scenario: Test login with an invalid password
    Given I am on the Telnyx page and click the cookies
     When I open the Login page
     Then I enter valid email
     Then I enter invalid password
     Then I click "Submit" button on Login page
     Then I see error message

    Scenario: Test login with an invalid email
        When I open the Login page
        Then I enter invalid email
        Then I enter valid password
        Then I click "Submit" button on Login page
        Then I see error message

    Scenario: Test login with valid credentials for blocked account
        When I open the Login page
        Then I enter blocked account email
        Then I enter blocked account password
        Then I click "Submit" button on Login page
        Then I see that account is blocked message

    Scenario: Test Signe Sign-On option with invalid credential
        When I open the Login page
        Then I click on Signle Sign In button
        Then I enter blocked account into email input
        Then I click "Submit" button on SignleSignIn page
        Then I see that account isnt valid for this option

    Scenario: Test forgot password feature with non-registered email
        When I open the Login page
        Then I click on forgot password button
        Then I enter random email
        Then I click "Reset Password" button
        Then I see that my reset password request was received





