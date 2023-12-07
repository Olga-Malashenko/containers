import Settings from '../app';

test.each([
  ['impossible option', 'screensaver', 'apple', 'Настройка данной опции невозможна'],
  ['invalid theme', 'theme', 'gold', 'Недопустимый вариант темы'],
  ['invalid music', 'music', 'opera', 'Недопустимый вариант музыки'],
  ['invalid difficulty', 'difficulty', 'normally', 'Недопустимый уровень сложности'],
])('Should be trown error about %s', (_, key, value, message) => {
  expect(() => {
    const testSettings = new Settings();
    testSettings.setUserSettings(key, value);
  }).toThrow(message);
});
