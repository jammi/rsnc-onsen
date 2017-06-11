const OnsenButton = require('onsen/button');

class OnsenMaterialButton extends OnsenButton {
  get componentName() {
    return 'materialbutton';
  }
  get componentClassNames() {
    return ['button', 'button--material'];
  }
}

module.exports = OnsenMaterialButton;
