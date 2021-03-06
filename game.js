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
      `ð½ - ${fighter.name} : ${fighter.hp} â¤ï¸ - ${fighter.mana} ð¥ - ${fighter.dmg} âï¸`
    );
    console.log(
      `ð» - ${paladin.name} : ${paladin.hp} â¤ï¸ - ${paladin.mana} ð¥ - ${paladin.dmg} âï¸`
    );
    console.log(
      `ð¾ - ${assassin.name} : ${assassin.hp} â¤ï¸ - ${assassin.mana} ð¥ - ${assassin.dmg} âï¸`
    );
    console.log(
      `ðº - ${monk.name} : ${monk.hp} â¤ï¸ - ${monk.mana} ð¥ - ${monk.dmg} âï¸`
    );
    console.log(
      `ð¹ - ${berzerker.name} : ${berzerker.hp} â¤ï¸ - ${berzerker.mana} ð¥ - ${berzerker.dmg} âï¸`
    );
    console.log(
      `ð¤¡ - ${wizard.name} : ${wizard.hp} â¤ï¸ - ${wizard.mana} ð¥ - ${wizard.dmg} âï¸`
    );
    console.log(
      `ð¤ - ${archer.name} : ${archer.hp} â¤ï¸ - ${archer.mana} ð¥ - ${archer.dmg} âï¸`
    );

    console.log(
      `Nos ${this.characters.length} combattants sont prÃªts Ã  en dÃ©coudre !`
    );

    console.log("==========================================");
  }
  newTurn = () => {
    while (this.turnLeft > 0) {
      console.log(`Tour nÂ°${this.turnLeft}`);
      console.log("==========================================");
      let turn = new Turn(this.characters);
      this.turnLeft -= 1;
      console.log("==========================================");
      console.log("==================SCORE===================");
      console.log(
        `ð½ - ${fighter.name} : ${fighter.hp} â¤ï¸ - ${fighter.mana} ð¥ - ${fighter.dmg} âï¸`
      );
      console.log(
        `ð» - ${paladin.name} : ${paladin.hp} â¤ï¸ - ${paladin.mana} ð¥ - ${paladin.dmg} âï¸`
      );
      console.log(
        `ð¾ - ${assassin.name} : ${assassin.hp} â¤ï¸ - ${assassin.mana} ð¥ - ${assassin.dmg} âï¸`
      );
      console.log(
        `ðº - ${monk.name} : ${monk.hp} â¤ï¸ - ${monk.mana} ð¥ - ${monk.dmg} âï¸`
      );
      console.log(
        `ð¹ - ${berzerker.name} : ${berzerker.hp} â¤ï¸ - ${berzerker.mana} ð¥ - ${berzerker.dmg} âï¸`
      );
      console.log(
        `ð¤¡ - ${wizard.name} : ${wizard.hp} â¤ï¸ - ${wizard.mana} ð¥ - ${wizard.dmg} âï¸`
      );
      console.log(
        `ð¤ - ${archer.name} : ${archer.hp} â¤ï¸ - ${archer.mana} ð¥ - ${archer.dmg} âï¸`
      );
      this.characters.forEach((s) => {
        if (s.status === "loser") {
          console.log(`Le joueur : ${s.name} est mort`);
        }
      });
    }

    console.log("La partie est terminÃ©e !");
    console.log("==================SCORE FINAL===================");
    this.characters.forEach((w) => {
      if (w.status !== "loser") {
        w.status = "Winner";
      }
    });
    console.log(
      `ð½ - ${fighter.name} : ${fighter.hp} â¤ï¸ ======> âï¸âï¸âï¸âï¸${fighter.status} âï¸âï¸âï¸âï¸`
    );
    console.log(
      `ð» - ${paladin.name} : ${paladin.hp} â¤ï¸ ======> âï¸âï¸âï¸âï¸${paladin.status} âï¸âï¸âï¸âï¸`
    );
    console.log(
      `ð¾ - ${assassin.name} : ${assassin.hp} â¤ï¸ ======> âï¸âï¸âï¸âï¸${assassin.status} âï¸âï¸âï¸âï¸`
    );
    console.log(
      `ðº - ${monk.name} : ${monk.hp} â¤ï¸ ======> âï¸âï¸âï¸âï¸${monk.status} âï¸âï¸âï¸âï¸`
    );
    console.log(
      `ð¹ - ${berzerker.name} : ${berzerker.hp} â¤ï¸ ======> âï¸âï¸âï¸âï¸${berzerker.status} âï¸âï¸âï¸âï¸`
    );
    console.log(
      `ð¤¡ - ${wizard.name} : ${wizard.hp} â¤ï¸ ======> âï¸âï¸âï¸âï¸${wizard.status} âï¸âï¸âï¸âï¸`
    );
    console.log(
      `ð¤ - ${archer.name} : ${archer.hp} â¤ï¸ ======> âï¸âï¸âï¸âï¸${archer.status} âï¸âï¸âï¸âï¸`
    );
  };
}

console.log("****ðª*****âï¸******ð¹******ð¡ï¸****âï¸****");
console.log("*âï¸*** Bienvenue sur notre jeu ***ð¹****");
console.log("ð¡ï¸**** Seul le plus fort survivra  ***ð¡ï¸*");
console.log("****ðª*****âï¸******ð¹******ð¡ï¸****âï¸****");
