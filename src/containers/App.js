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

  const apiKey = "371d994e710550d1f53a673a50f9c6f4";

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

          let searchCity = cities.find(c => c.id === city.id);
          if(searchCity) {
            Swal.fire({
              confirmButtonColor: 'rgb(173, 222, 222)',
              title: 'City was already added',
              icon: 'warning'
            })
          } else {
            setCities(cities => [...cities, city]);
          }
        } else {
          Swal.fire({
            confirmButtonColor: 'rgb(173, 222, 222)',
            title: 'City not found',
            text: 'Type again',
            icon: 'question'
          })
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
          return "City not found";
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
