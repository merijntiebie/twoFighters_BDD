function createFighter(name, damagePerAttack, health) {
  const fighter = {
    name,
    damagePerAttack,
    health,
  };
  return fighter;
}

function announceTheFighters(fighterOne, fighterTwo, startFighter) {
  const announcement = `${fighterOne.name} and ${fighterTwo.name} enter the arena! ${startFighter.name} may attack first`;
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

function switchRoles(fighterOne, fighterTwo) {
  // eslint-disable-next-line no-param-reassign
  fighterOne.isAttacker = !fighterOne.isAttacker;
  // eslint-disable-next-line no-param-reassign
  fighterTwo.isAttacker = !fighterTwo.isAttacker;
}

module.exports = {
  createFighter,
  announceTheFighters,
  attack,
  announceAttackResult,
  switchRoles,
};
