import { Characters } from "./Characters.js";

/**
 * Класс мечника (Swordsman).
 */
class Swordsman extends Characters {
  /**
   * Создаёт экземпляр мечника.
   * @param {string} name - Имя персонажа.
   */
  constructor(name) {
    super(name, "Swordsman");
    this.attack = 40;
    this.defence = 10;
  }
}

export { Swordsman };
