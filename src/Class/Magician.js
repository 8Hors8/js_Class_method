import { Characters } from "./Characters.js";
/**
 * Класс мага (Magician).
 */
class Magician extends Characters {
  /**
   * Создаёт экземпляр мага.
   * @param {string} name - Имя персонажа.
   */
  constructor(name) {
    super(name, "Magician");
    this.attack = 10;
    this.defence = 40;
  }
}

export { Magician };
