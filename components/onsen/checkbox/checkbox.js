const ELEM = require('core/elem');
const {OnsenToggle} = require('onsen/base');

class OnsenCheckbox extends OnsenToggle {
  get componentName() {
    return 'checkbox';
  }
  get cellTagName() {
    return 'label';
  }
  optimizeWidth() {
    this.resizeTo(this.labelWidth);
  }
  get labelWidth() {
    const elemId = this.markupElemIds ?
      this._getMarkupElemIdPart('label') :
      this.elemId;
    const textWidth = this.stringWidth(this.label, null, elemId);
    const paddingLeft = this.markupElemIds ?
      ELEM.getSize(
        this._getMarkupElemIdPart('state')
      )[0] + 4 : 28;
    return 28 + textWidth;
  }
  get optimalSize() {
    const strWidth = this.labelWidth;
    return [strWidth, 24];
  }
  click() {
    super.click();
    return false;
  }
}

module.exports = OnsenCheckbox;
