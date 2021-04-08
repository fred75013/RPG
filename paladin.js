class Paladin extends Character {
  constructor(
    hp = 16,
    dmg = 3,
    mana = 160,
    name = "Ulder",
    status = "Playing"
  ) {
    super(hp, dmg, mana, name, status);
  }
  specialAttack(victim) {
    if (this.mana >= 40) {
      this.mana -= 40;
      this.hp += 5;
      console.log(
        `${this.name} utilise l'attaque Healing Lighting sur ${victim.name}. ${victim.name} perd 4 pts de vie ! Il dispose maintenant de ${this.mana} mana.`
      );
      return victim.takeDamage(4);
    } else {
      console.log(
        "Vous n'avez plus assez de mana pour faire ça, déso mais ça part en attaque de BASE"
      );
      return victim.takeDamage(this.dmg);
    }
  }
}
const paladin = new Paladin();
