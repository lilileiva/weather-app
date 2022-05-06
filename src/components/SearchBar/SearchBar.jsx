import React, { useState } from "react";
import "./SearchBar.css"


export default function SearchBar({onSearch}) {

    const [input, setInput] = useState('');

    const handleInputSubmit = (e) => {
        e.preventDefault();
        onSearch(input);
        setInput('')
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <form onSubmit={(e) => handleInputSubmit(e)}>
            <div class="input-group">
                <input 
                    type="text"
                    placeholder="City..."
                    className="form-control"
                    autoComplete="on"
                    name="input"
                    value={input}
                    onChange={e => handleInputChange(e)}
                    required                  
                />
                <input type="submit" className="btn btn-outline-secondary" onChange={onSearch} value="Add" />
            </div>
        </form>
    );
};