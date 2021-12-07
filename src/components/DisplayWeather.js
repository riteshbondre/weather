import { useContext } from "react";
import { useState } from "react";
import { GlobalContext } from "../context/WeatherContext";

const DisplayWeather = () => {
  const [response, setResponse] = useState([]);
  const { countryData } = useContext(GlobalContext);

  const handleDisplayWeather = async () => {
    await fetch(
      `http://api.weatherstack.com/current?access_key=57902785e4f020d5a054fbd9bba94a41&query=${countryData[0].capital}`
    )
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.current);
        // console.log(data)
      });

    // console.log(response)
  };
  console.log(response);
  return (
    <div>
      <button onClick={handleDisplayWeather}>Display Weather</button>
      
      {
         (Object.keys(response).length !== 0) ? (<div>
            <h5>temperature : {response.temperature}</h5>
            <h5>precip : {response.precip}</h5>
            <h5>wind_speed :{response.wind_speed}</h5>
            <img src={response.weather_icons} alt="weather" />
          </div>) : null
      }
      
    </div>
  );
};

export default DisplayWeather;
