import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  fetchCountries,
  getSelectedCountry
} from '../../redux/actions';

import CountryDetails from '../functional/CountryDetails';

class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selectedCountry: {},
    };
    this.getSelectedCountry = this.getSelectedCountry.bind(this);
    this.chooseAnotherCountry = this.chooseAnotherCountry.bind(this);
  }

  componentDidMount() {
    this.props.fetchCountries();
  }

  componentWillReceiveProps(nextProps) {
    const {
      countries,
      showModal,
      selectedCountry 
    } = nextProps.currentState;

    if (countries) {
      this.setState({ countries });
    }

    if (showModal && selectedCountry) {
      this.setState({ showModal, selectedCountry });
    }
  }

  getSelectedCountry(event) {
    event.preventDefault();
    const selectedCountry = JSON.parse(event.target.dataset.country);
    this.props.getSelectedCountry({
      country: selectedCountry,
      showModal: true,
    });
  }

  chooseAnotherCountry() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        { this.state.showModal  && (
        <CountryDetails
          selectedCountry={this.state.selectedCountry}
          chooseAnotherCountry={this.chooseAnotherCountry}
        />
        )}
        <div>
          <h1 className="header">List of countries</h1>
          <h5 className="header">
Click on a country flag to play a 3 minutes
            game about the country
          </h5>
          <div className="country-info">
            { this.state.countries.length > 0
              ? this.state.countries.map((country, index) => {
                return (
                  <div>
                  className="country"
                  key={index}
>
                    <Link
                      to={`/countries/${country.alpha3Code}`}
                    >
                      <div>
                        <h3>{country.name}</h3>
                        <img
                          alt={country.name}
                          src={country.flag}
                          onClick={this.getSelectedCountry}
                          data-country={JSON.stringify(country)}/>
                      </div>
                    </Link>
                  </div>
                );
              })
              : null
          }
          </div>
        </div>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    currentState: state,
  };
};

export default connect(stateToProps, {
  fetchCountries,
  getSelectedCountry,
})(Countries);
