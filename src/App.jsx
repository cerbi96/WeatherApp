import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./sass/app.scss";

import TopSection from "./components/top/index";
import BottomSection from "./components/bottom/index";


import axios from "axios";
import Weather from "./components/top/weather";

const WEATHER_KEY = "42a5a9a814ae4e37a80150506191504";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cityName: "London",
      forecastDays: 5,
    }
  }

  componentDidMount(){
    const { cityName,forecastDays} = this.state;
    const URL = `http://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}&q=${cityName}&days=${forecastDays}`;
    axios.get(URL).then((res)=>{
      console.log("DATA: ",res);
    }).catch((err)=>{
      if(err)
      console.error("Cannot fetch Weather Data from API",err);
    })
  }
  render() {
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="top-section"><TopSection/>
          </div>
          <div className="bottom-section"><BottomSection/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
