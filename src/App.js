import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import SelectedWeatherCard from './components/WeatheCard';
import { WEATHER_API_URL, WEATHER_FORECAST_API_URL } from './services/API'
import ForcastComponent from './components/ForcastComponent';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForcastData] = useState(null);
  var temp = {};
  const handleSearch = (searchData) => {
    console.log(searchData)
    const [cityName, countryName] = searchData.label.split(",");
    temp = { cityName: cityName, countryName: countryName }
    const [lat, lon] = searchData.value.split(",")
    console.log(lat, lon);
    var currentWeather = fetch((WEATHER_API_URL + `&lat=${lat}&lon=${lon}`), { method: 'GET' });
    var forecastWeather = fetch((WEATHER_FORECAST_API_URL + `&lat=${lat}&lon=${lon}`), { method: 'GET' });

    Promise.all([currentWeather, forecastWeather])
      .then(async (resp) => {
        const current = await resp[0].json();
        const forecast = await resp[1].json();

        //console.log(current)
        setWeatherData(current);
        setForcastData(forecast.list);
        //console.log(forecast)
      })
      .catch((err) => {
        console.log(err)
      });
  }

  const foreCastDataRender = (list) => {
    var counter = -1;
    const today = new Date().getDate();
    const weekdayData = list.filter((item, index) => {
      var date = new Date(item.dt_txt).getDate();
      if (counter != date && date != today) {
        counter = date;
        return item;
      }
    })
    //console.log(weekdayData);
    return weekdayData.map((item, index) => {
      return <ForcastComponent key={index} Weather={item} />
    })
  }
  return (
    <div className="app-container">
      <Search onSearchChange={handleSearch} />
      {weatherData !== null &&
        <>
          <SelectedWeatherCard Weather={weatherData} City={temp} />
          {forecastData !== null &&
            <>
              <h3>Upcoming Days Weather details</h3>
              {foreCastDataRender(forecastData)}
            </>
          }
        </>}
    </div>
  );
}

export default App;

