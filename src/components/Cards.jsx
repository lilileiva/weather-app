
import "../styles/Cards.css"
import Card from "./Card.jsx";
import SearchBar from "./SearchBar.jsx";

export default function Cards({cities, onClose, onSearch}) {
  console.log(cities)
    if(cities.length !== 0) {
      return (
        <div className='cards'>
          {cities.map(c => <Card
              key={c.id}
              max={c.max}
              min={c.min}
              name={c.name}
              img={c.img}
              onClose={() => onClose(c.id)}
              id={c.id}
            /> )}
        </div>
      );
    } else {
      return(
        <div className="card text-dark bg-light mb-3" >
                <div className="card-header">
                  <h4 className="card-title">No cities available.</h4>
                </div>
                <div class="card-body">
                    <div className="temp">
                        <p className="card-text">Add cities:</p>
                        <SearchBar onSearch={onSearch} />
                    </div>
                </div>
            </div>
      );
    }
  }