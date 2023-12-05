import Settings from '../app';

test.each([
  ['default'],
  ['mixed1',{difficulty: 'normal' }, { theme: 'dark', music: 'trance', difficulty: 'normal' }],
  ['mixed2'],
  ['custom'],
  ['impossible option'],
  ['invalid theme'],
  ['invalid music'],
  ['invalid difficulty'],
])('Testing function setFinalSettings whith %s settings', (_, map, expected) => {
  const testSettings = new Settings();
  testSettings.userSettings = map;
  const result = testSettings.setFinalSettings();
  expect(result).toEquel(expected);
});
