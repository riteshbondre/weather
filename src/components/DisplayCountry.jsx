import { useContext } from "react/cjs/react.development";
import { GlobalContext } from "../context/WeatherContext";
import DisplayWeather from "./DisplayWeather";

const DisplayCountry = () => {
  const { countryData } = useContext(GlobalContext);

  return (
    <div>
      {countryData && countryData.map((country) => {
        // console.log(country)
        return (
          <div key={country.capital}>
            <img src={country.flags.png} alt="flag"/>
            <h1>{country.name.common}</h1>
            <h2>{country.capital}</h2>
            <h3>population : {country.population}</h3>
            <h3>latlng : {country.latlng}</h3>
           <div>
           <DisplayWeather />
           </div>
          </div>
        );
        
      })}
      
    </div>
  );
};
export default DisplayCountry;
