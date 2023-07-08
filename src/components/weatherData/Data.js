import React ,{Component}from "react";
import "./data.css";
class Data extends Component{
  
  render(){
    const {isArabic} = this.props;
    return(
      <div className="Data">

        <span className="error">{this.props.data.error}</span>
        {
        
        this.props.data.temp && <div className="weatherData">
            <h3>{isArabic?"المدينة":"country"} : </h3><span>{this.props.data.city} | {this.props.data.country} </span>
            <br/><h3>{isArabic?"الطقس":"weather"} : </h3>
            <div className="weather">
              
              <h4>{isArabic?"درجة الحرارة":"temp"} : </h4><span>{Math.round(this.props.data.temp - 273)}°C</span>
              <br/><h4>{isArabic?"الرطوبة":"humidity"} : </h4><span>{this.props.data.humidity}%</span>
              <br/><h4>{isArabic?"الوصف":"description"} : </h4><span>{this.props.data.description}</span>
            </div>
          </div>
        }
        
      </div>
    )
  }
}

export default Data;