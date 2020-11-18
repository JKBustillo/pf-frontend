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
        counter: 0,
        verified: false,
    });
    const [userTweets, setUserTweets] = useState<Array<ITweetResume>>([]);

    const { user } = useParams() as IParams;

    useEffect(() => {
        const getUserDetails = async () => {
            const response = await axios(`${process.env.REACT_APP_URL_BACKEND}/username/${user}/details`);

            setUserDetails(response.data);

            const response2 = await axios(`${process.env.REACT_APP_URL_BACKEND}/tweet/user/${response.data.userId}`);
            setUserTweets(response2.data);
        };

        getUserDetails();
    }, [user]);

    const chartData = {
        name: 'React',
        data: {
          datasets: [{
            data: [userDetails.counter, 0],
            backgroundColor: ['#2F6DF1', '#087CB8'],
          }],
          labels: [
            'Incidencias totales',
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
                    <a href={`https://www.twitter.com/${userDetails.username}`} target="_blank">Ir al perfil</a>
                </div>
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

                <Pie
                    data={chartData.data}
                    options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    }}
                />
                <p className="polarizing-percentage">{0/userDetails.counter*100}% polarizante</p>
            </div>

            <div className="br" />

            <div className="profile-lastTweets">
                <h2 className="ultimos-p">Últimos tweets analizados</h2>
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