import React, { useState } from "react";
import "../styles/SearchBar.css"


export default function SearchBar({onSearch}) {
    const [city, setCity] = useState('');

    const handleInputChange = (e) => {
        setCity(e.target.value);
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
                onSearch(city);
            }}>
                <div class="input-group">
                <input 
                    type="text"
                    placeholder="City..."
                    className="form-control"
                    value={city}
                    onChange={handleInputChange}                  
                />

                <input type="submit" className="btn btn-outline-secondary" onChange={onSearch} value="Agregar" />
            </div>
        </form>
    );
}