Feature: Test of the Products page
   Background: 
     Given I am on the Telnyx page and click the cookies

   Scenario: Verify the number of products on the Product page is equal to 30
     When I open products page
     Then I see 30 products links