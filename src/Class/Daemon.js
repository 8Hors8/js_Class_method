import { Characters } from "./Characters.js";

/**
 * Класс демона (Daemon).
 */
class Daemon extends Characters {
  /**
   * Создаёт экземпляр демона.
   * @param {string} name - Имя персонажа.
   */
  constructor(name) {
    super(name, "Daemon");
    this.attack = 10;
    this.defence = 40;
  }
}

export { Daemon };
