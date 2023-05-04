import React from "react";
import "./form.css";
const Form =(props)=>{
  return(
    <form className="Form" onSubmit={props.getWeather}>
      <input name="city" type="text" placeholder="City..."/>
      <input name="country" type="text" placeholder="Country..."/>
      <button type="submit" >get weather</button>
    </form>
  )
}

export default Form;