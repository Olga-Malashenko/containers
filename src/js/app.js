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
      } else if (key === 'theme') {
        if (!this.themes.includes(value)) {
          throw new Error('Недопустимый вариант темы');
        }
      } else if (key === 'music') {
        if (!this.music.includes(value)) {
          throw new Error('Недопустимый вариант музыки');
        }
      } else {
        if (!this.difficulty.includes(value)) {
          throw new Error('Недопустимый уровень сложности');
        }
      }

      this.userSettings.set(key, value);
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }

  /*  getUserSettings() {
    return this.userSettings;
  } */

  setFinalSettings() {
    this.finalSettings = new Map([...this.defaultSettings, ...this.userSettings]);
  }

  /* getFinalSettings() {
    return this.finalSettings;
  } */
}
