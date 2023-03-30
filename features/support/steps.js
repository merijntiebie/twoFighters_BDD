const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");
const {
  createFighter,
  announceTheFighters,
  attack,
  announceAttackResult,
} = require("../../src/template");
const { start } = require("repl");

let fighterOne;
let fighterTwo;
let startFighter;
let announcement;

Given("a fight will be fought between Lew and Harry", () => {
  fighterOne = createFighter("Lew", 2, 10);
  fighterTwo = createFighter("Harry", 4, 5);
});

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

When("Lew attacks Harry", () => {
  attack(fighterOne, fighterTwo);
  announcement = announceAttackResult(fighterOne, fighterTwo);
});

Then("Harry's health is now 3", () => {
  assert.equal(fighterTwo.health, 3);
});
