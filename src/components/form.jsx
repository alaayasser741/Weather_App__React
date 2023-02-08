import React, { Component } from "react";

const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <input type="text" placeholder="City..." name="city"/>
            <input type="text" placeholder="Country..." name="country"/>
            <input type="submit" value="Check" />
        </form>
    );

}
export default Form;