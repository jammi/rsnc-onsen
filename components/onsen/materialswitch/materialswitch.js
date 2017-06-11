const OnsenSwitch = require('onsen/switch');

class OnsenMaterialSwitch extends OnsenSwitch {
  get componentName() {
    return 'materialswitch';
  }
  get componentClassNames() {
    return ['switch', 'switch--material'];
  }
  get optimalSize() {
    return [36, 24];
  }
}

module.exports = OnsenMaterialSwitch;
