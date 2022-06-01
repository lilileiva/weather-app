import "./City.css"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export default function City({ city }) {

  const { id } = useParams();

  const [infoCity, setInfoCity] = useState({});

  const apiKey = process.env.REACT_APP_API_KEY;
  fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then((props) => {
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
      }
      setInfoCity(city)
    });


  return (
    <div className="card text-dark bg-light mb-3" >
      <div className="card-header">
        <h4 className="card-title">{infoCity.name} </h4>
        <Link to="/">
          <button className="btn btn-danger">↩</button>
        </Link>
      </div>
      <div class="card-body">


        <div className="temp">
          {
            (!infoCity.name && !infoCity.min && !infoCity.max && !infoCity.wind && !infoCity.clouds && !infoCity.weather && !infoCity.longitud && !infoCity.latitud && !infoCity.img)
              ? <p className="card-text">Cargando...</p>
              : null
          }
          {
            infoCity.min
              ? <p className="card-text">Min temp: {infoCity.min}º</p>
              : null
          }
          {
            infoCity.max
              ? <p className="card-text">Max temp: {infoCity.max}º</p>
              : null
          }
          {
            infoCity.wind
              ? <p className="card-text">Wind: {infoCity.wind} m/s</p>
              : null
          }
          {
            infoCity.clouds
              ? <p className="card-text">Clouds: {infoCity.clouds} %</p>
              : null
          }
          {
            infoCity.weather
              ? <p className="card-text">Weather: {infoCity.weather}</p>
              : null
          }
          {
            infoCity.latitud
              ? <p className="card-text">Latitud: {infoCity.latitud}º</p>
              : null
          }
          {
            infoCity.longitud
              ? <p className="card-text">Longitud: {infoCity.longitud}º</p>
              : null
          }
          {
            infoCity.img
              ? <img className="city-detail" alt='weather img' src={"http://openweathermap.org/img/wn/" + infoCity.img + "@2x.png"} />
              : null
          }
        </div>
      </div>
    </div>
  );
}


