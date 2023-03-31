Feature: Taking turns
Every turn, one fighter attacks and the other fighter defends
After every turn, the fighters switch roles

  Scenario: Lew attacks and Harry defends. After the attack, they switch roles.
    Given a fight will be fought between Lew and Harry
    And Lew is the attacker
    And Harry is the defender
    When Lew has attacked Harry
    Then Harry becomes the attacker 
    And Lew becomes the defender

  Scenario: Harry attacks and Lew defends. After the attack, they switch roles.
    Given a fight will be fought between Lew and Harry
    And Harry is the attacker
    And Lew is the defender
    When Harry has attacked Lew
    Then Lew becomes the attacker 
    And Harry becomes the defender