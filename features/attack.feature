Feature: Attack!
The two fighters need to be able to attack each other.
The fighters should be able to attack the other one with their Damage per Attack,
and the health of the other fighter decreases by this amount.

  Scenario: Lew attacks Harry
    Given a fight will be fought between Lew and Harry
    When Lew attacks Harry
    Then the announcer should say: "Lew attacks Harry; Harry now has 3 health."
    And Harry's health is now 3