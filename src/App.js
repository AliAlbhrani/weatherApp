import React , {Component} from "react";
import Form from "./components/weatherForm/Form";
import Data from "./components/weatherData/Data";
import './App.css';

const API_KEY = "6b71316418474e5f736fa39931aaefac";
// https://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component{
  state={
    temp:"",
    city:"",
    country:"",
    humidity:"",
    description:"",
    error:''
  }
  getWeather = async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    if (city !=="" & country !==""){
      const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`);
      const data = await api.json();
      this.setState({
        temp:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:null,
      });
    }else{
      this.setState({
        temp:"",
        city:"",
        country:"",
        humidity:"",
        description:"",
        error:'please enter data',
      });
    }
    
    }
  render(){
    return (
      <div className="App">
        <h1>weather</h1>
        <Form getWeather={this.getWeather}/>
        <Data data={this.state}/>
      </div>
    );
  }
}

export default App;
