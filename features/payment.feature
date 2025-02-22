Feature: Buy product now Functionality

    Scenario: User buys product now while not logged in
        Given I am on the home page
        When I click an option on the category
        Then I am on category page
        When I select a product
        And I click the Buy Now button
        Then I am redirected to login page
    
    Scenario: User buys product now while logged in
        Given I am on the home page
        When I login to my account
        When I click an option on the category
        Then I am on category page
        When I select a product
        And I click the Buy Now button
        Then I get redirected to the checkout page
