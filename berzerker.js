class Berzerker extends Character {
  constructor(hp = 8, dmg = 4, mana = 0, name = "Draven", status = "Playing") {
    super(hp, dmg, mana, name, status);
  }
  specialAttack(victim) {
    this.dmg += 1;
    this.hp -= 1;
    console.log(
      `${this.name} utilise l'attaque Rage. A présent, ses attaques risquent de picôter de ${this.dmg} points. Il dispose maintenant de ${this.mana} mana.`
    );
    return victim.takeDamage(this.dmg);
  }
}
const berzerker = new Berzerker();
