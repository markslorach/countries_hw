import React, { useState, useEffect } from 'react'
import CountrySelector from '../components/CountrySelector'
import Country from '../components/Country';

const CountriesContainer = () => {
    
    const [countries, setCountries] = useState([])
    const [selectedCountryCCA3Code, setSelectedCountryCCACode] = useState('')

    const getCountries = () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(countriesData => setCountries(countriesData))
    }

    useEffect(() => {
        getCountries()
    }, [])

    const handleCountrySelected = cca3 => {
        setSelectedCountryCCACode(cca3)
    }

    const selectedCountry = countries.find(
        country => country.cca3 === selectedCountryCCA3Code
    )

    const totalPopulation = countries.reduce((total, country) => total + country.population, 0);

    return (
        <>   
        <h1>Countries</h1>
        <CountrySelector countries={countries} onCountrySelected={handleCountrySelected}/>
        <Country country={selectedCountry}/>
        <p><b>World Population:</b> {totalPopulation}</p>    
        </>
    )
};


export default CountriesContainer;