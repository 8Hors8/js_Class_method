import { Characters } from "./Characters.js";

/**
 * Класс лучника (Bowman).
 */
class Bowman extends Characters {
  /**
   * Создаёт экземпляр лучника.
   * @param {string} name - Имя персонажа.
   */
  constructor(name) {
    super(name, "Bowman");
    this.attack = 25;
    this.defence = 25;
  }
}

export { Bowman };
