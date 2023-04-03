const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");
const {
  createFighter,
  announceTheFighters,
  attack,
  announceAttackResult,
  switchRoles,
  announceWinner,
} = require("../../src/template");

let fighterOne;
let fighterTwo;
let startFighter;
let announcement;

// readytobeginFeature, attackFeature, turnFeature
Given("a fight will be fought between Lew and Harry", () => {
  fighterOne = createFighter("Lew", 2, 10);
  fighterTwo = createFighter("Harry", 4, 5);
});

// readytobeginFeature
Given("the first fighter is Lew", () => {
  startFighter = fighterOne;
});

Given("the first fighter is Harry", () => {
  startFighter = fighterTwo;
});

When("the fight is ready to begin", () => {
  announcement = announceTheFighters(fighterOne, fighterTwo, startFighter);
});

Then("the announcer should say: {string}", (expectedAnnouncement) => {
  assert.equal(announcement, expectedAnnouncement);
});

Then("the first fighter's name is Lew", () => {
  assert.equal(fighterOne.name, "Lew");
});

Then("the first fighter has a damage per attack of 2", () => {
  assert.equal(fighterOne.damagePerAttack, 2);
});

Then("the first fighter's health is 10", () => {
  assert.equal(fighterOne.health, 10);
});

Then("the second fighter's name is Harry", () => {
  assert.equal(fighterTwo.name, "Harry");
});

Then("the second fighter has a damage per attack of 4", () => {
  assert.equal(fighterTwo.damagePerAttack, 4);
});

Then("the second fighter's health is 5", () => {
  assert.equal(fighterTwo.health, 5);
});

// attackFeature
When("Lew attacks Harry", () => {
  attack(fighterOne, fighterTwo);
  announcement = announceAttackResult(fighterOne, fighterTwo);
});

Then("Harry's health is now 3", () => {
  assert.equal(fighterTwo.health, 3);
});

// turnFeature scenario 1
Given("Lew is the attacker", () => {
  fighterOne.isAttacker = true;
});

Given("Harry is the defender", () => {
  fighterTwo.isAttacker = false;
});

When("Lew has attacked Harry", () => {
  attack(fighterOne, fighterTwo);
  announcement = announceAttackResult(fighterOne, fighterTwo);
  switchRoles(fighterOne, fighterTwo);
});

Then("Harry becomes the attacker", () => {
  assert.equal(fighterTwo.isAttacker, true);
});

Then("Lew becomes the defender", () => {
  assert.equal(fighterOne.isAttacker, false);
});

// turnFeature scenario 2
Given("Harry is the attacker", () => {
  fighterTwo.isAttacker = true;
});

Given("Lew is the defender", () => {
  fighterOne.isAttacker = false;
});

When("Harry has attacked Lew", () => {
  attack(fighterTwo, fighterOne);
  announcement = announceAttackResult(fighterTwo, fighterOne);
  switchRoles(fighterOne, fighterTwo);
});

Then("Lew becomes the attacker", () => {
  assert.equal(fighterOne.isAttacker, true);
});

Then("Harry becomes the defender", () => {
  assert.equal(fighterTwo.isAttacker, false);
});

// Win feature

Given("Lews health is {int}", (health) => {
  fighterOne.health = health;
});

Given("Harry's health is {int}", (health) => {
  fighterTwo.health = health;
});

When("the announcer checks if there is a winner", () => {
  announcement = announceWinner(fighterOne, fighterTwo);
});

Then("the announcer should say nothing", () => {
  assert.equal(announcement, null);
});
