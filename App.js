import React from 'react';
import Form from './Form'
import Result from './Result';

// Key for weather API
const APIKey = 'a2c2e25fb273a23265e497499e8edbda';

class App extends React.Component {

    state = {
        value: '',
        date: '',
        city: '',
        sunrise: '',
        sunset: '',
        temp: '',
        pressure: '',
        wind: '',
        err: false,
    };

    handleInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    };

    handleCitySubmit = e => {
        e.preventDefault();

        const API = `http://api.openweathermap.org/data/2.5/find?q=${this.state.value}&APPID=${APIKey}&units=metric`;

        fetch(API/*{method: 'get', headers: new Headers({'Access-Control-Allow-Origin': '*'})}*/)
            .then(response => {
                if (response.ok) {
                    return response
                }
                throw Error('Nie udało się')
            })
            .then(response => response.json())
            .then(data => {
                if (data.list[0].main.temp !== undefined) {
                    const time = new Date().toLocaleString();
                    this.setState(prevState => ({
                        err: false,
                        date: time,
                        city: 'Pogoda dla miasta ' + this.state.value,
                        //      sunrise: data.sys.sunrise,
                        //     sunset: data.sys.sunset,
                        temp: 'Temperatura: ' + data.list[0].main.temp,
                        pressure: 'Ciśnienie: ' +  data.list[0].main.pressure,
                        wind: 'Prędkość wiatru: ' + data.list[0].wind.speed,
                    }))
                }
            })
            .catch(err => {
                console.log(err);
                this.setState(state => ({
                    err: true,
                    city: 'Nie odnaleziono miasta!',
                    date: '',
                    temp: '',
                    pressure: '',
                    wind: '',
                }))
            })
    };

    render() {
        return (
            <div className='App'>
                <Form
                    value={this.state.value}
                    change={this.handleInputChange}
                    submit={this.handleCitySubmit}
                />
                <Result weather={this.state}/>
            </div>
        )
    }
}

export default App;
