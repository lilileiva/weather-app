import React from "react";
import "../styles/SearchBar.css"

export default function SearchBar() {
    return (
        // <div>
        //     <input type="text" placeholder="City..."/>
        //     <input type="submit" value="Add"/>
        // </div>

        <div class="input-group">
            <input type="text" class="form-control" placeholder="City..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
        </div>
    );
}