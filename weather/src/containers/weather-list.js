import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions'; 

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    )
  }

  render() {
    return (
      <table>
          <thead>
            <tr className="App-intro">
                <th>City</th>
                <th>Temp</th>
                <th>Pressure</th>
                <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);
