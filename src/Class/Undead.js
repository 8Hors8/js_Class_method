import { Characters } from "./Characters.js";

/**
 * Класс нежити (Undead).
 */
class Undead extends Characters {
  /**
   * Создаёт экземпляр нежити.
   * @param {string} name - Имя персонажа.
   */
  constructor(name) {
    super(name, "Undead");
    this.attack = 25;
    this.defence = 25;
  }
}

export { Undead };
