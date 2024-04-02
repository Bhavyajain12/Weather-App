import './App.css';
import{Search,MapPin,Wind} from "react-feather"
import getWeather from "./Api/api"
import {useState} from "react"
import dateFormat from "dateformat"

function App() 
{
  const[city,setCity] = useState("")
  const[weather,setWeather] = useState({})
  async function getWeatherByCity() {
    try {
      const weatherData = await getWeather(city);
      setWeather(weatherData);
      setCity("");
    } catch (error) {
      // Handle errors here
      console.error("Error fetching weather data:", error);
    }
  }
  function renderDate()
  {
    let now = new Date()
    return dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
  }
  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="input-wrapper">
        <input type="text" onChange={(e)=>setCity(e.target.value)} placeholder='Enter City Name'/>
        <button onClick={()=>getWeatherByCity()}>
          <Search></Search>
        </button>
      </div>
      {weather && weather.weather &&
      <div className="content">
        <div className="location">
          <MapPin></MapPin>
          <h2>{weather.name} <span>({weather.sys.country})</span>
          </h2>
        </div>
        <p className="datetext">{renderDate()}</p>
      {/* </div> */}

      <div className="weather-desp">
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
        <h3>{weather.weather[0].description}</h3>
      </div>

      <div className="temStats">
        <h1>{Math.floor(weather.main.temp)}<span>&deg;c</span>
        <h3>Feels like {weather.main.feels_like}<span>&deg;c</span></h3>
        </h1>
      </div>

      <div className="windStats">
      <Wind></Wind>
      <h3>Wind is {weather.wind.speed} knots in {weather.wind.deg}&deg;</h3>
      </div>
      </div>
}

{ !weather.weather &&
      <div className="content">
        <h4>No Data Found !</h4>
      </div>
}   
{/* <p>{JSON.stringify(weather)}</p> */}
    </div>
  )
}

export default App;
