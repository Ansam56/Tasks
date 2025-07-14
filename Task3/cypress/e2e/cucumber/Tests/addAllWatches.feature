Feature: Add watches with a price greater than 55

  Scenario: Add watches with a price greater than 55
    Given The user navigated to the Magento website
    When Clicks on the Gear menu
    And Clicks on the Watches option
    And Clicks on list mode 
    And Adds all watches with a price greater than 55 to the cart
    Then All watches with a price greater than 55 should be added to the cart

