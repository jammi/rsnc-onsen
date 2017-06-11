const OnsenButton = require('onsen/button');

class OnsenOutlineButton extends OnsenButton {
  get componentName() {
    return 'outlinebutton';
  }
  get componentClassNames() {
    return ['button', 'button--outline'];
  }
}

module.exports = OnsenOutlineButton;
