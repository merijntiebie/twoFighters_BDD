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

function determineWinnerAndLoser(fighterOne, fighterTwo) {
  let winner;
  let loser;
  if (fighterOne.health <= 0) {
    winner = fighterTwo;
    loser = fighterOne;
  }
  if (fighterTwo.health <= 0) {
    loser = fighterTwo;
    winner = fighterOne;
  }
  return { winner, loser };
}

function announceWinner(fighterOne, fighterTwo) {
  const { winner, loser } = determineWinnerAndLoser(fighterOne, fighterTwo);

  if (winner === undefined) return null;

  const announcement = `${loser.name} has died! ${winner.name} wins!`;
  console.log(announcement);
  return announcement;
}

module.exports = {
  createFighter,
  announceTheFighters,
  attack,
  announceAttackResult,
  switchRoles,
  announceWinner,
};
