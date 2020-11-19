import * as React from 'react';
import './index.scss';
import { ITweetResume } from '../../util/interfaces';
import { Link } from 'react-router-dom';
 
const Tweet = (props: {tweet: ITweetResume}) => {
    return (
        <div className="tweet-container">
            <div className="tweet-one">
                <p className="username-p">{props.tweet.name}</p>
                <p>@{props.tweet.username}</p>
                <p>{props.tweet.createdAt.substring(0, props.tweet.createdAt.indexOf("T"))}</p>
            </div>
            <div className="tweet-two">
                <p>Polarización: {(props.tweet.sentimentScore.negative*100).toFixed(1)}%</p>
                <p>
                    <Link
                        to={`/${props.tweet.username}`}
                    >Detalles del perfil</Link>
                    &nbsp;
                </p>
                <p>
                    <Link
                        to={`/${props.tweet.username}/${props.tweet.tweetId}`}
                    >Detalles del tweet</Link>
                </p>
            </div>
        </div>
    );
}
 
export default Tweet;