import React from 'react';
import './App.scss';
import DarkSkyApi from 'dark-sky-api';
import ForecastCard from './components/forecast-card';

const darkSkyApi = DarkSkyApi;
darkSkyApi.apiKey = '4c3097675ed17d18ef138a930b2b1493';
darkSkyApi.postProcessor = (item) => { // must accept weather data item param

  // add a nice date representation using moment.calender
  item.dayNice = item.dateTime.calendar(null, {
    sameDay: '[Today]',
    nextDay: 'ddd',
    nextWeek: 'ddd',
    lastDay: '[Yesterday]',
    lastWeek: '[Last] ddd',
    sameElse: 'ddd'
  });
  // add units object onto item
  item.units = darkSkyApi.getResponseUnits(); // this would be outdated if you changed api units later

  return item; // must return weather data item
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latlong: {
        latitude: 47.679486, 
        longitude: -122.364860
      }, 
      forecast: { },
      current: { }
    };
  }

  componentDidMount() {
    darkSkyApi.loadCurrent()
    .then(result => {
      console.log(result)
      this.setState({
        current: result
      })
    });
    
    darkSkyApi.loadForecast(this.state.latlong)
    .then(result => {
      console.log(result)
      this.setState({
        forecast: result
      })
    });
  }

  createForecast() {
    let forecast = [];
    if (this.state.forecast.daily) {
      for (let i = 0; i < this.state.forecast.daily.data.length-1; i++) {
        forecast.push(<ForecastCard dailyForecast={this.state.forecast.daily.data[i]} key={i}/>);
      }
    }
    return forecast
  }

  render() {
    return (
      <div className="App">
        <iframe
            title="Weather Map"
            className="Weather-map"
            src="https://maps.darksky.net/@temperature,47.679,-122.365,8">
        </iframe>
        {this.createForecast()}
      </div>
    );
  }
}

export default App;
