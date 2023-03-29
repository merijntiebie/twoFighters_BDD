const {createFighter,
       announcementOfTheSpeaker,                    
} = require("../src/template");

describe("TwoFighters is a game where two fighters fight each other to death", () => {
  describe('Before the fight can start, we need to be able to create a fighter', () => {
    it('The first fighter is Lew, with a damage per attack of 2 and a health of 10', () => {
      const nameOfFighter = 'Lew';
      const damagePerAttack = 2;
      const health = 10;
      const lew = createFighter(nameOfFighter, damagePerAttack, health);
      expect(lew.name = nameOfFighter);
      expect(lew.damagePerAttack = damagePerAttack);
      expect(lew.health = health);
    });
    it("The second fighter is Harry, with a damage per attack of 4 and a health of 5", () => {
      const nameOfFighter = "Harry";
      const damagePerAttack = 4;
      const health = 5;
      const harry = createFighter(nameOfFighter, damagePerAttack, health);
      expect((harry.name = nameOfFighter));
      expect((harry.damagePerAttack = damagePerAttack));
      expect((harry.health = health));
    });
  });
  describe('The fight is ready to begin. Two fighters enter the arena and are announced by the speaker', () => {
    it('Lew and Harry enter the arena!', () => {
      const nameOfFighter1 = 'Lew';
      const damagePerAttack1 = 2;
      const health1 = 10;
      const nameOfFighter2 = "Harry";
      const damagePerAttack2 = 4;
      const health2 = 5;
      expect(announcementOfTheSpeaker(nameOfFighter1, damagePerAttack1, health1, nameOfFighter2, damagePerAttack2, health2)).toEqual(`${nameOfFighter1} and ${nameOfFighter2} enter the arena!`);
    });
  });
});
