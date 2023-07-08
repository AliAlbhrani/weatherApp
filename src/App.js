import React, { Component } from "react";
import Form from "./components/weatherForm/Form";
import Data from "./components/weatherData/Data";
import "./App.css";

const API_KEY = "6b71316418474e5f736fa39931aaefac";
class App extends Component {
  state = {
    temp: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: "",
    isArabic: true,
  };
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if ((city !== "") & (country !== "")) {
      const api = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`
      );
      const data = await api.json();
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: null,
      });
    } else {
      this.setState({
        temp: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "please enter data",
      });
    }
  };
  translate=()=>{
    this.setState({isArabic:!this.state.isArabic})
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.translate} style={buttonStyle}>
          {this.state.isArabic ? "translate" : "ترجم"}
        </button>
        <h1>{this.state.isArabic?"الطقس":"weather"}</h1>
        <Form getWeather={this.getWeather} isArabic={this.state.isArabic} />
        <Data data={this.state} isArabic={this.state.isArabic}/>
      </div>
    );
  }
}

const buttonStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  padding: "10px",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  backgroundColor: "#2ca8fa",
  color: "#fff",
  fontWeight: "bold",
};

export default App;
