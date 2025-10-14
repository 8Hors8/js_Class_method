import { Swordsman } from "../src/Class/Swordsman";

test("Правильно содается обект", () => {
  const bowman = new Swordsman("Swordsman");
  const correct = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: "Swordsman",
    type: "Swordsman",
  };

  expect(bowman).toEqual(correct)
});
