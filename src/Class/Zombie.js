import { Characters } from "./Characters.js";

/**
 * Класс зомби (Zombie).
 */
class Zombie extends Characters {
  /**
   * Создаёт экземпляр зомби.
   * @param {string} name - Имя персонажа.
   */
  constructor(name) {
    super(name, "Zombie");
    this.attack = 40;
    this.defence = 10;
  }
}

export { Zombie };
