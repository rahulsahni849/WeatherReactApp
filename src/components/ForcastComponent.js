import { useRef, useState } from 'react';
import './ForecastComponent.style.css'
import { kelvinToCelsius } from './WeatheCard'


function ForcastComponent(props) {
    const [test, setTest] = useState(false);
    //const div_ref = useRef();

    function click() {
        if (!test) {
            setTest(true)
        } else {
            setTest(false)
        }

    }

    function weekDay(dateString) {
        const date = new Date(dateString);
        const options = { weekday: 'long' };
        //console.log(event.toLocaleDateString('en-US', options));
        return date.toLocaleDateString('en-US', options)
    }
    return <>
        <div className="forcast-container" onClick={click}>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt='weather-icon' />
            <p id="day-name">{weekDay(props.Weather.dt_txt)}</p>
            <div className="forecast-right-div">
                <p id="forecast-weather-description">{props.Weather.weather[0].main}</p>
                <p id="forecast-weather-degree">{kelvinToCelsius(props.Weather.main.temp)}</p>
            </div>
        </div>
        {test &&
            <>
                <div className='hidden-forecast-container'>
                    <div className='detail-1'>
                        <div className='detail-record'>
                            <p className="name">Pressure</p>
                            <p className="value">{props.Weather.main.pressure} hPa</p>
                        </div>
                        <div className='detail-record'>
                            <p className="name">Clouds</p>
                            <p className="value">{props.Weather.clouds.all}%</p>
                        </div>
                        <div className='detail-record'>
                            <p className="name">Sea level</p>
                            <p className="value">{props.Weather.main.sea_level}m</p>
                        </div>
                    </div>
                    <div className='detail-2'>
                        <div className='detail-record'>
                            <p className="name">Humidity</p>
                            <p className="value">{props.Weather.main.humidity}</p>
                        </div>
                        <div className='detail-record'>
                            <p className="name">Wind Speed</p>
                            <p className="value">{props.Weather.wind.speed}</p>
                        </div>
                        <div className='detail-record'>
                            <p className="name">Feels like</p>
                            <p className="value">{props.Weather.main.feels_like} hPa</p>
                        </div>
                    </div>
                </div>
            </>
        }
    </>
}

export default ForcastComponent;