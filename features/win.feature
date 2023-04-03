Feature: Determine a winner
When a fighter's health drops to zero or below, the game can determine that he has died.
The announcer should then announce the winner of the fight (the other fighter)

  Scenario: Lew's health drops below zero, Harry wins
    Given Lews health is -3
    And Harry's health is 3
    When the announcer checks if there is a winner
    Then the announcer should say: "Lew has died! Harry wins!"

  Scenario: Harry's health drops below zero, Lew wins
    Given Lews health is 3
    And Harry's health is -3
    When the announcer checks if there is a winner
    Then the announcer should say: "Harry has died! Lew wins!"

  Scenario: Harry's health drops to zero, Lew wins
    Given Lews health is 1
    And Harry's health is 0
    When the announcer checks if there is a winner
    Then the announcer should say: "Harry has died! Lew wins!"

  Scenario: Both fighters are still alive, no winner yet
    Given Lews health is 1
    And Harry's health is 1
    When the announcer checks if there is a winner
    Then the announcer should say nothing