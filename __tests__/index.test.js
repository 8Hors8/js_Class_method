import {
  Characters,
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Zombie,
  Undead,
} from '../src/index.js';

describe("Тестирование классов персонажей", () => {
  // 🔹 Общие проверки конструктора
  test("Ошибка, если имя короче 2 символов", () => {
    expect(() => new Bowman("A")).toThrow(
      "Имя должно быть строкой длиной от 2 до 10 символов"
    );
  });

  test("Ошибка, если имя длиннее 10 символов", () => {
    expect(() => new Swordsman("SuperLongName")).toThrow(
      "Имя должно быть строкой длиной от 2 до 10 символов"
    );
  });

  test("Ошибка, если тип некорректный", () => {
    expect(() => new Characters("BadGuy", "Alien", 10, 10)).toThrow(
      "Неверный тип персонажа"
    );
  });

  // 🔹 Bowman
  test("Bowman создаётся корректно", () => {
    const bowman = new Bowman("Robin");
    expect(bowman).toEqual({
      name: "Robin",
      type: "Bowman",
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });

  // 🔹 Swordsman
  test("Swordsman создаётся корректно", () => {
    const s = new Swordsman("Arthas");
    expect(s.attack).toBe(40);
    expect(s.defence).toBe(10);
  });

  // 🔹 Magician
  test("Magician создаётся корректно", () => {
    const m = new Magician("Gandalf");
    expect(m.attack).toBe(10);
    expect(m.defence).toBe(40);
  });

  // 🔹 Daemon
  test("Daemon создаётся корректно", () => {
    const d = new Daemon("Azazel");
    expect(d.attack).toBe(10);
    expect(d.defence).toBe(40);
  });

  // 🔹 Zombie
  test("Zombie создаётся корректно", () => {
    const z = new Zombie("Zombo");
    expect(z.attack).toBe(40);
    expect(z.defence).toBe(10);
  });

  // 🔹 Undead
  test("Undead создаётся корректно", () => {
    const u = new Undead("Drake");
    expect(u.attack).toBe(25);
    expect(u.defence).toBe(25);
  });

  // 🔹 Методы levelUp
  test("levelUp увеличивает уровень и параметры", () => {
    const hero = new Bowman("Legolas");
    hero.attack = 25;
    hero.defence = 25;
    hero.health = 50;
    hero.levelUp();

    expect(hero.level).toBe(2);
    expect(hero.attack).toBeCloseTo(30);
    expect(hero.defence).toBeCloseTo(30);
    expect(hero.health).toBe(100);
  });

  test("levelUp выбрасывает ошибку, если персонаж мёртв", () => {
    const hero = new Swordsman("Deadman");
    hero.health = 0;
    expect(() => hero.levelUp()).toThrow("нельзя повысить левел умершего");
  });

  // 🔹 Методы damage
  test("damage уменьшает здоровье с учётом защиты", () => {
    const hero = new Magician("Merlin");
    hero.defence = 40;
    hero.health = 100;
    hero.damage(50);
    expect(hero.health).toBeCloseTo(70); // 50 * (1 - 0.4) = 30 урона
  });

  test("damage не снижает здоровье ниже 0", () => {
    const hero = new Daemon("Inferno");
    hero.defence = 10;
    hero.health = 20;
    hero.damage(100);
    expect(hero.health).toBe(0);
  });

  test("damage ничего не делает, если персонаж уже мёртв", () => {
    const hero = new Zombie("Walker");
    hero.health = 0;
    hero.damage(50);
    expect(hero.health).toBe(0);
  });
});
