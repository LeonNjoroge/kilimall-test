Feature: Sign up functionality
    Scenario: User signs up to the site
        Given I am on the home page
        Then I click the account option
        And I click the sign in option
        Then I see login page message
        Thwn I enter and submit email: ""
        
        
