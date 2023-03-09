import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CountrieCards from './CountrieCards';
import { NavLink } from 'react-router-dom';

const Countries = ({ imputValue, selectedRegion }) => {
    const [data, setData] = useState([]);

    // le useEffect se joue lorsquue le composant est montée
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then((res) => { setData(res.data) })
    }, [])

    // translations.fra pour rechercher en français
    return (
        <div className='countries'>
            {data
                .filter((country) => country.continents[0].includes(selectedRegion))
                .filter((country) => country.name.common.toLowerCase().includes(imputValue.toLowerCase()))
                .sort((a, b) => a.name.common.localeCompare(b.name.common))
                .map((country, index) => (
                    <NavLink  to={`/country/${country.name.common}`} className='countriecards' key={index}>
                        <CountrieCards country={country} />
                    </NavLink>
                ))
            }
        </div>
    );
};

export default Countries;