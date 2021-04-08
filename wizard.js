class Wizard extends Character {
  constructor(
    hp = 10,
    dmg = 2,
    mana = 200,
    name = "Sorcier",
    status = "Playing"
  ) {
    super(hp, dmg, mana, name, status);
  }

  specialAttack(victim) {
    if (this.mana >= 25) {
      this.mana -= 25;
      console.log(
        `${this.name} utilise l'attaque Fireball sur ${victim.name}. ${victim.name} perd 7pts de vie !  Il dispose maintenant de ${this.mana} mana.`
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
const wizard = new Wizard();
