import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { IParams, ITweetResume, IUserResume } from '../../util/interfaces';
import Tweet from '../Tweet';
import './index.scss';
 
const Profile = () => {
    const [userDetails, setUserDetails] = useState<IUserResume>({
        _id: "",
        name: "",
        username: "",
        counter: {
            political: 0,
            hate: 0,
        },
        verified: false,
    });
    const [userTweets, setUserTweets] = useState<Array<ITweetResume>>([]);

    const { user } = useParams() as IParams;

    useEffect(() => {
        const getUserDetails = async () => {
            const response = await axios(`${process.env.REACT_APP_URL_BACKEND}/username/${user}/details`);
            const response2 = await axios(`${process.env.REACT_APP_URL_BACKEND}/tweet/user/${response.data.userId}`);
            
            setUserDetails(response.data);
            setUserTweets(response2.data);
        };

        getUserDetails();
    }, [user]);

    const chartData = {
        name: 'React',
        data: {
          datasets: [{
            data: [userDetails.counter.political-userDetails.counter.hate, userDetails.counter.hate],
            backgroundColor: ['#2F6DF1', '#087CB8'],
          }],
          labels: [
            'Incidencias no polarizantes',
            'Incidencias polarizantes',
          ]
        }
    };

    return (
        <div className="profile-container">
            <div className="profile-top">
                <div className="profile-name">
                    <h2>{userDetails.name}</h2>
                    <p>@{user}</p>
                </div>
                <div className="profile-other">
                    <p>{userDetails.verified ? "Verificado" : "No verificado"}</p>
                    <a href={`https://www.twitter.com/${userDetails.username}`} target="_blank" rel="noopener noreferrer">Ir al perfil</a>
                </div>
            </div>

            <div className="profile-stats">
                <div className="incidences">
                    <h3>Número de incidencias:</h3>
                    <p>{userDetails.counter.political}</p>
                </div>
                <div className="incidences">
                    <h3>Número de incidencias polarizantes:</h3>
                    <p>{userDetails.counter.hate}</p>
                </div>

                <Pie
                    data={chartData.data}
                    options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    }}
                />
                <p className="polarizing-percentage">{userDetails.counter.hate/userDetails.counter.political*100}% polarizante</p>
            </div>

            <div className="br" />

            <div className="profile-lastTweets">
                <h2 className="ultimos-p">Últimos tweets polarizantes</h2>
                <div className="lastAnalized-tweet-list">
                    {userTweets.map(tweet => (
                        <Tweet tweet={tweet}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Profile;