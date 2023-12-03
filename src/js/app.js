export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(personage) {
    if (this.members.has(personage)) {
      throw new Error('Этот персонаж уже в команде');
    } else {
      this.members.add(personage);
    }
  }

  addAll([...personages]) { // ?
    this.members.add(personages);
  }

  toArray() {
    return Array.from(this.members);
  }
}

/* const team = new Team();

team.members.clear();
console.log(team.members.size);

team.addAll(['Ivan', 'Irina', 'Inna', 'Ivan']);
console.log(team.members);
console.log(' after many');

let personage = "Ded Moroz";

team.add(personage);
console.log(team.members);

personage = 'Snegurochka';
team.add(personage);
console.log(team.members);
personage = 3;
team.add(personage);
console.log(team.members);

let x = team.toArray();
console.log(x);

personage = 'Snegurochka';
team.add(personage);
console.log(team.members); */
