import React, { useState, useEffect } from 'react';
import './index.scss';
import { Link, useHistory } from 'react-router-dom';
import AutoSuggest from 'react-autosuggest';
import axios from 'axios';
import { IRegion } from '../../util/interfaces';

const Header = () => {
    const history = useHistory();
    const [regionsBack, setRegionsBack] = useState<Array<IRegion>>([]);
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);

    useEffect(() => {
        const getRegions = async () => {
            const response = await axios(`${process.env.REACT_APP_URL_BACKEND}/region/search?name=${value}`);
            setRegionsBack(response.data);
        };

        getRegions();
    }, [value]);

    
    const lowerCasedregions = regionsBack.map(region => region._id);

    // Teach Autosuggest how to calculate suggestions for any given input value.
    function getSuggestions(value: string): string[] {
        return lowerCasedregions.filter(region =>
          region.startsWith(value.trim())
        );
    }

    return (
        <header>
            <div className="header-container">
                <h2><Link to="/"><span>P</span>oli<span>F</span>y</Link></h2>
                <form className="search" onSubmit={ e => {
                    e.preventDefault();
                }}>                    
                    <AutoSuggest
                        suggestions={suggestions}
                        onSuggestionsClearRequested={() => setSuggestions([])}
                        onSuggestionsFetchRequested={({ value }) => {
                            setValue(value);
                            setSuggestions(getSuggestions(value));
                        }}
                        onSuggestionSelected={(_, { suggestionValue }) => {
                            const name: string = `${suggestionValue[0].toUpperCase()}${suggestionValue.substring(1, suggestionValue.length)}`;
                            history.push(`/region/${name}`);
                            setValue(name);
                        }}
                        getSuggestionValue={suggestion => suggestion}
                        renderSuggestion={suggestion => <span>{suggestion}</span>}
                        inputProps={{
                        placeholder: "Busca un lugar del país",
                        value: value,
                            onChange: async (_, { newValue, method }) => {
                                setValue(newValue);
                            }
                        }}
                        highlightFirstSuggestion={true}
                    />
                </form>
                <Link className="header-about" to="/aboutus">Sobre nosotros</Link>
            </div>
        </header>
    );
}
 
export default Header;