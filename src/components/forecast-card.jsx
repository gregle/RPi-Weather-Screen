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
    return <div className="Card-Wrapper">
      <div className="Card">
        <div>
          <span>{props.dailyForecast.dayNice}</span><br/>
          <span className={"temp"}>{Math.round(props.dailyForecast.temperatureHigh)}</span><span className={"slash"}>/</span><span className={"temp"}>{Math.round(props.dailyForecast.temperatureLow)}</span>
        </div>
        <i className={"forecast-icon wi wi-forecast-io-" + props.dailyForecast.icon}></i>
        <span className={"summary"}>{props.dailyForecast.summary}</span>
      </div>
    </div>
	}
}

export default ForecastCard