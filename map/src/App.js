import React, { Component } from 'react';
import './App.css';
import USAMap from "react-usa-map";


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      stateName: "Click State",
        postal: "Click State",
        capital: "Click State",
        population: "Click State"
    }
  }
  stateNameConverter = (stateName) => {
    const stateMap = {
      AL: "Alabama",
      AK: "Alaska",
      AZ: "Arizona",
      AR: "Arkansas",
      CA: "California",
      CO: "Colorado",
      CT: "Connecticut",
      DE: "Delaware",
      FL: "Florida",
      GA: "Georgia",
      HI: "Hawaii",
      ID: "Idaho",
      IL: "Illinois",
      IN: "Indiana",
      IA: "Iowa",
      KS: "Kansas",
      KY: "Kentucky",
      LA: "Louisiana",
      ME: "Maine",
      MD: "Maryland",
      MA: "Massachusetts",
      MI: "Michigan",
      MN: "Minnesota",
      MS: "Mississippi",
      MO: "Missouri",
      MT: "Montana",
      NE: "Nebraska",
      NV: "Nevada",
      NH: "New Hampshire",
      NJ: "New Jersey",
      NM: "New Mexico",
      NY: "New York",
      NC: "North Carolina",
      ND: "North Dakota",
      OH: "Ohio",
      OK: "Oklahoma",
      OR: "Oregon",
      PA: "Pennsylvania",
      RI: "Rhode Island",
      SC: "South Carolina",
      SD: "South Dakota",
      TN: "Tennessee",
      TX: "Texas",
      UT: "Utah",
      VT: "Vermont",
      VA: "Virginia",
      WA: "Washington",
      WV: "West Virginia",
      WI: "Wisconsin",
      WY: "Wyoming",
    };

    return stateMap[stateName];
  }
  mapHandler = (event) => {
    let stateCalled = this.stateNameConverter(event.target.dataset.name)
    let stateCalledPostal = event.target.dataset.name
    let url = 'http://localhost:5000/' + stateCalled
    fetch(url, {method: "POST"})
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({
        stateName: stateCalled,
        postal: stateCalledPostal,
        capital: data["capital"]["name"],
        population: data["population"]["total"]
        
      })
    })
    //.then(data => alert(data.status))
    // alert(this.stateNameConverter(event.target.dataset.name));
  }; 

  

  render() {
    return (
      <div className='flex'>
        <div className="App">
          <h1>USA Map</h1>
          <USAMap  onClick={this.mapHandler} />
        </div>
        <div>
          {Object.keys(this.state).map(key => 
            <p key={key}>{key.split("_").map(str => str[0].toUpperCase() + str.slice(1, str.length)).join(" ") + " : " + this.state[key]}</p>
          )}

          
        </div>

      </div>
    );
  }
}

export default App;
