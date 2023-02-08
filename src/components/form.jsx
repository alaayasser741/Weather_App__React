import React, { Component } from "react";

const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <input type="text" placeholder="City..." />
            <input type="text" placeholder="Country..." />
            <input type="submit" value="Check" />
        </form>
    );

}
export default Form;