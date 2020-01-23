import React from "react";

const Form = (props) =>{
    return(
        <form className="weatherForm" onSubmit={props.getWeatherData}>
                <input name="cityName" placeholder="City Name..." type="text"/>
                <input name="countryName" placeholder="Country Name..." type="text"/>
                <button type="submit" id="btnSubmit">Submit</button>
        </form>
    );
}

export default Form;