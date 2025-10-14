import { Bowman } from "../src/Class/Bowman";

test("Правильно содается обект", () => {
  const bowman = new Bowman("Bowman");
  const correct = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: "Bowman",
    type: "Bowman",
  };

  expect(bowman).toEqual(correct)
});
