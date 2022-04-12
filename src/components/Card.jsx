import "../styles/Card.css";


export default function Card({min, max, name, img, onClose, id}) {
    return (
        <div className="card text-dark bg-light mb-3" >
            <div className="card-header">
                <h4 className="card-title">{name}</h4>
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
                <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} alt="weather image" />
            </div>
        </div>
    );
}