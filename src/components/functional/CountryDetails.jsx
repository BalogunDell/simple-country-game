import React from 'react';
import './style.css';

const CountryDetails = (props) => {
  const { selectedCountry, chooseAnotherCountry } = props;
  return (
    <div className="country-details-container">
      <div className="details">
        <div className="details-header">
          <img src={selectedCountry.flag} alt="Country flag" />
          <h4>{selectedCountry.name}</h4>
        </div>


        <div>
          <h5>Capital</h5>
          <ul><li>{selectedCountry.capital}</li></ul>
        </div>

        <div>
          <h5>Country Code</h5>
          <ul><li>{selectedCountry.alpha3Code}</li></ul>
        </div>

        <div>
          <h5>Currencies</h5>
          <ul>
            {selectedCountry.currencies.map((currency, index) => (
              <li key={index}>
                Code:
                {currency.code}
                Name:
                {currency.name}
                Symbol:
                {currency.symbol}
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h5>Borders</h5>
          {
               selectedCountry.borders.length > 0
                 ? (
                   <p>
                     {selectedCountry.borders.map((border, index) => {
                       return index === selectedCountry.borders.length - 1
                         ? border : `${border},`;
                     })}
                   </p>
                 )
                 : 'Nil'
          }
        </div>

        <div>
          <h5>Languges</h5>
          {
               selectedCountry.languages.length > 0
                 ? (
                   <p>
                     {selectedCountry.languages.map((language, index) => {
                       return index === selectedCountry.languages.length - 1
                         ? language.name : `${language.name},`;
                     })}
                   </p>
                 ) : 'Nil'
          }
        </div>

      </div>
      <div className="buttons">
        <button type="button">Start game</button>
        <button type="button" onClick={chooseAnotherCountry}>Choose another country</button>
      </div>
    </div>
  );
};

export default CountryDetails;
