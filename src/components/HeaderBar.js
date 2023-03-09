import React, { useEffect, useState } from 'react';


const HeaderBar = () => {
    const [isLigthMode, setisLigthMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('light-mode');
    }, [isLigthMode]);

    return (
        <div className='header'>
            <div className='logo'>
                <h2 className='logo'>Where In The World?</h2>
            </div>
            <div className="btndarkmode" onClick={() => setisLigthMode(!isLigthMode)}>
                <span>
                    {isLigthMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                </span>
                {isLigthMode ? <p>Light Mode</p> : <p>Dark Mode</p>}
            </div>
        </div>
    );
};

export default HeaderBar;