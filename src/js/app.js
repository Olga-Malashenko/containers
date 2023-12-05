export default class Settings {
  constructor() {
    this.settingOptions = ['theme', 'music', 'difficulty'];
    this.themes = ['dark', 'light', 'gray'];
    this.music = ['trance', 'pop', 'rock', 'chillout', 'off'];
    this.difficulty = ['easy', 'normal', 'hard', 'nightmare'];

    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.userSettings = new Map();
  }

  setUserSettings(key, value) {
    try {
      if (!this.settingOptions.includes(key)) {
        throw new Error('Настройка данной опции невозможна');
      }
      if (key === 'theme') {
        if (!this.themes.includes(value)) {
          throw new Error('Недопустимый вариант темы');
        }
      }
      if (key === 'music') {
        if (!this.music.includes(value)) {
          throw new Error('Недопустимый вариант музыки');
        }
      }
      if (key === 'difficulty') {
        if (!this.difficulty.includes(value)) {
          throw new Error('Недопустимый уровень сложности');
        }
      }
      
      this.userSettings.set(key, value);
      console.log(this.userSettings);
      console.log('user');
    }catch (error) {
      console.log(error.message);
    }
  }

  getUserSettings() {
    return this.userSettings;
  }

  setFinalSettings() {
    this.finalSettings = new Map([...this.defaultSettings, ...this.userSettings]);
    console.log(this.finalSettings);
    console.log('after 2 in 1');
  }

  getFinalSettings() {
    return this.finalSettings;
  }

}

// ниже код для проверки в консоли

const settingsA = new Settings();

settingsA.setUserSettings('theme', 'gold'); // screensaver gray
settingsA.setUserSettings('music', 'rock'); // musica opera
settingsA.setUserSettings('difficulty', 'normal'); // normally

settingsA.setFinalSettings();
const final = settingsA.getFinalSettings();
