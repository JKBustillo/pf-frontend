import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IParams, ITweetResume, IUserResume } from '../../util/interfaces';
import Tweet from '../Tweet';
import './index.scss';
 
const Profile = () => {
    const [userDetails, setUserDetails] = useState<IUserResume>({
        _id: "",
        name: "",
        username: "",
        counter: 0,
        verified: false,
    });
    const { user } = useParams() as IParams;

    useEffect(() => {
        const getUserDetails = async () => {
            const response = await axios(`${process.env.REACT_APP_URL_BACKEND}/username/${user}/details`);

            setUserDetails(response.data);
        };

        getUserDetails();
    }, [user]);

    const tweets: Array<ITweetResume> = [
        {
            _id: "",
            tweetId: "",
            username: "Ninja",
            name: "@Ninja",
            createdAt: "2020-11-02T17:40:25.000Z",
        },
        {
            _id: "",
            tweetId: "",
            username: "Ninja",
            name: "@Ninja",
            createdAt: "2020-11-02T17:40:25.000Z",
        },
        {
            _id: "",
            tweetId: "",
            username: "Ninja",
            name: "@Ninja",
            createdAt: "2020-11-02T17:40:25.000Z",
        },
        {
            _id: "",
            tweetId: "",
            username: "Ninja",
            name: "@Ninja",
            createdAt: "2020-11-02T17:40:25.000Z",
        },
        {
            _id: "",
            tweetId: "",
            username: "Ninja",
            name: "@Ninja",
            createdAt: "2020-11-02T17:40:25.000Z",
        },
        {
            _id: "",
            tweetId: "",
            username: "Ninja",
            name: "@Ninja",
            createdAt: "2020-11-02T17:40:25.000Z",
        },
        {
            _id: "",
            tweetId: "",
            username: "Ninja",
            name: "@Ninja",
            createdAt: "2020-11-02T17:40:25.000Z",
        },
    ];

    return (
        <div className="profile-container">
            <div className="profile-top">
                <div className="profile-name">
                    <h2>{userDetails.name}</h2>
                    <p>@{user}</p>
                </div>
                <p>{userDetails.verified ? "Verificado" : "No verificado"}</p>
            </div>

            <div className="profile-stats">
                <div className="incidences">
                    <h3>Número de incidencias:</h3>
                    <p>{userDetails.counter}</p>
                </div>
                <div className="incidences">
                    <h3>Número de incidencias polarizantes:</h3>
                    <p>0</p>
                </div>

                <div className="graph">

                </div>
                <p className="polarizing-percentage">{0/userDetails.counter*100}% polarizante</p>
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