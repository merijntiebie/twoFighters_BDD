function createFighter(name, damagePerAttack, health) {
  const fighter = {
    name: name,
    damagePerAttack: damagePerAttack,
    health: health
  };
  return fighter;
}

function announceTheFighters(fighterOne, fighterTwo) {
  const announcement = `${fighterOne.name} and ${fighterTwo.name} enter the arena!`;
  console.log(announcement);
  return announcement;
}

module.exports = {
  createFighter,
  announceTheFighters,
};
