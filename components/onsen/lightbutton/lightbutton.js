const OnsenButton = require('onsen/button');

class OnsenLightButton extends OnsenButton {
  get componentName() {
    return 'lightbutton';
  }
  get componentClassNames() {
    return ['button', 'button--light'];
  }
}

module.exports = OnsenLightButton;
