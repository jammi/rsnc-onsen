const {OnsenToggle} = require('onsen/base');

// This component is designed for a fixed size of 51x32px
class OnsenSwitch extends OnsenToggle {
  get componentName() {
    return 'switch';
  }
  get cellTagName() {
    return 'label';
  }
  get optimalSize() {
    return [51, 32];
  }
}

module.exports = OnsenSwitch;
