class Fighter extends Character {
  constructor(hp = 12, dmg = 4, mana = 40, name = "Grace", status = "Playing") {
    super(hp, dmg, mana, name, status);
  }

  specialAttack(victim) {
    if (this.mana >= 20) {
      this.mana -= 20;
      console.log(
        `${this.name} utilise l'attaque Dark Vision sur ${victim.name}. ${victim.name} perd 5pts de vie ! ${this.name} prendra 2 dégâts de moins par coup reçu!  Il dispose maintenant de ${this.mana} mana.`
      );
      return victim.takeDamage(5);
    } else {
      console.log(
        "Vous n'avez plus assez de mana pour faire ça, déso mais ça part en attaque de BASE"
      );
      return victim.takeDamage(this.dmg);
    }
  }
}
const fighter = new Fighter();
