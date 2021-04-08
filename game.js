class Game {
  constructor(turnleft) {
    this.turnLeft = turnleft;
    this.characters = [
      fighter,
      paladin,
      monk,
      berzerker,
      assassin,
      wizard,
      archer,
    ];
    this.createCharacters();
    this.newTurn();
  }
  createCharacters() {
    console.log(
      `👽 - ${fighter.name} : ${fighter.hp} ❤️ - ${fighter.mana} 🔥 - ${fighter.dmg} ⚔️`
    );
    console.log(
      `👻 - ${paladin.name} : ${paladin.hp} ❤️ - ${paladin.mana} 🔥 - ${paladin.dmg} ⚔️`
    );
    console.log(
      `👾 - ${assassin.name} : ${assassin.hp} ❤️ - ${assassin.mana} 🔥 - ${assassin.dmg} ⚔️`
    );
    console.log(
      `👺 - ${monk.name} : ${monk.hp} ❤️ - ${monk.mana} 🔥 - ${monk.dmg} ⚔️`
    );
    console.log(
      `👹 - ${berzerker.name} : ${berzerker.hp} ❤️ - ${berzerker.mana} 🔥 - ${berzerker.dmg} ⚔️`
    );
    console.log(
      `🤡 - ${wizard.name} : ${wizard.hp} ❤️ - ${wizard.mana} 🔥 - ${wizard.dmg} ⚔️`
    );
    console.log(
      `🤖 - ${archer.name} : ${archer.hp} ❤️ - ${archer.mana} 🔥 - ${archer.dmg} ⚔️`
    );

    console.log(
      `Nos ${this.characters.length} combattants sont prêts à en découdre !`
    );

    console.log("==========================================");
  }
  newTurn = () => {
    while (this.turnLeft > 0) {
      console.log(`Tour n°${this.turnLeft}`);
      console.log("==========================================");
      let turn = new Turn(this.characters);
      this.turnLeft -= 1;
      console.log("==========================================");
      console.log("==================SCORE===================");
      console.log(
        `👽 - ${fighter.name} : ${fighter.hp} ❤️ - ${fighter.mana} 🔥 - ${fighter.dmg} ⚔️`
      );
      console.log(
        `👻 - ${paladin.name} : ${paladin.hp} ❤️ - ${paladin.mana} 🔥 - ${paladin.dmg} ⚔️`
      );
      console.log(
        `👾 - ${assassin.name} : ${assassin.hp} ❤️ - ${assassin.mana} 🔥 - ${assassin.dmg} ⚔️`
      );
      console.log(
        `👺 - ${monk.name} : ${monk.hp} ❤️ - ${monk.mana} 🔥 - ${monk.dmg} ⚔️`
      );
      console.log(
        `👹 - ${berzerker.name} : ${berzerker.hp} ❤️ - ${berzerker.mana} 🔥 - ${berzerker.dmg} ⚔️`
      );
      console.log(
        `🤡 - ${wizard.name} : ${wizard.hp} ❤️ - ${wizard.mana} 🔥 - ${wizard.dmg} ⚔️`
      );
      console.log(
        `🤖 - ${archer.name} : ${archer.hp} ❤️ - ${archer.mana} 🔥 - ${archer.dmg} ⚔️`
      );
      this.characters.forEach((s) => {
        if (s.status === "loser") {
          console.log(`Le joueur : ${s.name} est mort`);
        }
      });
    }

    console.log("La partie est terminée !");
    console.log("==================SCORE FINAL===================");
    this.characters.forEach((w) => {
      if (w.status !== "loser") {
        w.status = "Winner";
      }
    });
    console.log(
      `👽 - ${fighter.name} : ${fighter.hp} ❤️ ======> ⚔️⚔️⚔️⚔️${fighter.status} ⚔️⚔️⚔️⚔️`
    );
    console.log(
      `👻 - ${paladin.name} : ${paladin.hp} ❤️ ======> ⚔️⚔️⚔️⚔️${paladin.status} ⚔️⚔️⚔️⚔️`
    );
    console.log(
      `👾 - ${assassin.name} : ${assassin.hp} ❤️ ======> ⚔️⚔️⚔️⚔️${assassin.status} ⚔️⚔️⚔️⚔️`
    );
    console.log(
      `👺 - ${monk.name} : ${monk.hp} ❤️ ======> ⚔️⚔️⚔️⚔️${monk.status} ⚔️⚔️⚔️⚔️`
    );
    console.log(
      `👹 - ${berzerker.name} : ${berzerker.hp} ❤️ ======> ⚔️⚔️⚔️⚔️${berzerker.status} ⚔️⚔️⚔️⚔️`
    );
    console.log(
      `🤡 - ${wizard.name} : ${wizard.hp} ❤️ ======> ⚔️⚔️⚔️⚔️${wizard.status} ⚔️⚔️⚔️⚔️`
    );
    console.log(
      `🤖 - ${archer.name} : ${archer.hp} ❤️ ======> ⚔️⚔️⚔️⚔️${archer.status} ⚔️⚔️⚔️⚔️`
    );
  };
}

console.log("****🪓*****⚔️******🏹******🗡️****⚒️****");
console.log("*⚔️*** Bienvenue sur notre jeu ***🏹****");
console.log("🗡️**** Seul le plus fort survivra  ***🗡️*");
console.log("****🪓*****⚔️******🏹******🗡️****⚒️****");
