Feature: Main Page

Scenario: Verify two types of modes are available on the Main page.
    When I visit the Main Page
    Then I should see two types of modes present in it
    Then I should go to 'Offline-Multiplayer' while clicking it

Scenario: Verify the first move should always be for X.
    When I visit the Main Page
    Then I should go to 'Offline-Multiplayer' while clicking it
    Then I should see 'x' should be the first move

Scenario: Verify O should be clicked after first move.
    When I visit the Main Page
    Then I should go to 'Offline-Multiplayer' while clicking it
    Then I should see 'x' should be the first move
    Then I should see O after the first move
    Then I should see x and O are visible in the UI

Scenario: Verify the first game is tied.
    When I visit the Main Page
    Then I should go to 'Offline-Multiplayer' while clicking it
    Then I should see x and O should be played till the first game is tied

Scenario: Verify the the second is won by X .
    When I visit the Main Page
    Then I should go to 'Offline-Multiplayer' while clicking it
    Then I should see  x wins


Scenario: Verify the the Third is won by O .
    When I visit the Main Page
    Then I should go to 'Offline-Multiplayer' while clicking it
    Then I should see O wins
    Then I should see the 'Restart' button once the game is over

Scenario: Verify the Restart button is visible once game is played .
    When I visit the Main Page
    Then I should go to 'Offline-Multiplayer' while clicking it
    Then I should see O wins
    Then I should see the 'Restart' button once the game is over 

Scenario: Verify one should not be able to click on an already marked cell again.
    When I visit the Main Page
    Then I should go to 'Offline-Multiplayer' while clicking it
    Then I am able to click on any cell
    Then I should not able to click the already marked cell




