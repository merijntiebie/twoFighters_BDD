Feature: Ready to begin
We want to be able to start a fight between two fighters: Lew and Harry
They need to have the correct names, health and damage per attack.
The fighters names need to be announced to the audience by the speaker.

  Scenario: Announce the fighters to the audience, fighter one starts
    Given a fight will be fought between Lew and Harry
    And the first fighter is Lew
    When the fight is ready to begin
    Then the announcer should say: "Lew and Harry enter the arena! Lew may attack first"
    And the first fighter's name is Lew
    And the first fighter has a damage per attack of 2
    And the first fighter's health is 10
    And the second fighter's name is Harry
    And the second fighter has a damage per attack of 4
    And the second fighter's health is 5

  Scenario: Announce the fighters to the audience, fighter two starts
    Given a fight will be fought between Lew and Harry
    And the first fighter is Harry
    When the fight is ready to begin
    Then the announcer should say: "Lew and Harry enter the arena! Harry may attack first"
    And the first fighter's name is Lew
    And the first fighter has a damage per attack of 2
    And the first fighter's health is 10
    And the second fighter's name is Harry
    And the second fighter has a damage per attack of 4
    And the second fighter's health is 5