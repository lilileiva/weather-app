import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";


export default function Card({ min, max, name, img, onClose, id }) {
    return (
        <div >
            {
                (!min && !max && !name && !img)
                    ? <div className="card text-dark bg-light mb-3" ><p>Cargando...</p></div>
                    : <div className="card text-dark bg-light mb-3" >
                        <div className="card-header">
                            <Link to={`/city/${id}`} >
                                <h4 className="card-title">{name}</h4>
                            </Link>
                            <button className="btn btn-danger" onClick={onClose}>X</button>
                        </div>
                        <div class="card-body">
                            <div className="temp">
                                <p className="card-text">Min</p>
                                <p className="card-text">{min}º</p>
                            </div>
                            <div className="temp">
                                <p className="card-text">Max</p>
                                <p className="card-text">{max}º</p>
                            </div>
                            <img src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} alt="weather" />
                        </div>
                    </div>
            }
        </div>
    );
}
