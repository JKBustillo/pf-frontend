import React from 'react';
import { useParams } from 'react-router-dom';
import { IParams, ITweetResume } from '../../util/interfaces';
import Tweet from '../Tweet';
import './index.scss';
 
const Profile = () => {
    const { user } = useParams() as IParams;

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
        <div className="profile-container">
            <div className="profile-top">
                <div className="profile-name">
                    <h2>Nombre</h2>
                    <p>@{user}</p>
                </div>
                <p>No verificado</p>
            </div>

            <div className="profile-stats">
                <div className="incidences">
                    <h3>Número de incidencias:</h3>
                    <p>2000</p>
                </div>
                <div className="incidences">
                    <h3>Número de incidencias polarizantes:</h3>
                    <p>120</p>
                </div>

                <div className="graph">

                </div>
                <p className="polarizing-percentage">16.6% polarizante</p>
            </div>

            <div className="br" />

            <div className="profile-lastTweets">
                <h2 className="ultimos-p">Últimos tweets analizados</h2>
                <div className="lastAnalized-tweet-list">
                    {tweets.map(tweet => (
                        <Tweet tweet={tweet}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Profile;