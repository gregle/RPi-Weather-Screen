import React from 'react'
import '../external/weather-icons/css/weather-icons.min.css'
import '../external/weather-icons/css/weather-icons-wind.min.css'
import '../scss/forecast-card.scss'

const ForecastCard = (props) => {
	if (!props.forecast) {
	  return <div className="Card"><p>Problem Pulling Data</p></div>
	} else {
    return <div className="Card">{props.forecast.summary}</div>
	}
}

export default ForecastCard