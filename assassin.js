class Assassin extends Character {
  constructor(hp = 6, dmg = 6, mana = 20, name = "Carl", status = "Playing") {
    super(hp, dmg, mana, name, status);
  }

  specialAttack(victim) {
    if (this.mana >= 20) {
      this.mana -= 20;
      console.log(
        `${this.name} utilise l'attaque Shadow hit sur ${victim.name}. ${victim.name} perd 7pts de vie ! Il dispose maintenant de ${this.mana} mana.`
      );
      return victim.takeDamage(7);
    } else {
      console.log(
        "Vous n'avez plus assez de mana pour faire ça, déso mais ça part en attaque de BASE"
      );
      return victim.takeDamage(this.dmg);
    }
  }
}

const assassin = new Assassin();
