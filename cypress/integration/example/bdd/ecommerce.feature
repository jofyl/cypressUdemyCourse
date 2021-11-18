Feature: End to End Ecommerce Validation
  Application Regression

  Scenario: Ecommerce Products Delivery
    Given I open ecommerce page
    When I add items to cart
    And Validate the total prices
    Then Select the coutry submit and verify thank you message

  @Smoke
  Scenario: Filling the shop form
    Given I open ecommerce page
    When I fill the form details
      | name | gender |
      | bob  | male   |
    Then Validate the form behavrio
    And select the Shop page