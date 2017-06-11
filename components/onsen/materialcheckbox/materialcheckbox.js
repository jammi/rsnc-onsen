const OnsenCheckbox = require('onsen/checkbox');

class OnsenMaterialCheckbox extends OnsenCheckbox {
  get componentName() {
    return 'materialcheckbox';
  }
  get componentClassNames() {
    return ['checkbox checkbox--material'];
  }
}

module.exports = OnsenMaterialCheckbox;
