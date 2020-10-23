import React, { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
 
const Classificaction = () => {
    const [id, setId] = useState("");
    const [text, setText] = useState("");
    const [sentimental, setSentimental] = useState("")

    useEffect(() => {
        const getTweet = async () => {
            const response = await axios('http://18.212.238.167:3000/tweet/random');
            setText(response.data.text);
            setSentimental(response.data.sentimentScore.predominant);
            setId(response.data._id);
        }

        getTweet();
    }, []);

    const updatePolitical = async (value: Boolean) => {
        await axios.put('http://18.212.238.167:3000/tweet/random', {
            _id: id,
            political: value
        });

        const response = await axios('http://18.212.238.167:3000/tweet/random');
        setText(response.data.text);
        setSentimental(response.data.sentimentScore.predominant);
        setId(response.data._id);
    }

    return (
        <div className="classification">
            <p>{text}</p>
            <p>{sentimental}</p>
            <button className="pol" onClick={() => updatePolitical(true)}>Politico</button>
            <button className="nopol" onClick={() => updatePolitical(false)}>No politico</button>
        </div>
    );
}
 
export default Classificaction;