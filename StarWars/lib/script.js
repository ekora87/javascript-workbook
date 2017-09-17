'use strict';

//const React = require('react');
//const ReactDOM = require('react-dom');
//const styles = require('./style.css');

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boolean: false
    };
    this.reveal = this.reveal.bind(this);
    this.num = 0;
    this.character = [];
  }

  render() {
    fetch('https://swapi.co/api/people/').then(response => {
      response.json().then(item => {
        this.character = item.results;
      });
    });

    if (this.state.boolean) {
      this.list = [];
      this.list.push(React.createElement(
        'tr',
        null,
        React.createElement(
          'td',
          null,
          this.character[this.num].name.toUpperCase()
        ),
        React.createElement(
          'td',
          null,
          this.character[this.num].height
        ),
        React.createElement(
          'td',
          null,
          this.character[this.num].mass
        ),
        React.createElement(
          'td',
          null,
          this.character[this.num].hair_color.toUpperCase()
        ),
        React.createElement(
          'td',
          null,
          this.character[this.num].skin_color.toUpperCase()
        ),
        React.createElement(
          'td',
          null,
          this.character[this.num].eye_color.toUpperCase()
        ),
        React.createElement(
          'td',
          null,
          this.character[this.num].birth_year
        ),
        React.createElement(
          'td',
          null,
          this.character[this.num].gender.toUpperCase()
        )
      ));
    }

    return React.createElement(
      'div',
      { className: 'container' },
      React.createElement('img', { className: 'logo', src: 'img/Star-Wars-Logo.png' }),
      React.createElement('br', null),
      React.createElement('img', { value: "Luke Skywalker", className: 'img-circle', onClick: this.reveal, src: 'img/luke.jpg' }),
      React.createElement('img', { value: "C-3PO", className: 'img-circle', onClick: this.reveal, src: 'img/C-3PO.jpg' }),
      React.createElement('img', { value: "R2-D2", className: 'img-circle', onClick: this.reveal, src: 'img/r2d2.jpg' }),
      React.createElement('img', { value: "Darth Vader", className: 'img-circle', onClick: this.reveal, src: 'img/darth-vader.jpg' }),
      React.createElement('img', { value: "Leia Organa", className: 'img-circle', onClick: this.reveal, src: 'img/Leia.jpg' }),
      React.createElement('img', { value: "Owen Lars", className: 'img-circle', onClick: this.reveal, src: 'img/Owen.jpg' }),
      React.createElement('img', { value: "Beru Whitesun lars", className: 'img-circle', onClick: this.reveal, src: 'img/Beru.jpg' }),
      React.createElement('img', { value: "R5-D4", className: 'img-circle', onClick: this.reveal, src: 'img/r5d4.jpg' }),
      React.createElement('img', { value: "Biggs Darklighter", className: 'img-circle', onClick: this.reveal, src: 'img/biggs.jpeg' }),
      React.createElement('img', { value: "Obi-Wan Kenobi", className: 'img-circle', onClick: this.reveal, src: 'img/Ben_Kenobi.png' }),
      React.createElement(
        'table',
        { className: 'table table-bordered' },
        React.createElement(
          'tr',
          null,
          React.createElement(
            'th',
            null,
            'Name'
          ),
          React.createElement(
            'th',
            null,
            'Height'
          ),
          React.createElement(
            'th',
            null,
            'Mass'
          ),
          React.createElement(
            'th',
            null,
            'Hair Color'
          ),
          React.createElement(
            'th',
            null,
            'Skin Color'
          ),
          React.createElement(
            'th',
            null,
            'Eye Color'
          ),
          React.createElement(
            'th',
            null,
            'Birth Year'
          ),
          React.createElement(
            'th',
            null,
            'Gender'
          )
        ),
        this.list
      ),
      React.createElement(
        'h3',
        null,
        'Click On Your Favorite Characters To Get Their Stats'
      )
    );
  }

  reveal(e) {
    const name = e.target.attributes[0].nodeValue;
    if (name) {
      this.setState({
        boolean: true
      });
    }

    if (name === "Luke Skywalker") {
      this.num = 0;
    }
    if (name === "C-3PO") {
      this.num = 1;
    }
    if (name === "R2-D2") {
      this.num = 2;
    }
    if (name === "Darth Vader") {
      this.num = 3;
    }
    if (name === "Leia Organa") {
      this.num = 4;
    }
    if (name === "Owen Lars") {
      this.num = 5;
    }
    if (name === "Beru Whitesun lars") {
      this.num = 6;
    }
    if (name === "R5-D4") {
      this.num = 7;
    }
    if (name === "Biggs Darklighter") {
      this.num = 8;
    }
    if (name === "Obi-Wan Kenobi") {
      this.num = 9;
    }
  }
}
ReactDOM.render(React.createElement(Fetch, null), document.getElementById('fetch'));