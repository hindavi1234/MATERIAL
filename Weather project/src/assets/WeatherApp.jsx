import {useState} from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Pune",
        temp: 25.35,
        tempMin: 34.34,
        tempMax: 45.32,
        humidity: 45,
        feelsLike: 23.32,
        pressureD: 65,
        weather: "haze"
    });

    const updateInfo = (newInfo) => {
      console.log("Updating info with: ", newInfo);
        setWeatherInfo(newInfo);
    }
    
  return (
    <div style={{textAlign:"center"}}>
       <big><h1>Weather App by Delta</h1></big>
       <SearchBox updateInfo={updateInfo}/>
       <InfoBox info={weatherInfo}/>
    </div>
  )
}
