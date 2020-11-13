import React, { useState, useEffect } from 'react';
import Tweet from '../Tweet';
import './index.scss';
import axios from 'axios';
import { ITweetResume } from '../../util/interfaces';
 
const LastAnalyzedTweets = () => {
    const [lastTweets, setLastTweets] = useState<Array<ITweetResume>>([]);

    useEffect(() => {
        const getLastTweets = async () => {
            const response = await axios(`${process.env.REACT_APP_URL_BACKEND}/tweet/latest`);
            setLastTweets(response.data);
        };

        getLastTweets();
    }, []);

    return (
        <div className="lastAnalized-container">
            <h2 className="ultimos-p">Últimos tweets analizados</h2>
            <div className="lastAnalized-tweet-list">
                {lastTweets.map(tweet => (
                    <Tweet
                        key={tweet._id}
                        tweet={tweet}
                    />
                ))}
            </div>
        </div>
    );
}
 
export default LastAnalyzedTweets;