import React, { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
 
const Classificaction = () => {
    const [id, setId] = useState("");
    const [text, setText] = useState("");
    const [sentimental, setSentimental] = useState("");

    const getTweet = async () => {
        const response = await axios(`${process.env.REACT_APP_URL_BACKEND}/tweet/random`);
        setText(response.data.text);
        setSentimental(response.data.sentimentScore.predominant);
        setId(response.data._id);
    }

    useEffect(() => {
        getTweet();
    }, []);

    const updatePolitical = async (value: Boolean) => {
        await axios.put(`${process.env.REACT_APP_URL_BACKEND}/tweet/random`, {
            _id: id,
            political: value
        });

        getTweet();
    }

    return (
        <div className="classification">
            <p>{text}</p>
            <p>{sentimental}</p>
            <button className="pol" onClick={() => updatePolitical(true)}>Polarizante</button>
            <button className="nopol" onClick={() => updatePolitical(false)}>No polarizante</button>
            <button className="new-tweet" onClick={() => getTweet()}>New Tweet</button>
        </div>
    );
}
 
export default Classificaction;