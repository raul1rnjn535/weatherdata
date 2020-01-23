import React from "react";

const Weather = (props) => {
    return(
        <div className="weather__info">
            {
                props.weatherData.city && props.weatherData.country && <p className = "weather__key">
                    Location: <span className = "weather__value">{props.weatherData.city}, {props.weatherData.country}</span>
                </p>
            }
            {
                props.weatherData.temperature && <p className = "weather__key">
                    Temperature: <span className = "weather__value">{props.weatherData.temperature}</span>
                </p>
            }
            {
                props.weatherData.humidity && <p className = "weather__key">
                    Humidity: <span className = "weather__value">{props.weatherData.humidity}</span>
                </p>
            }
            {
                props.weatherData.description && <p className = "weather__key">
                    Description: <span className = "weather__value">{props.weatherData.description}</span>
                </p>
            }
            {
                props.weatherData.error && <p className = "weather__error">
                    {props.weatherData.error}
                </p>
            }
        </div>
    );
    
}

export default Weather;