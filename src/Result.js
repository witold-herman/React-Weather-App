import React from 'react';
import './Result.css';

const Result = props => {
    const{err, city, temp, date, pressure, wind} = props.weather;

    let content = null;

    if(!err && city) {
        content = (
            <div>
                <h3>Wyniki wyszukiwania dla <em>{city}</em></h3>
                <h4>Dane dla dnia i godziny: {date}</h4>
                <h4>Aktualna temperatura: {temp} &#176;C</h4>
                <h4>Aktualne ciśnienie: {pressure} hPa</h4>
                <h4>Aktualna siła wiatru: {wind} m/s</h4>
            </div>
        )
    }

    return (
        <div className="result">
            {err ? `Nie odnaleziono ${city}` : content}
        </div>



    )
};

export default Result;
