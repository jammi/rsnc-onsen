const {OnsenBase} = require('onsen/base');

class OnsenButton extends OnsenBase {

  get defaultEvents() {
    return {click: true};
  }

  get componentName() {
    return 'button';
  }

  get cellTagName() {
    return 'button';
  }

  get markupElemIds() {
    return {
      label: this.elemId
    };
  }

  set markupElemIds(obj) {}

  setEnabledStyle(state) {
    super.setEnabledStyle(state);
    if (state) {
      this.unsetAttr('disabled');
    }
    else {
      this.setAttr('disabled', ' ');
    }
  }

  optimizeWidth() {
    this.resizeTo(this.labelWidth);
  }

  get labelWidth() {
    const elemId = this.markupElemIds ?
      this._getMarkupElemIdPart('label') :
      this.elemId;
    const textWidth = this.stringWidth(this.label, null, elemId);
    return textWidth + 4;
  }

  get optimalSize() {
    return [this.labelWidth, 46];
  }
}

module.exports = OnsenButton;
