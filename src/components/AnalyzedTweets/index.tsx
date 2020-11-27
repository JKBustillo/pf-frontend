import React, { useEffect, useState } from 'react';
import { useCountUp } from 'react-countup';
import axios from 'axios';
import './index.scss';
 
const AnalyzedTweets= () => {
    const [totalAnalyzed, setTotalAnalyzed] = useState(0);
    const [todayAnalyzed, setTodayAnalyzed] = useState(0);
    const { countUp, start, pauseResume, reset, update } = useCountUp({
        start: 0,
        end: totalAnalyzed,
        delay: 1000,
        duration: 3,
        onReset: () => console.log(''),
        onUpdate: () => console.log(''),
        onPauseResume: () => console.log(''),
        onStart: ({ pauseResume }) => console.log(pauseResume),
        onEnd: ({ pauseResume }) => console.log(pauseResume),
    });

    useEffect(() => {
        const getAnalyzedTweets = async () => {
            const url = `${process.env.REACT_APP_URL_BACKEND}/tweet/count/today`;
            const url2 = `${process.env.REACT_APP_URL_BACKEND}/tweet/count`;

            const [today, total] = await Promise.all([
                axios(url),
                axios(url2)
            ]);

            setTodayAnalyzed(today.data.count);
            setTotalAnalyzed(total.data.count);
        };

        getAnalyzedTweets();
    }, []);

    update(totalAnalyzed);

    return (
        <div className="analyzedTweets-containter">
            <p>Tweets analizados</p>

            <div className="analyzedTweets-data">
                <div className="analyzedTweets-left">
                    <h2>Hoy</h2>
                    <h2>Total</h2>
                </div>
                <div className="analyzedTweets-right">
                    <h2>{todayAnalyzed}</h2>
                    <h2>{countUp}</h2>
                </div>
            </div>
        </div>
    );
}
 
export default AnalyzedTweets;