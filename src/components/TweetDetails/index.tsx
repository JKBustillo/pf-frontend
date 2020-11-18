import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { IParams, ITweetDetails } from '../../util/interfaces';
import './index.scss';
 
const TweetDetails = () => {
    const [tweetDetails, setTweetDetails] = useState<ITweetDetails>({
        tweet: {
            createdAt: "",
            political: false,
            text: "",
            sentimentScore: {
                negative: 0
            }
        },
        user: {
            _id: "",
            name: "",
            username: "",
            counter: {
                political: 0,
                hate: 0,
            },
            verified: false,
        }
    });
    const { tweetid } = useParams() as IParams;

    useEffect(() => {
        const getUserDetails = async () => {
            const response = await axios(`${process.env.REACT_APP_URL_BACKEND}/tweet/${tweetid}/details`);

            setTweetDetails(response.data);
            console.log(response.data);
        };

        getUserDetails();
    }, [tweetid]);

    const { tweet, user } = tweetDetails;

    var momentString = moment(new Date(tweet.createdAt)).format('YYYY-MM-DD');
    console.log(momentString);

    return (
        <div className="tweetDetails-container">
            <div className="tweetDetails-top">
                <div className="tweetDetails-name">
                    <h2>{user.name}</h2>
                    <p>@{user.username}</p>
                </div>
                <div className="tweetDetails-other">
                    <p>{user.verified ? "Verificado" : "No verificado"}</p>
                    <p>{tweet.createdAt !== "" && moment(new Date(tweet.createdAt)).format('YYYY-MM-DD')}</p>
                </div>
            </div>

            <div className="tweetDetails-content">
                <p>{tweet.text}</p>
            </div>

            <div className="tweetDetails-stats">
                <div className="tweetDetails-incidences">
                    <h3>Político:</h3>
                    <p>{tweet.political === true ? "Sí" : "No"}</p>
                </div>
                <div className="tweetDetails-incidences">
                    <h3>Nivel de odio:</h3>
                    <p>{(tweet.sentimentScore.negative*100).toFixed(1)}%</p>
                </div>
            </div>

            <div className="tweetDetails-links">    
                <a href={`https://www.twitter.com/${user.username}`} target="_blank" rel="noopener noreferrer">Ir al perfil</a>
                <a href={`https://www.twitter.com/${user.username}/status/${tweetid}`} target="_blank" rel="noopener noreferrer">Ir al tweet</a>
            </div>
        </div>
    );
}
 
export default TweetDetails;