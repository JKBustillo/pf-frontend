import React from 'react';
import './index.scss';
 
const AnalyzedTweets= () => {
    return (
        <div className="analyzedTweets-containter">
            <p>Tweets analizados</p>

            <div className="analyzedTweets-data">
                <div className="analyzedTweets-left">
                    <h2>Hoy</h2>
                    <h2>Total</h2>
                </div>
                <div className="analyzedTweets-right">
                    <h2>2301</h2>
                    <h2>2000312</h2>
                </div>
            </div>
        </div>
    );
}
 
export default AnalyzedTweets;