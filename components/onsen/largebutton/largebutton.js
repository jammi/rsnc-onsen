const OnsenButton = require('onsen/button');

class OnsenLargeButton extends OnsenButton {
  get componentName() {
    return 'largebutton';
  }
  get componentClassNames() {
    return ['button', 'button--large'];
  }
}

module.exports = OnsenLargeButton;
