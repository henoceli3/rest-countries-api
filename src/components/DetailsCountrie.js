/* eslint-disable no-undef */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailsCountrie = () => {

    const [country, setCountry] = useState(null);
    const { name } = useParams(); // récupération du nom du pays dans l'URL

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${name}`)
            .then(response => setCountry(response.data[0]))
            .catch(error => console.log(error));
    }, [name]);

    const loadingStyle = {}

    if (!country) {
        return <div style={loadingStyle}>Loading...</div>
    }

    const countryFlagStyle = {
        backgroundImage: 'url(' + country.flags.svg + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }

    return (
        <div className='Details'>
            <div className="containerDetails">
                <div className="flag-part" style={countryFlagStyle}></div>
                <div className="detail-of-countrie">
                    <div className="details-container">
                        <div className="first-line">
                            <h2>{country.name.common}</h2>
                        </div>
                        <div className="seconde-line">
                            <div className="parte-one-seconde-line">
                                <span className='key'>
                                    <p><strong>Native Name:</strong>  {country.demonyms.eng.f}</p>
                                </span>
                                <span className='key'>
                                    <p><strong>Population:</strong>  {country.population.toLocaleString()}</p>
                                </span>
                                <span className='key'>
                                    <p><strong>Region:</strong>   {country.region}</p>
                                </span>
                                <span className='key'>
                                    <p><strong>Sub Region:</strong>  {country.subregion}</p>
                                </span>
                                <span className='key'>
                                    <p><strong>Capital:</strong>  {country.capital}</p>
                                </span>
                            </div>
                            <div className="parte-two-seconde-line">
                                <span className='key'>
                                    <p><strong>Top Level Domain:</strong>  {country.tld}</p>
                                </span>
                                <span className='key'>
                                    <p><strong>Currencies: </strong></p>
                                </span>
                                <span className='key'>
                                    <p><strong>Language:</strong></p>
                                </span>
                            </div>
                        </div>
                        <div className="Third-line">
                            {country.borders && <p><strong>Border Countries:</strong>  {country.borders.map((bordersCountry, index) => (<span key={index} className='limite'>{bordersCountry}</span>))} </p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCountrie;