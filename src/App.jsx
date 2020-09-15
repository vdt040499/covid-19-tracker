import { FormControl, MenuItem, Select } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  //STATE = how to write a variable in REACT
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  //USEEFFECT = runs a piece of code based on a given condition
  //https://disease.sh/v3/covid-19/countries
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then(response => response.json())
      .then(data => {
        const countries = data.map(country => (
          {
            name: country.country, //United States, United Kingdom
            value: country.countryInfo.iso2 //UK, USA, FR
          }
        ));

        setCountries(countries);
      })
    }
    getCountriesData();
  }, []);

  const onCoutryChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  }

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country} onChange={onCoutryChange}>
            <MenuItem value="worldwide">WorldWide</MenuItem>
            {
              countries.map(country => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </div>
    
      {/* Header */}
      {/* Title * Select input dropdown field */}

      {/* InfoBoxs */}
      {/* InfoBoxs */}
      {/* InfoBoxs */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
