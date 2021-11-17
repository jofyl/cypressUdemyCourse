Feature: End to End Ecommerce Validation
  Application Regression

  Scenario: Ecommerce Products Delivery
    Given I open ecommerce page
    When I add items to cart
    And Validate the total prices
    Then Select the coutry submit and verify thank you message