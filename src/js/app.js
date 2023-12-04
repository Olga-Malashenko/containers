export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(personage) {
    if (this.members.has(personage)) {
      throw new Error('Этот персонаж уже в команде');
    }
    this.members.add(personage);
  }

  addAll(personages) {
    [...personages].forEach((personage) => {
      this.members.add(personage);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}

const team = new Team();

team.addAll(['Ivan', 'Irina', 'Inna', 'Ivan']);
console.log(team.members);

/* let personage = "Ded Moroz";

team.add(personage);
console.log(team.members);

personage = 'Snegurochka';
team.add(personage);
console.log(team.members);
personage = 3;
team.add(personage);
console.log(team.members); */
