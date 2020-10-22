import React from 'react';
import './index.scss';

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <h2>Texto de ejemplo</h2>
                <div className="search">
                    <input type="text" placeholder="Busca una cuenta de twitter" />
                    {/* <button>Go</button> */}
                </div>
                <button className="header-about">About us</button>
            </div>
        </header>
    );
}
 
export default Header;