import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./DetailsWeather.css";
class DetailsWeather extends React.Component {
  state = {
    input: ""
  };

  render() {
  

    
    var items = this.props.details.map((detail) => 
    <li>{detail.dt_txt.substr(11,5)}</li>
    );
    var l = [];
    var id;
    for(var i=1;i<8;i++){
      id =items[0]._self.props.details[i].weather[0].id; 
      if(id>801)
      l.push(<div>
        <div className="time">{items[0]._self.props.details[i].dt_txt.substr(11,5)}</div>
          <img src={require('../img/weather-icons/mostlycloudy.svg')} alt="storm icon" />
          <div className="day">{this.props.details[i].main.temp}<span>&#176;</span>C</div>
        </div>);

else if(id==801)
l.push(<div>
  <div className="time">{items[0]._self.props.details[i].dt_txt.substr(11,5)}</div>
    <img src={require('../img/weather-icons/partlycloudy.svg')} alt="storm icon" />
    <div className="day">{this.props.details[i].main.temp}<span>&#176;</span>C</div>
  </div>);
  else if(id==800)
  l.push(<div>
    <div className="time">{items[0]._self.props.details[i].dt_txt.substr(11,5)}</div>
      <img src={require('../img/weather-icons/clear.svg')} alt="storm icon" />
      <div className="day">{this.props.details[i].main.temp}<span>&#176;</span>C</div>
    </div>);



else if(id>=700)
l.push(<div>
  <div className="time">{items[0]._self.props.details[i].dt_txt.substr(11,5)}</div>
    <img src={require('../img/weather-icons/fog.svg')} alt="storm icon" />
    <div className="day">{this.props.details[i].main.temp}<span>&#176;</span>C</div>
  </div>);
  else if(id>=600)
  l.push(<div>
    <div className="time">{items[0]._self.props.details[i].dt_txt.substr(11,5)}</div>
      <img src={require('../img/weather-icons/snow.svg')} alt="storm icon" />
      <div className="day">{this.props.details[i].main.temp}<span>&#176;</span>C</div>
    </div>);


else if(id>=500)
l.push(<div>
  <div className="time">{items[0]._self.props.details[i].dt_txt.substr(11,5)}</div>
    <img src={require('../img/weather-icons/rain.svg')} alt="storm icon" />
    <div className="day">{this.props.details[i].main.temp}<span>&#176;</span>C</div>
  </div>);

else if(id>=300)
l.push(<div>
  <div className="time">{items[0]._self.props.details[i].dt_txt.substr(11,5)}</div>
    <img src={require('../img/weather-icons/drizzle.svg')} alt="storm icon" />
    <div className="day">{this.props.details[i].main.temp}<span>&#176;</span>C</div>
  </div>);
  else if(id<300)
  l.push(<div>
    <div className="time">{items[0]._self.props.details[i].dt_txt.substr(11,5)}</div>
      <img src={require('../img/weather-icons/storm.svg')} alt="storm icon" />
      <div className="day">{this.props.details[i].main.temp}<span>&#176;</span>C</div>
    </div>);


  

 }
 return (
   <div className="times">
         {l}
       </div>
 );
}
}
export default DetailsWeather;
 
 
