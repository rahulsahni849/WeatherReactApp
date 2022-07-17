export const CITY_API_OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4936931759mshe6fcf6f98ce1fb8p19187djsn385119d168d6',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

export const CITY_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

const WEATHER_API_KEY = "eecea8613754e87fc23dc249b37970f4";

export const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${WEATHER_API_KEY}`;
export const WEATHER_FORECAST_API_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;


