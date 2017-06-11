const OnsenButton = require('onsen/button');

class OnsenCallToActionButton extends OnsenButton {
  get componentName() {
    return 'calltoactionbutton';
  }
  get componentClassNames() {
    return ['button--cta'];
  }
}

module.exports = OnsenCallToActionButton;
