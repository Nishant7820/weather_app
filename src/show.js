import React, { Component } from "react";


class Show extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        let query = this.props.query;
        let temp = this.props.temp;
        let pressure = this.props.pressure;
        let visibility = this.props.visibility;
        let windSpeed = this.props.windSpeed;
        let weather = this.props.weather;
        if (query !== "") {
            return (
                <div id="show">

                    <center>
                        <h2>Weather forcast in  {query}</h2>
                        <h3>Temperature : {temp}<sup>0</sup>C</h3>
                        <h3>weather : {weather}</h3>
                        <h3>Pressure : {pressure} Pa </h3>
                        <h3>Wind Speed : {windSpeed} mps</h3>
                        <h3>Visibility : {visibility} m</h3>
                        
                    </center>
                </div>
            );
        }
        else {
            return (
                <div id="show">

                    <center>
                        <h2>{temp}</h2>
                    </center>
                </div>
            );
        }
    }
}
export default Show;