import React, {Component} from 'react';
import Title from "./components/Title";
import Form from "./components/Form";
import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Rahul</h1>
//     </div>
//   );
// }
const API_KEY = "a023945cf736605110c81ebc422b1f71";
const URL = "https://api.openweathermap.org/data/2.5/weather";


class App extends React.Component{
  state = {
    temperature: undefined,
    humidity: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    error: undefined,
  }
  getWeatherData = async(e) => {
    e.preventDefault();
    const city = e.target.elements.cityName.value;
    const country = e.target.elements.countryName.value;
    if(city && country){
      const request = URL + `?q=${city},${country}&appid=${API_KEY}`;
      const response = await fetch(request);
      const data = await response.json();
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description, 
        error: undefined,
      })
    } else {
      this.setState({
        temperature: undefined,
        humidity: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        error: "Please enter values to see weather info...",
      })
    }
  }

  render(){
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeatherData={this.getWeatherData} /> 
                  <Weather weatherData = {this.state}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
