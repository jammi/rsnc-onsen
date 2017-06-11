const OnsenCheckbox = require('onsen/checkbox');

class OnsenNoborderCheckbox extends OnsenCheckbox {
  get componentName() {
    return 'nobordercheckbox';
  }
  get componentClassNames() {
    return ['checkbox--noborder'];
  }
}

module.exports = OnsenNoborderCheckbox;
