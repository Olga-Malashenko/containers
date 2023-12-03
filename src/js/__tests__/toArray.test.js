import Team from '../app';

test('Should be array', () => {
  const team = new Team();
  team.add('Ded Moroz');
  team.add('Snegurochka');
  const result = team.toArray();
  const expected = ['Ded Moroz', 'Snegurochka'];
  expect(result).toEqual(expected);
});
