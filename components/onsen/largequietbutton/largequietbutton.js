const OnsenButton = require('onsen/button');

class OnsenLargeQuietButton extends OnsenButton {
  get componentName() {
    return 'largequietbutton';
  }
  get componentClassNames() {
    return ['button--large--quiet'];
  }
}

module.exports = OnsenLargeQuietButton;
