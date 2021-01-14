
import React, { Component } from "react";
import Show from "./show"
const api = {
  key: "8347c4a44534529218ca14cd328469d4",
  base: "https://api.openweathermap.org/data/2.5/"
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp : "",
      query: "",
      pressure:"",
      visibility:"",
      windSpeed:"",
      weather:""
    };

    this.search = this.search.bind(this);
  }
  search(e) {
    fetch(`${api.base}weather?q=${this.city.value}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if(typeof(result.main) !== "undefined"){
        this.setState({
          temp: result.main.temp,
          query: this.city.value,
          pressure: result.main.pressure,
          visibility: result.visibility,
          windSpeed: result.wind.speed,
          weather: result.weather[0].description
        });
        }else{
          this.setState({
            query: "",
            temp: result.message
          });
        }
      });
    e.preventDefault();
  }
  render() {
    return (
      <div >
        <center>
        <div id="app" >
        
        <form onSubmit={this.search}>
          <input ref={(a) => this.city= a} placeholder="Enter City "></input>
          <button type="submit">Weather Conditions</button>

        </form>
        
        </div>
        
        
        
       
        <div>
           <Show query ={this.state.query} temp ={this.state.temp}
             pressure = {this.state.pressure} visibility ={this.state.visibility}
             windSpeed ={this.state.windSpeed}
             weather ={this.state.weather}/> 
        </div>
        </center>
        </div>
        
        
       
          
        
     
    );
  }
};

export default App;
