const validTypes = [
  "Bowman",
  "Swordsman",
  "Magician",
  "Daemon",
  "Undead",
  "Zombie",
];

class Characters {
  constructor(name, type, attack, defence) {
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
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error("нельзя повысить левел умершего");
    }
    this.level += 1;
    this.attack = +(this.attack * 1.2).toFixed(1);
    this.defence = +(this.defence * 1.2).toFixed(1);
    this.health = 100;
  }

  damage(points) {
    if (this.health === 0) return;
    const damagePoints = points * (1 - this.defence / 100);
    this.health -= damagePoints;
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

class Bowman extends Characters {
  constructor(name) {
    super(name, "Bowman", 25, 25);
  }
}

class Swordsman extends Characters {
  constructor(name) {
    super(name, "Swordsman", 40, 10);
  }
}

class Magician extends Characters {
  constructor(name) {
    super(name, "Magician", 10, 40);
  }
}

class Daemon extends Characters {
  constructor(name) {
    super(name, "Daemon", 10, 40);
  }
}

class Zombie extends Characters {
  constructor(name) {
    super(name, "Zombie", 40, 10);
  }
}

class Undead extends Characters {
  constructor(name) {
    super(name, "Undead", 25, 25);
  }
}

const archer = new Bowman("Legolas");
const warrior = new Swordsman("Arthur");
const mage = new Magician("Merlin");
const demon = new Daemon("Azazel");
const zombie = new Zombie("Rotten");
const undead = new Undead("Dracula");

console.log(archer);
console.log(warrior);
console.log(mage);
console.log(demon);
console.log(zombie);
console.log(undead);

console.log("До levelUp:", archer);
archer.levelUp();
console.log("После levelUp:", archer);

archer.damage(50);
console.log("После damage(50):", archer);

archer.damage(200); // должна уменьшить здоровье до 0, но не ниже
console.log("После damage(200):", archer);

// Проверка ошибки при levelUp у мёртвого персонажа
archer.health = 0;
try {
  archer.levelUp();
} catch (e) {
  console.log("Ошибка при levelUp у умершего:", e.message);
}

export { Characters, Bowman, Swordsman, Magician, Daemon, Zombie, Undead };
