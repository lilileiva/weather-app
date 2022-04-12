import React, { useState } from "react";
import "../styles/SearchBar.css"


export default function SearchBar({onSearch}) {
    const [city, setCity] = useState('');

    const handleInputChange = (e) => {
        setCity(e.target.value);
    }
    return (
        <div class="input-group">
            <form onSubmit={(e) => {
                e.preventDefault();
                onSearch(city);
            }}>
                <input 
                    type="text"
                    placeholder="City..."
                    className="form-control"
                    // aria-label="Recipient's username"
                    // aria-describedby="button-addon2"
                    //value={city}
                    onChange={handleInputChange}                  
                />

                {/* <input className="btn btn-warning" onChange={onSearch} type="submit" value="Agregar" /> */}

                <button
                    type="submit"
                    class="btn btn-outline-secondary"
                    id="button-addon2"
                    onChange={onSearch}
                >
                    Add
                </button>
            </form>
        </div>
    );
}