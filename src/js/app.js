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
