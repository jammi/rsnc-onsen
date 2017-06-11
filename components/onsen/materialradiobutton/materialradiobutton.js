const OnsenRadioButton = require('onsen/radiobutton');

class OnsenMaterialRadioButton extends OnsenRadioButton {
  get componentName() {
    return 'materialradiobutton';
  }
  get componentClassNames() {
    return ['radio-button', 'radio-button--material'];
  }
}

module.exports = OnsenMaterialRadioButton;
