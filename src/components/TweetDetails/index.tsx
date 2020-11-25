import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { IParams, ITweetDetails, ITweetResume } from '../../util/interfaces';
import './index.scss';
import Tweet from '../Tweet';
 
const TweetDetails = () => {
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
    const [tweet1, setTweet1] = useState<ITweetResume>({
        _id: "",
        tweetId: "",
        name: "",
        username: "",
        createdAt: "",
        sentimentScore: {
            negative: 0,
        }
    });
    const [tweet2, setTweet2] = useState<ITweetResume>({
        _id: "",
        tweetId: "",
        name: "",
        username: "",
        createdAt: "",
        sentimentScore: {
            negative: 0,
        }
    });
    const [tweetError, setTweetError] = useState(false);
    const { tweetid } = useParams() as IParams;

    useEffect(() => {
        const getUserDetails = async () => {
            try {
                const url =`${process.env.REACT_APP_URL_BACKEND}/tweet/${tweetid}/details`;
                const url1 =`${process.env.REACT_APP_URL_BACKEND}/tweet/random/political`;
                const url2 =`${process.env.REACT_APP_URL_BACKEND}/tweet/random/political`;

                const [response, responseTweet1, responseTweet2] = await Promise.all([
                    axios(url),
                    axios(url1),
                    axios(url2)
                ]);

                setTweetDetails(response.data);
                setTweet1(responseTweet1.data);
                setTweet2(responseTweet2.data);

                console.log(responseTweet1.data);
                
                const responseUser1 = await axios(`${process.env.REACT_APP_URL_BACKEND}/tweet/${responseTweet1.data.tweetId}/details`);
                const responseUser2 = await axios(`${process.env.REACT_APP_URL_BACKEND}/tweet/${responseTweet2.data.tweetId}/details`);

                setTweet1({
                    _id: responseTweet1.data._id,
                    tweetId: responseTweet1.data.tweetId,
                    sentimentScore: {
                        negative: responseTweet1.data.sentimentScore.negative,
                    },
                    username: responseUser1.data.user.username,
                    name: responseUser1.data.user.name,
                    createdAt: moment(new Date(responseTweet1.data.createdAt)).format('YYYY-MM-DD')+"T"
                });
                setTweet2({
                    _id: responseTweet2.data._id,
                    tweetId: responseTweet2.data.tweetId,
                    sentimentScore: {
                        negative: responseTweet2.data.sentimentScore.negative,
                    },
                    username: responseUser2.data.user.username,
                    name: responseUser2.data.user.name,
                    createdAt: moment(new Date(responseTweet2.data.createdAt)).format('YYYY-MM-DD')+"T"
                });
                setTweetError(false);
            } catch (error) {
                setTweetError(true);
            }
        };

        getUserDetails();
    }, [tweetid]);

    const { tweet, user } = tweetDetails;

    return (
        <div className="tweetDetails-container">
            { tweetError ?
                <h1>Este tweet no existe o no ha sido analizado por nosotros</h1>    
            :
                <Fragment>
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
                            <p>{(tweet.accuracy.political*100).toFixed(1)}%</p>
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

                    <h1 className="other-tweets">Otros tweets</h1>

                    <div>
                        <Tweet tweet={tweet1} />
                        <Tweet tweet={tweet2} />
                    </div>
                </Fragment>
            }
        </div>
    );
}
 
export default TweetDetails;