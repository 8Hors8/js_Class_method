import { Characters } from "../src/Class/Characters.js";
import { Daemon } from "../src/Class/Daemon";

describe("Класс Characters", () => {
  test("создаётся корректно с допустимыми параметрами", () => {
    const hero = new Characters("Hero", "Daemon");
    expect(hero.name).toBe("Hero");
    expect(hero.type).toBe("Daemon");
    expect(hero.health).toBe(100);
    expect(hero.level).toBe(1);
  });

  describe("Проверка имени", () => {
    test("вызывает ошибку, если имя короче 2 символов", () => {
      expect(() => new Characters("A", "Daemon")).toThrow(
        "Имя должно быть строкой длиной от 2 до 10 символов"
      );
    });

    test("вызывает ошибку, если имя длиннее 10 символов", () => {
      expect(() => new Characters("ОченьДлинноеИмя", "Daemon")).toThrow(
        "Имя должно быть строкой длиной от 2 до 10 символов"
      );
    });

    test("вызывает ошибку, если имя не строка", () => {
      expect(() => new Characters(123, "Daemon")).toThrow(
        "Имя должно быть строкой длиной от 2 до 10 символов"
      );
    });
  });

  describe("Проверка типа персонажа", () => {
    test("вызывает ошибку, если тип не входит в список допустимых", () => {
      expect(() => new Characters("Hero", "InvalidType")).toThrow(
        "Неверный тип персонажа"
      );
    });
  });

  describe("Метод levelUp()", () => {
    test("повышает уровень и характеристики", () => {
      const char = new Daemon("Test");
      const oldAttack = char.attack;
      const oldDefence = char.defence;

      char.levelUp();

      expect(char.level).toBe(2);
      expect(char.attack).toBeCloseTo(oldAttack * 1.2);
      expect(char.defence).toBeCloseTo(oldDefence * 1.2);
      expect(char.health).toBe(100);
    });

    test("вызывает ошибку, если персонаж мёртв", () => {
      const char = new Daemon("Dead");
      char.health = 0;

      expect(() => char.levelUp()).toThrow("нельзя повысить левел умершего");
    });
  });

  describe("Метод damage()", () => {
    test("уменьшает здоровье с учётом защиты", () => {
      const char = new Daemon("Hero");
      char.defence = 25;
      char.damage(40);
      expect(char.health).toBeCloseTo(100 - 40 * (1 - 0.25));
    });

    test("не изменяет здоровье, если персонаж мёртв", () => {
      const char = new Daemon("Hero");
      char.health = 0;
      char.damage(50);
      expect(char.health).toBe(0);
    });

    test("обнуляет здоровье, если после урона становится меньше 0", () => {
      const char = new Daemon("Hero");
      char.health = 10; 
      char.defence = 0; 
      char.damage(50); 
      expect(char.health).toBe(0);
    });
  });
});
