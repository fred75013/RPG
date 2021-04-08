class Turn {
  constructor(characters) {
    this.characters = characters;
    this.characters.forEach((currentPlayer) => {
      if (currentPlayer.status !== "loser") {
        this.startTurn(currentPlayer);
        this.choiceAttack(currentPlayer);
      }
    });
  }
  startTurn(currentPlayer) {
    console.log(`A toi de jouer ====> ${currentPlayer.name}`);
  }
  choiceAttack(currentPlayer) {
    const victime = prompt(
      `Qui souhaites tu attaquer : \n - Grace (fighter) : 0 \n - Ulder (paladin) : 1 \n - Maana (monk) : 2 \n - Draven (bezerker) : 3 \n - Carl (assassin) : 4 \n - Sorcier (wizard) : 5 \n - Fred (archer) : 6 \n - VOIR STAT : 7 `
    );
    switch (victime) {
      case "0":
        if (fighter.status === "loser") {
          console.log(
            `Tu es déguelasse d'attaqué un mort, choisi quelqu'un d'autre`
          );
          this.choiceAttack(currentPlayer);
        } else if (fighter.name === currentPlayer.name) {
          console.log(`Bien tenter, mais tu ne peux pas t'attaquer toi meme `);
          this.choiceAttack(currentPlayer);
        } else {
          console.log(`tu as choisi d'attaquer ${fighter.name}`);
          const attackGrace = prompt(
            "Quelle attaque veux tu utiliser : \n - normal : =>a<= \n - attaque speciale =>b<= "
          );
          switch (attackGrace) {
            case "a":
              currentPlayer.dealDamage(fighter);
              break;
            case "b":
              currentPlayer.specialAttack(fighter);
              break;
            default:
              console.log(
                "Tu as voulu m'avoir, par defaut, tu lances donc ton attaque special par defaut et gache du mana en concequence "
              );
              currentPlayer.specialAttack(fighter);
              break;
          }
        }
        break;

      case "1":
        if (paladin.status === "loser") {
          console.log(
            `Tu es déguelasse d'attaqué un mort, choisi quelqu'un d'autre`
          );
          this.choiceAttack(currentPlayer);
        } else if (paladin.name === currentPlayer.name) {
          console.log(`Bien tenter, mais tu ne peux pas t'attaquer toi meme `);
          this.choiceAttack(currentPlayer);
        } else {
          console.log(`tu as choisi d'attaquer ${paladin.name}`);
          const attackUlder = prompt(
            "Quelle attaque veux tu utiliser : \n - normal : =>a<= \n - attaque speciale =>b<= "
          );
          switch (attackUlder) {
            case "a":
              currentPlayer.dealDamage(paladin);
              break;
            case "b":
              currentPlayer.specialAttack(paladin);
              break;
            default:
              console.log(
                "Tu as voulu m'avoir, par defaut, tu lances donc ton attaque special par defaut et gache du mana en concequence "
              );
              currentPlayer.specialAttack(paladin);
              break;
          }
        }
        break;
      case "2":
        if (monk.status === "loser") {
          console.log(
            `Tu es déguelasse d'attaqué un mort, choisi quelqu'un d'autre`
          );
          this.choiceAttack(currentPlayer);
        } else if (monk.name === currentPlayer.name) {
          console.log(`Bien tenter, mais tu ne peux pas t'attaquer toi meme `);
          this.choiceAttack(currentPlayer);
        } else {
          console.log(`tu as choisi d'attaquer ${monk.name}`);
          const attackMaana = prompt(
            "Quelle attaque veux tu utiliser : \n - normal : =>a<= \n - attaque speciale =>b<= "
          );
          switch (attackMaana) {
            case "a":
              currentPlayer.dealDamage(monk);
              break;
            case "b":
              currentPlayer.specialAttack(monk);
              break;
            default:
              console.log(
                "Tu as voulu m'avoir, par defaut, tu lances donc ton attaque special par defaut et gache du mana en concequence "
              );
              currentPlayer.specialAttack(monk);
              break;
          }
        }
        break;

      case "3":
        if (berzerker.status === "loser") {
          console.log(
            `Tu es déguelasse d'attaqué un mort, choisi quelqu'un d'autre`
          );
          this.choiceAttack(currentPlayer);
        } else if (berzerker.name === currentPlayer.name) {
          console.log(`Bien tenter, mais tu ne peux pas t'attaquer toi meme `);
          this.choiceAttack(currentPlayer);
        } else {
          console.log(`tu as choisi d'attaquer ${berzerker.name}`);
          const attackDraven = prompt(
            "Quelle attaque veux tu utiliser : \n - normal : =>a<= \n - attaque speciale =>b<= "
          );
          switch (attackDraven) {
            case "a":
              currentPlayer.dealDamage(berzerker);
              break;
            case "b":
              currentPlayer.specialAttack(berzerker);
              break;
            default:
              console.log(
                "Tu as voulu m'avoir, par defaut, tu lances donc ton attaque special par defaut et gache du mana en concequence "
              );
              currentPlayer.specialAttack(berzerker);
              break;
          }
        }
        break;

      case "4":
        if (assassin.status === "loser") {
          console.log(
            `Tu es déguelasse d'attaqué un mort, choisi quelqu'un d'autre`
          );
          this.choiceAttack(currentPlayer);
        } else if (assassin.name === currentPlayer.name) {
          console.log(`Bien tenter, mais tu ne peux pas t'attaquer toi meme `);
          this.choiceAttack(currentPlayer);
        } else {
          console.log(`tu as choisi d'attaquer ${assassin.name}`);
          const attackCarl = prompt(
            "Quelle attaque veux tu utiliser : \n - normal : =>a<= \n - attaque speciale =>b<= "
          );
          switch (attackCarl) {
            case "a":
              currentPlayer.dealDamage(assassin);
              break;
            case "b":
              currentPlayer.specialAttack(assassin);
              break;
            default:
              console.log(
                "Tu as voulu m'avoir, par defaut, tu lances donc ton attaque special par defaut et gache du mana en concequence "
              );
              currentPlayer.specialAttack(assassin);
              break;
          }
        }
        break;

      case "5":
        if (wizard.status === "loser") {
          console.log(
            `Tu es déguelasse d'attaqué un mort, choisi quelqu'un d'autre`
          );
          this.choiceAttack(currentPlayer);
        } else if (wizard.name === currentPlayer.name) {
          console.log(`Bien tenter, mais tu ne peux pas t'attaquer toi meme `);
          this.choiceAttack(currentPlayer);
        } else {
          console.log(`tu as choisi d'attaquer ${wizard.name}`);
          const attackSorcier = prompt(
            "Quelle attaque veux tu utiliser : \n - normal : =>a<= \n - attaque speciale =>b<= "
          );
          switch (attackSorcier) {
            case "a":
              currentPlayer.dealDamage(wizard);
              break;
            case "b":
              currentPlayer.specialAttack(wizard);
              break;
            default:
              console.log(
                "Tu as voulu m'avoir, par defaut, tu lances donc ton attaque special par defaut et gache du mana en concequence "
              );
              currentPlayer.specialAttack(wizard);
              break;
          }
        }
        break;

      case "6":
        if (archer.status === "loser") {
          console.log(
            `Tu es déguelasse d'attaqué un mort, choisi quelqu'un d'autre`
          );
          this.choiceAttack(currentPlayer);
        } else if (archer.name === currentPlayer.name) {
          console.log(`Bien tenter, mais tu ne peux pas t'attaquer toi meme `);
          this.choiceAttack(currentPlayer);
        } else {
          console.log(`tu as choisi d'attaquer ${archer.name}`);
          const attackFred = prompt(
            "Quelle attaque veux tu utiliser : =>a<= pour l'attaque normal ou =>b<= pour l'attaque speciale"
          );
          switch (attackFred) {
            case "a":
              currentPlayer.dealDamage(archer);
              break;
            case "b":
              currentPlayer.specialAttack(archer);
              break;
            default:
              console.log(
                "Tu as voulu m'avoir, par defaut, tu lances donc ton attaque special par defaut et gache du mana en concequence "
              );
              currentPlayer.specialAttack(archer);
              break;
          }
        }
        break;
      case "7":
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

        this.choiceAttack(currentPlayer);
        break;
      default:
        console.log("💀 💀 💀 💀 💀 💀 💀 💀 💀 💀 💀 💀");
        console.log(
          "Je n'ai pas compris ta reponse, tu as voulu me pièger, tu passes donc ton tour et donc tu perds autant de point de vie que tu n'as d'attaque !"
        );
        currentPlayer.dealDamage(currentPlayer);
        break;
    }
  }
}
