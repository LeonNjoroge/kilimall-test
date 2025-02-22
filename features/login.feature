Feature: Login Functionality

    Scenario: User logs into the site with invalid credentials
        Given I am on the home page
        When I click the My Account button
        Then I am on the login page
        When I enter the wrong email: "" and wrong password: ""
        And I submit the login form
        Then I see Invalid username or password

    Scenario: User logs into the site with valid credentials
        Given I am on the home page
        When I click the My Account button
        Then I am on the login page
        When I enter the email: "" and password: ""
        And I submit the login form
        And I should be redirected to the home page
        Then I should see the email: "" displayed at the top of the home page


        
        
