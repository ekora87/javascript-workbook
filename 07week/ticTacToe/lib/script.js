'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);

    this.board = {
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null
    };

    this.state = {
      playerTurn: 'X'
    };
    this.makeMove = this.makeMove.bind(this);
    this.checkForWin = this.checkForWin.bind(this);
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement('div', { 'data-cell': '0', ref: 'cell', onClick: this.makeMove }),
        React.createElement('div', { 'data-cell': '1', ref: 'cell', onClick: this.makeMove }),
        React.createElement('div', { 'data-cell': '2', ref: 'cell', onClick: this.makeMove })
      ),
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement('div', { 'data-cell': '3', ref: 'cell', onClick: this.makeMove }),
        React.createElement('div', { 'data-cell': '4', ref: 'cell', onClick: this.makeMove }),
        React.createElement('div', { 'data-cell': '5', ref: 'cell', onClick: this.makeMove })
      ),
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement('div', { 'data-cell': '6', ref: 'cell', onClick: this.makeMove }),
        React.createElement('div', { 'data-cell': '7', ref: 'cell', onClick: this.makeMove }),
        React.createElement('div', { 'data-cell': '8', ref: 'cell', onClick: this.makeMove })
      )
    );
  }

  makeMove(e) {
    e.target.innerHTML = this.state.playerTurn;
    const val = e.target.getAttribute('data-cell');
    this.board[val] = this.state.playerTurn;
    this.checkForWin();
    this.setState(oldState => {
      return oldState.playerTurn = oldState.playerTurn === 'X' ? 'O' : 'X';
    });
  }

  checkForWin() {
    let winCombo = [['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'], ['0', '3', '6'], ['1', '4', '7'], ['2', '5', '8'], ['0', '4', '8'], ['2', '4', '6']];
    for (let i = 0; i < winCombo.length; i++) {
      if (this.board[winCombo[i][0]] === this.state.playerTurn && this.board[winCombo[i][1]] === this.state.playerTurn && this.board[winCombo[i][2]] === this.state.playerTurn) {
        setTimeout(function () {
          alert("You Won");
        }, 300);
      }
    }
  }
}

ReactDOM.render(React.createElement(TicTacToe, null), document.getElementById('container'));