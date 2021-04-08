class Character {
  constructor(hp, dmg, mana, name, status) {
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.name = name;
    this.status = status;
  }

  takeDamage = (dmg) => {
    this.hp -= dmg;
    console.log(`${this.name} à desormais ${this.hp} points de vie`);
    if (this.hp <= 0) {
      this.status = "loser";
      this.hp = 0;
    }
    console.log("==========================================");
  };

  dealDamage = (victim) => {
    console.log(
      `${this.name} inflige ${this.dmg} points de degats avec son attaque de base`
    );
    return victim.takeDamage(this.dmg);
  };
}
