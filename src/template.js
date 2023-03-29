function createFighter(name, damagePerAttack, health) {
  const fighter = {
    name: name,
    damagePerAttack: damagePerAttack,
    health: health
  };
  return fighter;
}

function announcementOfTheSpeaker(nameOfFighter1, damagePerAttack1, health1, nameOfFighter2, damagePerAttack2, health2) {
  const fighterOne = createFighter(nameOfFighter1, damagePerAttack1, health1);
  const fighterTwo = createFighter(nameOfFighter2, damagePerAttack2, health2);
  const announcement = `${fighterOne.name} and ${fighterTwo.name} enter the arena!`;
  console.log(announcement)
  return announcement;
}

module.exports = {
  createFighter,
  announcementOfTheSpeaker,
};
