import React from 'react';
import HeaderBar from '../components/HeaderBar';
import { NavLink } from 'react-router-dom';
import DetailsCountrie from '../components/DetailsCountrie';

const Details = () => {
    return (
        <div>
            <HeaderBar />
            {
                <NavLink to={'/country'}>
                    <button className='btnback' onClick={() => { }}>
                        <i className="fas fa-long-arrow-alt-left"></i>
                        Back
                    </button>
                </NavLink>
            }
            <DetailsCountrie/>
        </div>
    );
};

export default Details;