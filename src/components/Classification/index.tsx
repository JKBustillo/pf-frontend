import React, { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
 
const Classificaction = () => {
    const [id, setId] = useState("");
    const [text, setText] = useState("");
    const [sentimental, setSentimental] = useState("");

    const getTweet = async () => {
        const response = await axios('http://18.212.238.167:3000/tweet/random');
        setText(response.data.text);
        setSentimental(response.data.sentimentScore.predominant);
        setId(response.data._id);
    }

    useEffect(() => {
        getTweet();
    }, []);

    const updatePolitical = async (value: Boolean) => {
        await axios.put('http://18.212.238.167:3000/tweet/random', {
            _id: id,
            political: value
        });

        getTweet();
    }

    return (
        <div className="classification">
            <p>{text}</p>
            <p>{sentimental}</p>
            <button className="pol" onClick={() => updatePolitical(true)}>Politico</button>
            <button className="nopol" onClick={() => updatePolitical(false)}>No politico</button>
            <button className="new-tweet" onClick={() => getTweet()}>New Tweet</button>
        </div>
    );
}
 
export default Classificaction;