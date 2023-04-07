Feature: Main Page

Scenario: Verify two types of modes are available on the Main page.
    When I visit the Main Page
    Then I should see two types of modes present in it
    Then I should go to Offline-Multiplayer while clicking it

Scenario: Verify the first move should always be for X.
    When I visit the Main Page
    Then I should see x should be the first move
    Then I should see O after the first move
    Then I should see x and O are visible in the UI

Scenario: Verify the first game is playes as per rules
    When I visit the Main Page
    Then I should see x and O should be played till the first game is tied
    Then I should see the game until x wins
    Then I should see the game played until O wins
    Then I should see the Restart button once the game is over 

Scenario: Verify one should not be able to click on an already marked cell again.
    When I visit the Main Page
    Then I am able to click on any cell
    Then I should not able to click the already marked cell

Scenario: Verify to go to play mode after after clicking Play With Computer 
    When I visit the Main Page    
    Then I should see two types of modes present in it
    Then I should visit play mode while clicking it

Scenario: Verify the first game is tied
    When I click Play With Computer
    Then I should play game until it is tied
    Then I should see Replay button is visible

Scenario: Verify the game is lost
    When I click Play With Computer
    Then I should see message You lose  after  Playing With Computer      



