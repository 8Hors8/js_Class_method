const validTypes = [
  "Bowman",
  "Swordsman",
  "Magician",
  "Daemon",
  "Undead",
  "Zombie",
];

/**
 * Базовый класс для всех персонажей.
 * Определяет общие свойства и методы.
 */
class Characters {
  /**
   * Создаёт экземпляр персонажа.
   * @param {string} name - Имя персонажа (от 2 до 10 символов).
   * @param {string} type - Тип персонажа. Один из: "Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie".
   * @throws {Error} Если имя не строка или длина имени некорректна.
   * @throws {Error} Если указан неверный тип персонажа.
   */
  constructor(name, type) {
    if (typeof name !== "string" || name.length < 2 || name.length > 10) {
      throw new Error("Имя должно быть строкой длиной от 2 до 10 символов");
    }

    const normalizedType =
      type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();

    if (!validTypes.includes(normalizedType)) {
      throw new Error("Неверный тип персонажа");
    }

    this.name = name;

    this.type = normalizedType;

    this.health = 100;

    this.level = 1;

    this.attack = undefined;

    this.defence = undefined;
  }

  /**
   * Повышает уровень персонажа.
   * Увеличивает уровень на 1, повышает атаку и защиту на 20% и восстанавливает здоровье.
   * @throws {Error} Если персонаж мёртв (health = 0).
   */
  levelUp() {
    if (this.health === 0) {
      throw new Error("нельзя повысить левел умершего");
    }
    this.level += 1;
    this.attack = +(this.attack * 1.2).toFixed(1);
    this.defence = +(this.defence * 1.2).toFixed(1);
    this.health = 100;
  }

  /**
   * Наносит урон персонажу, уменьшая здоровье с учётом защиты.
   * @param {number} points - Урон, который наносится персонажу.
   */
  damage(points) {
    if (this.health === 0) return;
    const damagePoints = points * (1 - this.defence / 100);
    this.health -= damagePoints;
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

export { Characters };
