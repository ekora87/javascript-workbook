'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.holder = '';
    this.val = 0;
    this.compare = 0;
    this.state = {
      clicked: false
    };
    this.moveBlock = this.moveBlock.bind(this);
    this.addBlock = this.addBlock.bind(this);
    this.checkForWin = this.checkForWin.bind(this);
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { 'data-stack': '1', onClick: this.addBlock },
        React.createElement('div', { 'data-block': '100', onClick: this.moveBlock }),
        React.createElement('div', { 'data-block': '75', onClick: this.moveBlock }),
        React.createElement('div', { 'data-block': '50', onClick: this.moveBlock }),
        React.createElement('div', { 'data-block': '25', onClick: this.moveBlock })
      ),
      React.createElement('div', { 'data-stack': '2', onClick: this.addBlock }),
      React.createElement('div', { 'data-stack': '3', ref: 'stack3', onClick: this.addBlock })
    );
  }

  moveBlock(e) {
    const parent = e.target.parentNode;
    if (e.target === parent.children[parent.children.length - 1] && !this.state.clicked) {
      this.holder = e.target;
      this.val = e.target.getAttribute('data-block');
      e.target.remove(e.target);
      this.setState(state => {
        state.clicked = !state.clicked;
      });
    }
  }

  addBlock(e) {
    const child = e.target.children;
    if (child.length !== 0) {
      this.compare = child[child.length - 1].getAttribute('data-block');
    }
    if (this.state.clicked) {
      if (parseInt(this.compare) > parseInt(this.val) || !this.compare) {
        e.target.appendChild(this.holder);
        this.setState(state => {
          state.clicked = !state.clicked;
        });
        this.compare = 0;
      } else {
        alert("You can't click here. Please pick a different stack");
        this.compare = 0;
      }
    }
    this.checkForWin();
  }

  checkForWin() {
    if (this.refs.stack3.children.length === 4) {
      setTimeout(function () {
        alert("You Won");
      }, 300);
    }
  }
}

ReactDOM.render(React.createElement(TowersOfHanoi, null), document.getElementById('towers-of-hanoi'));