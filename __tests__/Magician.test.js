import { Magician } from "../src/Class/Magician";

test("Правильно содается обект", () => {
  const bowman = new Magician("Magician");
  const correct = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: "Magician",
    type: "Magician",
  };

  expect(bowman).toEqual(correct)
});
