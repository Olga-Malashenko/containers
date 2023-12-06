import Team from '../app';

test('Should add all personages', () => {
  const team = new Team();
  const personages = ['Ivan', 'Irina', 'Inna'];
  team.addAll(personages);
  const expected = ['Ivan', 'Irina', 'Inna'];
  expect(team.toArray()).toEqual(expected);
});

test('Not should be doubling', () => {
  const team = new Team();
  const personages = ['Ivan', 'Irina', 'Ivan', 'Inna'];
  team.addAll(personages);
  const expected = ['Ivan', 'Irina', 'Inna'];
  expect(team.toArray()).toEqual(expected);
});
