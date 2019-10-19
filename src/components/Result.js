import React from 'react';

const Result = props => {
    const{err, city, temp, date, pressure, wind} = props.weather;
    return (
        <React.Fragment>
            <div>{city}</div>
            <div>{date}</div>
            <div>{temp}</div>
            <div>{wind}</div>
            <div>{pressure}</div>
        </React.Fragment>

    )
};

export default Result;
