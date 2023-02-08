import React from "react";

const Weather = (props) => {
    return (
        <div className="weatherDetails">
            {props.temp && <p>Temperature : {props.temp}</p>}
            {props.city && <p>City : {props.city}</p>}
            {props.country && <p>Country : {props.country}</p>}
            {props.hum && <p>humidity : {props.hum}</p>}
            {props.desc && <p>description : {props.desc}</p>}
            {props.error && <p>error : {props.error}</p>}
        </div>
    );

}

export default Weather;