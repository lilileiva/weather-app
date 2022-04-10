import React from "react";
import { Link } from "react-router-dom";
import HappyCloud from "../img/happycloud.png";
import "../styles/Nav.css";
import SearchBar from "./SearchBar.jsx";

export default function Nav() {
    return (
        <Link to="/">
            <div className="nav">
                <div className="navContent">
                    <div className="logo-title">
                        <img src={HappyCloud} alt="logo" />
                        <h3>Weather App</h3>
                    </div>
                    <div className="about-searchbar">
                        <Link to="/about">
                            <div className="btn-about">
                                <button class="btn btn-outline-secondary">About</button>
                            </div>
                        </Link>
                        <SearchBar />
                    </div>
                </div>
            </div>
        </Link>
    );
}