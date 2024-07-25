import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {

  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "d9dc8641b312740d57a72bfcedd427a0";

  let getWeatherInfo = async () => {
    try {
      let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
      let responceData = await responce.json();
      console.log(responceData);
      let result = {
        city: city,
        temp: responceData.main.temp,
        tempMin: responceData.main.temp_min,
        tempMax: responceData.main.temp_max,
        humidity: responceData.main.humidity,
        feelsLike: responceData.main.feels_like,
        pressureD: responceData.main.pressure,
        weather: responceData.weather[0].description
      };
      console.log(result);
      return result;
    }
    catch (error) {
      throw error;
    }

  }

  let handleChange = (evt) => {
    setCity(evt.target.value)
  }


  let handleSubmit = async (evt) => {
    evt.preventDefault();
    setError(false);
    try {
      // evt.preventDefault();
      console.log(city);
      const newInfo = await getWeatherInfo();
      // if (newInfo) {
        updateInfo(newInfo);
        setCity("");
      // }
    }
    catch (err) {
      setError(true);
    }

  }

  return (
    <div className='SearchBox'>
      <form onSubmit={handleSubmit}>
        <TextField
          value={city}
          id="city"
          label="Outlined"
          variant="outlined"
          onChange={handleChange}
          required />
        <br></br><br></br>
        <Button variant="contained" type='submit'>Search</Button>
        {error && <p><i>No such Place exists!!</i></p>}
      </form>
    </div>
  )
}
