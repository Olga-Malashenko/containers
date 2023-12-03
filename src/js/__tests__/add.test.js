import Team from '../app';

test('Should add personage', () => {
  const team = new Team();
  const personage = 'Ded Moroz';
  team.add(personage);
  const result = team.members.has(personage);
  expect(result).toBeTruthy();
});

test('Should be trown error', () => {
  expect(() => {
    const team = new Team();
    const personage = 'Snegurochka';
    team.add(personage);
    team.add(personage);
  }).toThrow('Этот персонаж уже в команде');
});
