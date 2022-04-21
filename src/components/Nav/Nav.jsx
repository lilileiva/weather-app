import React from "react";
import { Link } from "react-router-dom";
import HappyCloud from "../../img/happycloud.png";
import "./Nav.css";
import SearchBar from "../SearchBar/SearchBar.jsx";


export default function Nav({onSearch}) {
    return (
        
            <div className="nav">
                <div className="navContent">
                    <Link to="/">
                        <div className="logo-title">
                            <img src={HappyCloud} alt="logo" />
                            <h3>Weather App</h3>
                        </div>
                    </Link>
                    <div className="about-searchbar">
                        <Link to="/about">
                            <div className="btn-about">
                                <button className="btn btn-outline-secondary">About</button>
                            </div>
                        </Link>
                        <SearchBar onSearch={onSearch} />
                    </div>
                </div>
            </div>
        
    );
}