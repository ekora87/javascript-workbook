'use strict';

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trains: []
    };
  }
  componentWillMount() {
    fetch('https://www.septastats.com/api/current/trains').then(response => {
      response.json().then(item => {
        const trains = item.data;
        this.setState({ trains });
      });
    });
  }

  render() {
    const list = this.state.trains.map((place, index) => {
      return React.createElement(
        'tr',
        { key: index },
        React.createElement(
          'td',
          { className: 'number' },
          index
        ),
        React.createElement(
          'td',
          null,
          place.dest
        ),
        React.createElement(
          'td',
          null,
          place.source
        ),
        React.createElement(
          'td',
          null,
          place.trainno
        )
      );
    });

    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'List Of Trains Destinations & Sources'
      ),
      React.createElement(
        'table',
        { className: 'table table-bordered' },
        React.createElement(
          'tr',
          null,
          React.createElement(
            'th',
            null,
            '#'
          ),
          React.createElement(
            'th',
            null,
            'Destination'
          ),
          React.createElement(
            'th',
            null,
            'Source'
          ),
          React.createElement(
            'th',
            null,
            'Train Number'
          )
        ),
        list
      )
    );
  }
}
ReactDOM.render(React.createElement(Fetch, null), document.getElementById('fetch'));