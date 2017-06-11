const OnsenCheckbox = require('onsen/checkbox');

class OnsenRadioButton extends OnsenCheckbox {
  get componentName() {
    return 'radiobutton';
  }
  get componentClassNames() {
    return ['radio-button'];
  }
}

module.exports = OnsenRadioButton;
