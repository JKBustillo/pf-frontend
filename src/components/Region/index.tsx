import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { IParams, IRegionDetails } from '../../util/interfaces';
import './index.scss';
import TweetRegion from '../TweetRegion';
 
const Region = () => {
    const [regionDetails, setRegionDetails] = useState<IRegionDetails>({
        political: 0,
        hate: 0,
        randomTweets: [],
    });
    const [userError, setUserError] = useState(false);

    const { region } = useParams() as IParams;

    useEffect(() => {
        const getRegionDetails = async () => {
            try {
                const response = await axios(`${process.env.REACT_APP_URL_BACKEND}/region/${region}/details`);
                
                setRegionDetails(response.data);
                setUserError(false);
            } catch (error) {
                setUserError(true);
            }
        };

        getRegionDetails();
    }, [region]);

    const chartData = {
        name: 'React',
        data: {
          datasets: [{
            data: [regionDetails.political-regionDetails.hate, regionDetails.hate],
            backgroundColor: ['#2F6DF1', '#087CB8'],
          }],
          labels: [
            'Incidencias políticas no polarizantes',
            'Incidencias políticas polarizantes',
          ]
        }
    };

    return (
        <div className="profile-container">
            {
                userError ?
                    <h2>La región {region} no ha sido analizada por nosotros.</h2>
                :
                <Fragment>
                    <div className="profile-top">
                        <div className="profile-name">
                            <h2>{region}</h2>
                        </div>
                    </div>

                    <div className="profile-stats">
                        <div className="incidences">
                            <h3>Incidencias políticas:</h3>
                            <p>{regionDetails.political}</p>
                        </div>
                        <div className="incidences">
                            <h3>Incidencias políticas polarizantes:</h3>
                            <p>{regionDetails.hate}</p>
                        </div>

                        <Pie
                            data={chartData.data}
                            options={{
                            responsive: true,
                            maintainAspectRatio: true,
                            }}
                        />
                        <p className="polarizing-percentage">{(regionDetails.hate/regionDetails.political*100).toFixed(1)}% polarizante</p>
                    </div>

                    <div className="br" />

                    <div className="profile-lastTweets">
                        {regionDetails.randomTweets.length === 0 ? 
                            <h1>No hay tweets polarizantes en esta región.</h1>
                        :
                            <Fragment>
                                <h2 className="ultimos-p">Algunos tweets polarizantes</h2>
                                <div className="lastAnalized-tweet-list">
                                    {regionDetails.randomTweets.map(tweet => (
                                        <TweetRegion
                                            key={tweet._id}
                                            region={region}
                                            tweetId={tweet.tweetId}
                                            text={tweet.text}
                                        />
                                    ))}
                                </div>
                            </Fragment>
                        }
                    </div>
                </Fragment>
            }
        </div>
    );
}
 
export default Region;