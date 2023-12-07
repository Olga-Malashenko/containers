import Settings from '../app';

test.each([
  ['theme', 'gray'],
  ['music', 'rock'],
  ['difficulty', 'normal'],
])('Should be user settings with %s', (key, value) => {
  const testSettings = new Settings();
  testSettings.setUserSettings(key, value);
  const result = testSettings.userSettings.get(key);
  expect(result).toEqual(value);
});
