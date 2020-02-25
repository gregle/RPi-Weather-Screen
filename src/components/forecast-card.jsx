import React from 'react'
import '../external/weather-icons/css/weather-icons.min.css'
import '../external/weather-icons/css/weather-icons-wind.min.css'
import '../scss/forecast-card.scss'
import '../external/weather-icons/css/weather-icons.min.css'

const ForecastCard = (props) => {
	if (!props.dailyForecast) {
	  return <div className="Card">
      <p>Problem Pulling Data</p>
    </div>
	} else {
    return <div className="Card">
      <div className="top-row">
        <i className={"forecast-icon wi wi-forecast-io-" + props.dailyForecast.icon}></i>
        <div className={"slug"}>
          <span className={"day-nice"}>{props.dailyForecast.dayNice}</span>
          <span className={"temp"}>{Math.round(props.dailyForecast.temperatureHigh)}&#176;</span><span className={"slash"}>/</span><span className={"temp"}>{Math.round(props.dailyForecast.temperatureLow)}&#176;</span>
        </div>
      </div><span className={"summary"}>{props.dailyForecast.summary}</span>
    </div>
	}
}

export default ForecastCard