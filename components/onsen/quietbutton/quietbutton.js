const OnsenButton = require('onsen/button');

class OnsenQuietButton extends OnsenButton {
  get componentName() {
    return 'quietbutton';
  }
  get componentClassNames() {
    return ['button--quiet'];
  }
}

module.exports = OnsenQuietButton;
