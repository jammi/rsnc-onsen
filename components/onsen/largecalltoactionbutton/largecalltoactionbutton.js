const OnsenButton = require('onsen/button');

class OnsenLargeCallToActionButton extends OnsenButton {
  get componentName() {
    return 'largecalltoactionbutton';
  }
  get componentClassNames() {
    return ['button--large--cta'];
  }
}

module.exports = OnsenLargeCallToActionButton;
