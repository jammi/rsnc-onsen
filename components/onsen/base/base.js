const HControl = require('foundation/control');

class OnsenBase extends HControl {

  // Extend this in components, these all should have
  // some optimal size specified by their css
  get optimalSize() {
    return [200, 32];
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

}

class OnsenToggle extends OnsenBase {

  get defaultEvents() {
    return {click: true};
  }

  click(x, y) {
    this.setValue(!this.value);
    return true;
  }

  refreshValue() {
    if (this.value) {
      this.setAttrOfPart('control', 'checked', ' ');
    }
    else {
      this.unsetAttrOfPart('control', 'checked');
    }
  }
}

module.exports = {
  OnsenBase, OnsenToggle
};
