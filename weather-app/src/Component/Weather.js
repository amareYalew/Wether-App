import React, { useState } from "react";
import DisplayWeather from "./displayWeather"
import Form from "./Form";
// import "./weather.css";

function Weather() {
 const [weather,setWeather]= useState([]);
 const [city,setCity]=useState()

 const APIKEY = "5066f37b5b9c9c2472dab399b957e4be";

 async function weatherData(e) {
    e.preventDefault();
    console.log(city,'city')
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.city},${city.country}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

        setWeather({ data: data });
        console.log(weather,'weather')
    
  }

  return (

    <div>
        <Form setCity={setCity} weatherData={weatherData}/>
        {weather.data != undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : console.log('Sorry we dont have data')}
    </div>
    
  )


}

export default Weather;