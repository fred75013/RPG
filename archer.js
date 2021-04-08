class Archer extends Character {
  constructor(hp = 10, dmg = 5, mana = 40, name = "Fred", status = "Playing") {
    super(hp, dmg, mana, name, status);
  }

  specialAttack(victim) {
    if (this.mana >= 40) {
      this.mana -= 40;
      console.log(
        `${this.name} utilise l'attaque de la Lance Etincellante ce qui multiplie son attaque par 4. ${victim.name} perd 20 pts de vie ! Il dispose maintenant de ${this.mana} mana.`
      );
      return victim.takeDamage(20);
    } else {
      console.log(
        "Vous n'avez plus assez de mana pour faire ça, déso mais ça part en attaque de BASE"
      );
      return victim.takeDamage(this.dmg);
    }
  }
}
const archer = new Archer();
