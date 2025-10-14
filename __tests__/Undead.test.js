import { Undead } from "../src/Class/Undead";

test("Правильно содается обект", () => {
  const bowman = new Undead("Undead");
  const correct = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: "Undead",
    type: "Undead",
  };

  expect(bowman).toEqual(correct)
});
