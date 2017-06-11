const HControl = require('foundation/control');

class OnsenBase extends HControl {

  get defaultEvents() {
    return {click: true};
  }

  click() {
    this.setValue(!this.value);
  }

  setEnabledStyle(state) {
    super.setEnabledStyle(state);
    if (state) {
      this.unsetAttrOfPart('control', 'disabled');
    }
    else {
      this.setAttrOfPart('control', 'disabled', ' ', true);
    }
  }

  refreshValue() {
    super.refreshValue();
    if (this.value) {
      this.setAttrOfPart('control', 'checked', ' ', true);
    }
    else {
      this.unsetAttrOfPart('control', 'checked');
    }
  }
}

module.exports = OnsenBase;
