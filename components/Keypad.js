const React = require('react');


class Keypad extends React.Component {

  constructor() {
    super();

    this.passwordSubmit = this.passwordSubmit.bind(this);
  }


  passwordSubmit() {
    console.log("Entering password...");
  }

  render() {
    return(<input type="password" onKeyUp={this.passwordSubmit}/>);
  }
}

module.exports = Keypad;
