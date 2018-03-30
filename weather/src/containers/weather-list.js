import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions'; 
import Chart from '../Components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    console.log(temps)
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart 
          data={pressure[0]}/>  
        </td>
        <td>
          <Chart 
          data={pressure[0]}/>  
        </td>
        <td>
          <Chart 
          data={humidity[0]}/>  
        </td>
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
