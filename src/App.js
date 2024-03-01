import React, { Component } from "react";
import "./App.css";
import Form from "./components/form";
import Weather from "./components/weather";

const apiKey = "2696971533250289519d3f9d336861e7";
class App extends Component {
  state = {
    temp: "",
    city: "",
    country: "",
    hum: "",
    desc: "",
    error: "",
  };
  getWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;
    const api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
    );
    const data = await api.json();
    if (city && country) {
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        hum: data.main.humidity,
        desc: data.weather[0].description,
        error: "",
      });
    } else {
      this.setState({
        temp: "",
        city: "",
        country: "",
        hum: "",
        desc: "",
        error: "Please Enter Right Country or City",
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Form getWeather={this.getWeather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          hum={this.state.hum}
          desc={this.state.desc}
          error={this.state.error}
        />
      </div>
    );
  }
}
export default App;
