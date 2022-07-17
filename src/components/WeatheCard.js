import './WeatherCard.style.css';


function WeatherDetailDiv(props) {
    return <div className="weather-detail-record">
        <p className="weather-record-name">{props.Name}</p>
        <p className="weather-record-value">{props.Value}</p>
        {props.children}
    </div>
}
export function kelvinToCelsius(k) {
    return <>
        {(k - 273.15).toFixed()}&#176;C
    </>
}
function SelectedWeatherCard(props) {
    return <>
        <div className="app-weather-card">
            <div className="weather-card-left-pane">
                <div className="city-weather-details">
                    <p id='city'>{props.Weather.name}, {props.Weather.sys.country}</p>
                    <p id='city-weather'>{props.Weather.weather[0].main}</p>
                </div>
                <div className="city-weather-degree">
                    <h1 id="weather-degree">{kelvinToCelsius(props.Weather.main.temp)}</h1>
                </div>
            </div>
            <div className="weather-card-right-pane">
                <div className="weather-image-info">
                    <img id="weather-image" src={`http://openweathermap.org/img/wn/${props.Weather.weather[0].icon}@2x.png`} alt="weather-image"></img>
                </div>
                <div className="weather-detail">
                    <h3>Details</h3>
                    <WeatherDetailDiv Name="Feels Like" Value={kelvinToCelsius(props.Weather.main.feels_like)}></WeatherDetailDiv>
                    <WeatherDetailDiv Name="Wind" Value={props.Weather.wind.speed + " m/s"} />
                    <WeatherDetailDiv Name="Humidity" Value={props.Weather.main.humidity + "%"} />
                    <WeatherDetailDiv Name="Pressure" Value={props.Weather.main.pressure + " hPa"} />
                    {/* <WeatherDetailDiv Name="Feels Like" Value="test" /> */}
                </div>
            </div>
        </div>
    </>
}

export default SelectedWeatherCard
