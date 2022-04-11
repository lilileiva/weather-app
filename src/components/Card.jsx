import "../styles/Card.css";

export default function Card() {
    return (
        // <div>
        //     <button>X</button>
        //     <div className="card">
        //         <h3><a href="">Card title</a></h3>
        //         <div className="cardContent">
        //             <div>
        //                 <p>Min temp</p>
        //                 <p>Max temp</p>
        //             </div>
        //             <img src="" alt="weather image" />
        //         </div>
        //     </div>
        // </div>

        <div class="card text-dark bg-light mb-3" >
            <div class="card-header">
                <h4 class="card-title">City name</h4>
                <button class="btn btn-danger">X</button>
            </div>
            <div class="card-body">
                <div className="temp">
                    <p class="card-text">Min</p>
                    <p class="card-text">temp</p>
                </div>
                <div className="temp">
                    <p class="card-text">Max</p>
                    <p class="card-text">temp</p>
                </div>
                <img src="" alt="weather image" />
            </div>
        </div>
    );
}