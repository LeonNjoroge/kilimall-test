Feature: Add product to Cart Functionality

    Scenario: User adds product to cart while not logged in
        Given I am on the home page
        When I click an option on the category
        Then I am on category page
        When I select a product
        And I click the add to cart button
        Then I am redirected to login page

    Scenario: User adds product to cart while logged in
        Given I am on the home page
        When I click the My Account button
        Then I am on the login page
        When I enter the email: "" and password: ""
        And I submit the login form
        Then I should be redirected to the home page
        When I click an option on the category
        Then I am on category page
        When I select a product
        And I click the add to cart button
        Then I get the added to cart message




