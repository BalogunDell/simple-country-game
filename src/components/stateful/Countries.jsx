import React from "react";
import { Link } from "react-router-dom";

class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      currentItemIndex: 0
    }
  }
  
  componentDidMount() {
  }

  render() {
    return(
      <div>
      <h1 className="header">List of countries</h1>
      <h5 className="header">Click on a country to play a 3 minutes game about the country</h5>
      <div className="country-info">
       { this.state.countries.length > 0
        ? 
        this.state.countries.map((country, index) => {
          return (
            <div
              className="country"
              key={index}>
              <Link to={`/countries/${country.alpha3Code}`}>
                <h3>{country.name}</h3>
                <img src={country.flag}/>
              </Link>
            </div>
          )
        })
        : 
          null
      }
      </div>
      </div>
    );
  }
}

export default Countries;