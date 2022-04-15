import "../styles/Cards.css"
import { useParams } from "react-router-dom";
import { useState } from "react";


export default function City( props ) {

    const { id } = useParams();

    const [infoCity, setInfoCity] = useState({});

    const apiKey = process.env.REACT_APP_API_KEY;

    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then((info) => {
        const objCity = {
          temp: info.main.temp
        }
        setInfoCity(objCity)
        
      });
      
      if(props.city) {
          return (
              <div className='cards'>
                    <p>key={props.city.id}</p>
                    <p>max={props.city.max}</p>
                    <p>min={props.city.min}</p>
                    <p>name={props.city.name}</p>
                    <p>wind={props.city.wind}</p>
                    <p>clouds={props.city.clouds}</p>
                    <p>weather={props.city.weather}</p>
                    <p>img={props.city.img}</p>
                    <p>id={props.city.id}</p>
              </div>
            );
      } else if (!infoCity) {
        return (
          <div className='cards'>
                <p>Cargando...</p>

          </div>
        );
      } else {
        return (
          <div className='cards'>
                <p>City not found.</p>
          </div>
        );
      }
}

// export default function Ciudad({city}) {
//   return (
//       <div className="ciudad">
//               <div className="container">
//                   <h2>{city.name}</h2>
//                   <div className="info">
//                       <div>Temperatura: {city.temp} ºC</div>
//                       <div>Clima: {city.weather}</div>
//                       <div>Viento: {city.wind} km/h</div>
//                       <div>Cantidad de nubes: {city.clouds}</div>
//                       <div>Latitud: {city.latitud}º</div>
//                       <div>Longitud: {city.longitud}º</div>
//                   </div>
//           </div>
//       </div>
//   );
// }

