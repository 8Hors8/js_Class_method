import { Daemon } from "../src/Class/Daemon";

test("Правильно содается обект", () => {
  const bowman = new Daemon("Daemon");
  const correct = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: "Daemon",
    type: "Daemon",
  };

  expect(bowman).toEqual(correct)
});
