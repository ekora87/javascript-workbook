'use strict';

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trains: []
    };
  }
  componentWillMount() {
    fetch('https://www.septastats.com/api/current/trains').then((response) => {
      response.json().then((item) => {
        const trains = item.data;
        this.setState({trains});
      });
    });
  }

  render() {
    const list = this.state.trains.map((place, index) => {
      return (
      <tr key={index}>
        <td className='number'>{index}</td>
        <td>{place.dest}</td>
        <td>{place.source}</td>
        <td>{place.trainno}</td>
      </tr>
    )});

    return (
      <div>
        <h1>List Of Trains Destinations & Sources</h1>
        <table className = "table table-bordered">
          <tr>
            <th>#</th>
            <th>Destination</th>
            <th>Source</th>
            <th>Train Number</th>
          </tr>
          {list}
        </table>
      </div>
    );
  }
}
ReactDOM.render(<Fetch />, document.getElementById('fetch'));
