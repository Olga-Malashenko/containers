import Settings from '../app';

test('Should be final settings without user setting', () => {
  const testSettings = new Settings();
  testSettings.setFinalSettings();
  const resultTheme = testSettings.finalSettings.get('theme');
  const resultMusic = testSettings.finalSettings.get('music');
  const resultDifficulty = testSettings.finalSettings.get('difficulty');
  expect(resultTheme).toEqual('dark');
  expect(resultMusic).toEqual('trance');
  expect(resultDifficulty).toEqual('easy');
});

test.each([
  ['theme', 'gray', 'gray', 'trance', 'easy'],
  ['music', 'rock', 'dark', 'rock', 'easy'],
  ['difficulty', 'normal', 'dark', 'trance', 'normal'],
])('Should be final settings with one user setting: %s', (key, value, theme, music, difficulty) => {
  const testSettings = new Settings();
  testSettings.setUserSettings(key, value);
  testSettings.setFinalSettings();
  const resultTheme = testSettings.finalSettings.get('theme');
  const resultMusic = testSettings.finalSettings.get('music');
  const resultDifficulty = testSettings.finalSettings.get('difficulty');
  expect(resultTheme).toEqual(theme);
  expect(resultMusic).toEqual(music);
  expect(resultDifficulty).toEqual(difficulty);
});

test.each([
  ['theme&music', 'theme', 'gray', 'music', 'rock', 'gray', 'rock', 'easy'],
  ['music&difficulty', 'music', 'rock', 'difficulty', 'hard', 'dark', 'rock', 'hard'],
  ['theme&difficulty', 'theme', 'light', 'difficulty', 'normal', 'light', 'trance', 'normal'],
])('Should be final settings with two user settings: %s', (_, key1, value1, key2, value2, theme, music, difficulty) => {
  const testSettings = new Settings();
  testSettings.setUserSettings(key1, value1);
  testSettings.setUserSettings(key2, value2);
  testSettings.setFinalSettings();
  const resultTheme = testSettings.finalSettings.get('theme');
  const resultMusic = testSettings.finalSettings.get('music');
  const resultDifficulty = testSettings.finalSettings.get('difficulty');
  expect(resultTheme).toEqual(theme);
  expect(resultMusic).toEqual(music);
  expect(resultDifficulty).toEqual(difficulty);
});

test('Should be final settings with all user settings', () => {
  const testSettings = new Settings();
  testSettings.setUserSettings('theme', 'light');
  testSettings.setUserSettings('music', 'off');
  testSettings.setUserSettings('difficulty', 'hard');
  testSettings.setFinalSettings();
  const resultTheme = testSettings.finalSettings.get('theme');
  const resultMusic = testSettings.finalSettings.get('music');
  const resultDifficulty = testSettings.finalSettings.get('difficulty');
  expect(resultTheme).toEqual('light');
  expect(resultMusic).toEqual('off');
  expect(resultDifficulty).toEqual('hard');
});
