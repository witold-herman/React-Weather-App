import React from 'react';
import Form from './Form'
import Result from './Result';

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
        err: '',
    };

    handleInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    };

    handleCitySubmit = e => {
        e.preventDefault();

        const API = `http://api.openweathermap.org/data/2.5/find?q=${this.state.value}&APPID=a2c2e25fb273a23265e497499e8edbda`;

        fetch(API, {method: 'get', headers: new Headers({'Access-Control-Allow-Origin': '*'})})
            .then(response => console.log(response))
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div className='App'>
                <Form
                    value={this.state.value}
                    change={this.handleInputChange}
                    submit={this.handleCitySubmit}
                />
                <Result/>
            </div>
        )
    }
}

export default App;
