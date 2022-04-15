import "../styles/Cards.css"
import { useState } from "react";
import { Link } from "react-router-dom";


export default function City({city}) {
  return (
      // <div className="ciudad">
      //         <div className="container">
      //             <h2>{city.name}</h2>
      //             <div className="info">
      //                 <div>Temperatura: {city.temp} ºC</div>
      //                 <div>Clima: {city.temp}</div>
      //                 <div>Viento: {city.wind} km/h</div>
      //                 <div>Cantidad de nubes: {city.clouds}</div>
      //                 <div>Latitud: {city.latitud}º</div>
      //                 <div>Longitud: {city.longitud}º</div>
      //             </div>
      //     </div>
      // </div>

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
              <p className="card-text">Wind: {city.wind}</p>
              <p className="card-text">Clouds: {city.clouds}</p>
              <p className="card-text">Weather: {city.weather}</p>
              <p className="card-text">Latitud: {city.latitud}º</p>
              <p className="card-text">Longitud: {city.longitud}º</p>
          </div>
      </div>
      </div>

  );
}


// export default function City( props ) {

//     const { id } = useParams();

//     const [infoCity, setInfoCity] = useState({});

//     const apiKey = process.env.REACT_APP_API_KEY;

//     fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`)
//       .then(response => response.json())
//       .then((info) => {
//         const objCity = {
//           temp: info.main.temp
//         }
//         setInfoCity(objCity)
        
//       });
      
//       if(props.city) {
//           return (
//               <div className='cards'>
//                     <p>key={props.city.id}</p>
//                     <p>max={props.city.max}</p>
//                     <p>min={props.city.min}</p>
//                     <p>name={props.city.name}</p>
//                     <p>wind={props.city.wind}</p>
//                     <p>clouds={props.city.clouds}</p>
//                     <p>weather={props.city.weather}</p>
//                     <p>img={props.city.img}</p>
//                     <p>id={props.city.id}</p>
//               </div>
//             );
//       } else if (!infoCity) {
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



