import React, { Component } from "react";
import "./App.css";
import Form from "./components/form";
import Weather from "./components/weather";
class App extends Component {
  state = {};
  getWeather = (e) => {
    e.preventDefault();
    console.log("f");
  };
  render() {
    return (
      <div className="App">
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}
export default App;
