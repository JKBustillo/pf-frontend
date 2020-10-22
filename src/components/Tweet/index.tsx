import * as React from 'react';
import './index.scss';
import { ITweetResume } from '../../util/interfaces';
 
const Tweet = (props: {tweet: ITweetResume}) => {
    return (
        <div className="tweet-container">
            <div className="tweet-one">
                <p className="username-p">{props.tweet.username}</p>
                <p>{props.tweet.user}</p>
                <p>{props.tweet.date}</p>
            </div>
            <div className="tweet-two">
                <p>Polarización: {props.tweet.polarizationRate}</p>
                <p>Político: {props.tweet.politicalRate}</p>
                <p><a href={props.tweet.profileLink}>Ir al perfil</a> <a href={props.tweet.tweetLink}>Ver detalles</a></p>
            </div>
        </div>
    );
}
 
export default Tweet;