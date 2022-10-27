Feature: Test of the Try free module
   Background: 
     Given I am on the Telnyx page and click the cookies

   Scenario: Verify if the email is saved after redirecting to a new page
     When I type random email into the email input in Try for free form
     Then I click on "Try for free" button
     Then I see that my email is already entered on the new page