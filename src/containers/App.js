import React, { useState } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Nav from '../components/Nav/Nav.jsx';
import Footer from '../components/Footer/Footer.jsx';
import About from '../components/About/About.jsx';
import Cards from '../components/Cards/Cards.jsx';
import City from '../components/City/City.jsx';
import Swal from 'sweetalert2';

export default function App() {

  const [cities, setCities] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
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
          // alert("City not found");
          Swal.fire(
            'City not found',
            'Type again',
            'question'
          )
        }
      });
    }

    function onClose(id) {
      setCities(cities => cities.filter(c => c.id !== id));
    }

    function onFilter(id) {
      let city = cities.filter(c => c.id === parseInt(id));
      if(city.length > 0) {
          return city[0];
      } else {
          return null;
      }
    }

  return (
    <div className='app'>
      <Nav onSearch={onSearch} />
      <div className='appContent'>
          <Route exact path="/">
            <Cards
              cities={cities}
              onClose={onClose}
              onSearch={onSearch}
            />
          </Route>
          <Route
            exact path='/city/:id'
            render={({match}) => <City city={onFilter(match.params.id)}/>}
          />
          <Route exact path="/about">
            <About />
          </Route>
      </div>
      <Footer />
    </div>
  );
}
