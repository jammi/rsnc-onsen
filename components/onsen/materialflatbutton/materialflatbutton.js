const OnsenButton = require('onsen/button');

class OnsenMaterialFlatButton extends OnsenButton {
  get componentName() {
    return 'materialflatbutton';
  }
  get componentClassNames() {
    return ['button', 'button--material--flat'];
  }
}

module.exports = OnsenMaterialFlatButton;
