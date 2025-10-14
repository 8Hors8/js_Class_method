import { Zombie } from "../src/Class/Zombie";

test("Правильно содается обект", () => {
  const bowman = new Zombie("Zombie");
  const correct = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: "Zombie",
    type: "Zombie",
  };

  expect(bowman).toEqual(correct)
});
