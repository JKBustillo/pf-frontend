import React, { useState, useEffect } from 'react';
import Tweet from '../Tweet';
import './index.scss';
import axios from 'axios';
 
const LastAnalyzedTweets = () => {
    const [lastTweets, setLastTweets] = useState([]);

    useEffect(() => {
        const getLastTweets = async () => {
            const response = await axios(`${process.env.REACT_APP_URL_BACKEND}/tweet/latest`);
            setLastTweets(response.data);
            console.log(response.data);
        };

        getLastTweets();
    }, []);

    return (
        <div className="lastAnalized-container">
            <h2 className="ultimos-p">Últimos tweets analizados</h2>
            <div className="lastAnalized-tweet-list">
                {lastTweets.map(tweet => (
                    <Tweet tweet={tweet}/>
                ))}
            </div>
        </div>
    );
}
 
export default LastAnalyzedTweets;