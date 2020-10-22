import React from 'react';
import Tweet from '../Tweet';
import { ITweetResume } from '../../util/interfaces';
import './index.scss';
 
const LastAnalyzedTweets = () => {
    const tweets: Array<ITweetResume> = [
        {
            username: "Ninja",
            user: "@Ninja",
            date: "20/10/12",
            polarizationRate: "80%",
            politicalRate: "60%",
            profileLink: "https://twitter.com/Juan_PRH",
            tweetLink: "https://twitter.com/Juan_PRH/status/1313332363406049281",
        },
        {
            username: "Ninja",
            user: "@Ninja",
            date: "20/10/12",
            polarizationRate: "80%",
            politicalRate: "60%",
            profileLink: "https://twitter.com/Juan_PRH",
            tweetLink: "https://twitter.com/Juan_PRH/status/1313332363406049281",
        },
        {
            username: "Ninja",
            user: "@Ninja",
            date: "20/10/12",
            polarizationRate: "80%",
            politicalRate: "60%",
            profileLink: "https://twitter.com/Juan_PRH",
            tweetLink: "https://twitter.com/Juan_PRH/status/1313332363406049281",
        },
        {
            username: "Ninja",
            user: "@Ninja",
            date: "20/10/12",
            polarizationRate: "80%",
            politicalRate: "60%",
            profileLink: "https://twitter.com/Juan_PRH",
            tweetLink: "https://twitter.com/Juan_PRH/status/1313332363406049281",
        },
        {
            username: "Ninja",
            user: "@Ninja",
            date: "20/10/12",
            polarizationRate: "80%",
            politicalRate: "60%",
            profileLink: "https://twitter.com/Juan_PRH",
            tweetLink: "https://twitter.com/Juan_PRH/status/1313332363406049281",
        },
        {
            username: "Ninja",
            user: "@Ninja",
            date: "20/10/12",
            polarizationRate: "80%",
            politicalRate: "60%",
            profileLink: "https://twitter.com/Juan_PRH",
            tweetLink: "https://twitter.com/Juan_PRH/status/1313332363406049281",
        },
        {
            username: "Ninja",
            user: "@Ninja",
            date: "20/10/12",
            polarizationRate: "80%",
            politicalRate: "60%",
            profileLink: "https://twitter.com/Juan_PRH",
            tweetLink: "https://twitter.com/Juan_PRH/status/1313332363406049281",
        },
    ];

    return (
        <div className="lastAnalized-container">
            <h2 className="ultimos-p">Últimos tweets analizados</h2>
            <div className="lastAnalized-tweet-list">
                {tweets.map(tweet => (
                    <Tweet tweet={tweet}/>
                ))}
            </div>
        </div>
    );
}
 
export default LastAnalyzedTweets;