import React from "react";
import "./form.css";
const Form =(props)=>{
  return(
    <form className="Form" onSubmit={props.getWeather}>
      <input name="city" type="text" placeholder={props.isArabic?"المدينة":"City..."}/>
      <input name="country" type="text" placeholder={props.isArabic?"الدولة":"Country..."}/>
      <button type="submit" >{props.isArabic?"حالة الطقس":"get weather"}</button>
    </form>
  )
}

export default Form;