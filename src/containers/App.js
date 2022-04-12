import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import '../styles/App.css';
import Nav from '../components/Nav.jsx';
// import Footer from '../components/Footer.jsx';
import About from '../components/About.jsx';
import Cards from '../components/Cards.jsx';


export default function App() {

  const [cities, setCities] = useState([]);

  const apiKey = "371d994e710550d1f53a673a50f9c6f4";

  function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((props) => {
        if(props.main !== undefined){
          const city = {
            min: Math.round(props.main.temp_min),
            max: Math.round(props.main.temp_max),
            img: props.weather[0].icon,
            id: props.id,
            wind: props.wind.speed,
            temp: props.main.temp,
            name: props.name,
            weather: props.weather[0].main,
            clouds: props.clouds.all,
            latitud: props.coord.lat,
            longitud: props.coord.lon
          };
          setCities(cities => [...cities, city]);
        } else {
          alert("City not found");
        }
      });
    }

    function onClose(id) {
      setCities(cities => cities.filter(c => c.id !== id));
    }

  return (
    <div className='app'>
      <Nav onSearch={onSearch} />
      <div className='appContent'>
        <Routes>
          <Route path="/" element={<Cards cities={cities} onClose={onClose} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
