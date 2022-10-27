Feature: Test of the Join the Waitlist Feature
   Background: 
     Given I am on the Telnyx page and click the cookies

   Scenario: Verify if the Join the Waitlist feature works corretly
     When I click on the Join the Waitlist button
     Then I follow the next page
     Then I enter valid data to the form
     Then I click "Submit" button
     Then I should see thank you message