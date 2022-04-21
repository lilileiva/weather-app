import "./City.css"
import { useState, useParams } from "react";
import { Link } from "react-router-dom";


export default function City({city}) {
  return (
      <div className="card text-dark bg-light mb-3" >
      <div className="card-header">
          <h4 className="card-title">{city.name} </h4>

          <Link to="/">
            <button className="btn btn-danger">↩</button>
          </Link>

      </div>
      <div class="card-body">
          <div className="temp">
              <p className="card-text">Min temp: {city.min}º</p>
              <p className="card-text">Max temp: {city.max}º</p>
              <p className="card-text">Wind: {city.wind} m/s</p>
              <p className="card-text">Clouds: {city.clouds} %</p>
              <p className="card-text">Weather: {city.weather}</p>
              <p className="card-text">Latitud: {city.latitud}º</p>
              <p className="card-text">Longitud: {city.longitud}º</p>
          </div>
      </div>
      </div>
  );
}


// export default function City({city}) {

//     const { id } = useParams();

//     const [city, setCity] = useState({});

//     const apiKey = process.env.REACT_APP_API_KEY;

//     fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`)
//       .then(response => response.json())
//       .then((props) => {
//         const city = {
//           min: Math.round(props.main.temp_min),
//           max: Math.round(props.main.temp_max),
//           img: props.weather[0].icon,
//           id: props.id,
//           wind: props.wind.speed,
//           temp: props.main.temp,
//           name: props.name,
//           weather: props.weather[0].main,
//           clouds: props.clouds.all,
//           latitud: props.coord.lat,
//           longitud: props.coord.lon
//         }
//         setCity(city)
        
//       });
      
//       if(city) {
//           return (
//               <div className='cards'>
//                     <p>key={city.id}</p>
//                     <p>max={city.max}</p>
//                     <p>min={city.min}</p>
//                     <p>name={city.name}</p>
//                     <p>wind={city.wind}</p>
//                     <p>clouds={city.clouds}</p>
//                     <p>weather={city.weather}</p>
//                     <p>img={city.img}</p>
//                     <p>id={city.id}</p>
//               </div>
//             );
//       } else if (!city) {
//         return (
//           <div className='cards'>
//                 <p>Cargando...</p>

//           </div>
//         );
//       } else {
//         return (
//           <div className='cards'>
//                 <p>City not found.</p>
//           </div>
//         );
//       }
// }



