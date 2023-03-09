import React, { useState } from 'react';
import Countries from './Countries';

const MainPart = () => {
    const continents = ["Africa", "America", "Asia", "Europe", "Oceania"];
    const [searchTerm, setSearchTerm] = useState('');
    const iconVisibility = searchTerm ? "hidden" : "visible";
    const [selectedRegion, setSelectedRegion] = useState('');

    const handleRegionChange = (event) => {
        const region = event.target.textContent;
        setSelectedRegion(region);
    };

    return (
        <div className='main'>
            <div className='btnline'>
                <div className='imptPosition'>
                    <input
                        type="text"
                        name="imputSearche"
                        id="imputSearche"
                        className='imputSearche'
                        placeholder='Search for a country'
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                    />
                    <i className="fas fa-search" id='searcheicone' style={{ visibility: iconVisibility }}></i>
                </div>
                {(selectedRegion || searchTerm) && (
                    <button
                        onClick={() => {
                            setSelectedRegion('')
                            setSearchTerm('')
                        }}
                        className='annuler'
                    >
                        Annuler la recherche
                    </button>
                )}
                <div className='selectRegion' id='selectRegion'>
                    <p id='title'>{selectedRegion || 'Filter By Region'}</p>
                    <i className="fas fa-angle-down"></i>
                    <ul className='itemsSelection' onClick={handleRegionChange}>
                        {
                            continents.map((cont, index) => (
                                <li
                                    id={cont}
                                    key={index}
                                >
                                    {cont}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <Countries imputValue={searchTerm} selectedRegion={selectedRegion} />
        </div>
    );
};

export default MainPart;