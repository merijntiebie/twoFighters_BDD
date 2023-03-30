function createFighter(name, damagePerAttack, health) {
  const fighter = {
    name,
    damagePerAttack,
    health,
  };
  return fighter;
}

function announceTheFighters(fighterOne, fighterTwo) {
  const announcement = `${fighterOne.name} and ${fighterTwo.name} enter the arena!`;
  console.log(announcement);
  return announcement;
}

function attack(attacker, defender) {
  // eslint-disable-next-line no-param-reassign
  defender.health -= attacker.damagePerAttack;
}

function announceAttackResult(attacker, defender) {
  const announcement = `${attacker.name} attacks ${defender.name}; ${defender.name} now has ${defender.health} health.`;
  console.log(announcement);
  return announcement;
}

module.exports = {
  createFighter,
  announceTheFighters,
  attack,
  announceAttackResult,
};
