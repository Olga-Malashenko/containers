export default class Settings {
  constructor() {
    this.settingOptions = ['theme', 'music', 'difficulty'];
    this.themes = ['dark', 'light', 'gray'];
    this.music = ['trance', 'pop', 'rock', 'chillout', 'off'];
    this.difficulty = ['easy', 'normal', 'hard', 'nightmare'];
    
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy']
    ]);

    this.userSettings = new Map();
    //this.finalSettings = new Map();
  }

    setSettings(key, value) {
      if(!this.settingOptions.includes(key)) {
        throw new Error ('Настройка данной опции невозможна');
      }
      if(key === 'theme') {
        if(!this.themes.includes(value)) {
          throw new Error('Недопустимый вариант темы');
        }
      } else if(key === 'music') {
        if(!this.music.includes(value)) {
          throw new Error('Недопустимый вариант музыки');
        }
      } else if(key === 'difficulty') {
        if(!this.difficulty.includes(value)) {
          throw new Error('Недопустимый уровень сложности');
        }
      }
      this.userSettings.set(key, value);
      console.log(this.userSettings);
      console.log(' user');
    }

  getSettings() { // переелать или вообще не нужен?
    return this.userSettings;
  }

  setFinalSettings() {
    this.finalSettings = new Map([...this.defaultSettings, ...this.userSettings]);
  }
  

  /* setFinalSettings() {
    
    this.defaultSettings.forEach(elem => this.finalSettings.set(elem));
    this.userSettings.forEach(elem => this.finalSettings.set(elem));
    
  } */

  getFinalSettings() {
    // геттер, который возвр finallySettings
    console.log(this.defaultSettings);
    console.log( ' def');
    console.log(this.finalSettings);
    console.log(' after 2 in 1');
    return this.finalSettings;
  }
}

const settingsA = new Settings();

try {
  settingsA.setSettings('theme', 'gray'); // screensaver red
  settingsA.setSettings('music', 'rock');  // musica opera
  //settingsA.setSettings('difficulty', 'normal'); // normally
}
catch(error) {
  console.log(error.message);
}
const userSettings = settingsA.getSettings();
console.log(userSettings);
console.log('after viz');

try {
  settingsA.setFinalSettings();
} catch(error) {
  console.log(error.message);
}
const final = settingsA.getFinalSettings();
console.log(final);
