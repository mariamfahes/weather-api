import React, { Component } from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import DetailsWeather from "./components/DetailsWeather";
import Storm from "./img/weather-icons/storm.svg";
import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
var name ="Beirut";
var colorClass = "cloud"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role:undefined,
    };
  }

  handleInputChange = value => {
    var color = colorClass === "cloud" ? "rain" : "cloud";
    colorClass = color;
    name = value;
    this.changeWeather(value);
  };



  changeWeather(e){
    fetch("http://api.openweathermap.org/data/2.5/forecast?q="+e+"&cnt=8&units=metric&appid=9dca129138f3d645df1691dddad3606e")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            role:result,
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );

  }
  componentDidMount() {
  

    fetch("http://api.openweathermap.org/data/2.5/forecast?q="+name+"&cnt=8&units=metric&appid=9dca129138f3d645df1691dddad3606e")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            role:result,
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );

  }

  render() {
    var { error, isLoaded, items } = this.state;
    if(isLoaded){
      var x = this.state.role;
    var list= x.list;
    console.log("hi")
   console.log(list);
  
    var cur;
    var c = [];

    var id = list[0].weather[0].id;
    if(id==800)
      colorClass="clear";
    else if(id<700)
    colorClass="rain";
    else colorClass="cloud";
    for(var i=0;i<list.length;i++){
      if( list[i].dt_txt.localeCompare("2017-02-17 03:00:00") == 0)
      if( list[i].dt_txt.localeCompare("2017-02-17 03:00:00") === 0)
      {
        cur = i;
      }
      console.log(list[i].main.temp);


      
      
      list[i].main.temp = Math.round(list[i].main.temp);
      list[i].main.temp_min = Math.round(list[i].main.temp_min);
      list[i].main.temp_max = Math.round(list[i].main.temp_max);

      
        c.push(list[i]);



    }
    


    function sortf(a,b){
      return a.dt_txt.localeCompare(b.dt_txt);
    }
    c.sort(sortf);
  }

    if (!isLoaded ) {
       return <div>Loading...</div>;
    }
    else{
    return (
  

        
        <div className="details">
        <div className={`${colorClass}`}>
          <Search weather={"FIND WEATHER"} handleInput={this.handleInputChange} />
          <CurrentWeather currentweather = {list[0]} handleInput={this.handleInputChange} />
         <DetailsWeather details = {c} handleInput={this.handleInputChange} />
          
          </div></div>
    
    );
    }
  }
}

export default App;
