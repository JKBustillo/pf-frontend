import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <h2><Link to="/">Texto de ejemplo</Link></h2>
                <div className="search">
                    <input type="text" placeholder="Busca una cuenta de twitter" />
                    {/* <button>Go</button> */}
                </div>
                <button className="header-about"><Link to="/classification">About us</Link></button>
            </div>
        </header>
    );
}
 
export default Header;