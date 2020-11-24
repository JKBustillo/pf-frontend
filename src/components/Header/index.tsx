import React, { useState } from 'react';
import './index.scss';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
    const [search, setSearch] = useState("");
    const history = useHistory();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setSearch("");
        history.push(`/${search}`);
    }

    return (
        <header>
            <div className="header-container">
                <h2><Link to="/">Polify</Link></h2>
                <form className="search" onSubmit={e => handleSubmit(e)}>
                    <input
                        type="text"
                        placeholder="Busca una cuenta de twitter"
                        name="search"
                        value={search}
                        autoComplete="off"
                        onChange={e => setSearch(e.target.value)}
                    />
                </form>
                <Link className="header-about" to="/classification">Clasificación</Link>
            </div>
        </header>
    );
}
 
export default Header;