class Monk extends Character {
  constructor(hp = 8, dmg = 2, mana = 200, name = "Maana", status = "Playing") {
    super(hp, dmg, mana, name, status);
  }
  specialAttack(victim) {
    if (this.mana >= 25) {
      this.mana -= 25;
      this.hp += 8;
      console.log(
        `${this.name} a utilisé son attaque spéciale. Grâce à ce soin de q-u-a-l-i-t-é il a gagné 8pts de vie.  Il dispose maintenant de ${this.mana} mana.`
      );
      return victim.takeDamage(this.dmg);
    } else {
      console.log(
        "Vous n'avez plus assez de mana pour faire ça, déso mais ça part en attaque de BASE"
      );
      return victim.takeDamage(this.dmg);
    }
  }
}
const monk = new Monk();
