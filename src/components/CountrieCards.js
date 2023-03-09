import React from 'react';

const CountrieCards = ({ country }) => {
    const CountrieFlagssStyle = {
        backgroundImage: 'url(' + country.flags.svg + ')',
        backgroundPosition:'center',
        backgroundSize:'cover',
    };
    return (
        <div className='countrieContainer'>
            <div className="countrieflags" style={CountrieFlagssStyle} >
            </div>
            <div className="countrieinfo">
                <div className="infocontainer">
                    <h2>{country.name.common}</h2>
                    <p>Populations: {country.population.toLocaleString()}</p>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital}</p>
                </div>
            </div>
        </div>
    );
};

export default CountrieCards;