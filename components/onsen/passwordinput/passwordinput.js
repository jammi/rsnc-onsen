const OnsenTextInput = require('onsen/textinput');

class OnsenUnderBarTextInput extends OnsenTextInput {
  get cellTagAttrs() {
    return {type: 'password'};
  }
}

module.exports = OnsenUnderBarTextInput;
