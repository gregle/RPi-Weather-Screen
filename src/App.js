import React from 'react';
import './App.scss';
import Forecast from './components/forecast'
import DarkSkyApi from 'dark-sky-api';

function App() {
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

  const position = {
    latitude: 47.679486, 
    longitude: -122.364860
  };

  darkSkyApi.loadCurrent(position)
    .then(result => console.log(result));
  darkSkyApi.loadForecast(position)
    .then(result => console.log(result));

  return (
    <div className="App">
      <Forecast />
    </div>
  );
}

export default App;
