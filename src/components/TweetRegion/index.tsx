import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import './index.scss';
import { ITweetDetails } from '../../util/interfaces';
 
const TweetRegion = (props: { region: string, tweetId: string, text: string }) => {
    const [tweetDetails, setTweetDetails] = useState<ITweetDetails>({
        tweet: {
            createdAt: "",
            political: false,
            text: "",
            accuracy: {
                political: 0,
            },
            sentimentScore: {
                negative: 0
            },
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

    useEffect(() => {
        const getUserDetails = async () => {
            try {
                const response = await axios(`${process.env.REACT_APP_URL_BACKEND}/tweet/${props.tweetId}/details`);
                
                setTweetDetails(response.data);
            } catch (error) {
            }
        };

        getUserDetails();
    }, [props.tweetId]);

    return (
        <div className="tweetRegion-container">
            <div className="tweetRegion-top">
                <div className="tweetRegion-name">
                    <h3>@{tweetDetails.user.username}</h3>
                </div>
                <div className="tweetRegion-other">
                    <p>{tweetDetails.user.verified ? "Verificado" : "No verificado"}</p>
                    <p>{tweetDetails.tweet.createdAt !== "" && moment(new Date(tweetDetails.tweet.createdAt)).format('YYYY-MM-DD')}</p>
                </div>
            </div>

            <div className="tweetRegion-content">
                <p>{props.text}</p>
            </div>
            
            <div className="tweetRegion-stats">
                <div className="tweetRegion-incidences">
                    <h3>Político:</h3>
                    <p>{(tweetDetails.tweet.accuracy.political*100).toFixed(1)}%</p>
                </div>
                <div className="tweetRegion-incidences">
                    <h3>Nivel de odio:</h3>
                    <p>{(tweetDetails.tweet.sentimentScore.negative*100).toFixed(1)}%</p>
                </div>
            </div>

            <div className="tweetRegion-links">
                <a href={`https://www.twitter.com/${tweetDetails.user.username}/status/${props.tweetId}`} target="_blank" rel="noopener noreferrer">Ir al tweet</a>
            </div>
        </div>
    );
}
 
export default TweetRegion;