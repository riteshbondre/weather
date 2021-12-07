import React, {useContext} from 'react'
import './App.css';
import Form from './components/Form'
import {GlobalContext} from './context/WeatherContext'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import DisplayCountry from './components/DisplayCountry';


function App() {
  const {countryData} = useContext(GlobalContext);
  console.log(countryData)
  return (
    // <div className="App">
    //   weather
    //   <Form />
    // </div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Form/>}/>
        <Route  path="/displaycountry" element={<DisplayCountry/>}/>
      </Routes>
    </Router>
  );
}

export default App;
