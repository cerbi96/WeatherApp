import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "./sass/app.scss";

import TopSection from "./components/top/index";
import BottomSection from "./components/bottom/index";

import axios from "axios";
import Weather from "./components/top/weather";

const WEATHER_KEY = "42a5a9a814ae4e37a80150506191504";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "London",
      forecastDays: 5,
      isloading: true
    };
  }

  componentDidMount() {
    const { cityName, forecastDays } = this.state;
    const URL = `http://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}&q=${cityName}&days=${forecastDays}`;
    axios
      .get(URL)
      .then(res => {
        console.log(res.data);
        return res.data;
        
      })
      .then(data => {
        this.setState({
          isLoading:false,
          temp_c: data.current.temp_c,
          isDay: data.current.is_day,
          text: data.current.condition.text,
          iconURL: data.current.condition.icon
        });
      })
      .catch(err => {
        if (err) console.error("Cannot fetch Weather Data from API", err);
      });
  }

  componentWillUnmount() {}

  render() {
    const { isLoading,cityName, temp_c, isDay, text, iconURL } = this.state;

    return (
      <div className="app-container">
        <div className="main-container">
          {isLoading&& <h3>Loading in progress ...</h3>}
          <div className="top-section">
            <TopSection
              location={cityName}
              temp_c={temp_c}
              isDay={isDay}
              text={text}
              iconURL={iconURL}
            />
          </div>
          <div className="bottom-section">
            <BottomSection />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
