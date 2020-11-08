import React from 'react';
import { useParams } from 'react-router-dom';
import { IParams } from '../../util/interfaces';
import './index.scss';
 
const Profile = () => {
    const { user } = useParams() as IParams;

    return ( 
        <div className="profile-container">
            <div className="profile-top">
                <div className="profile-name">
                    <h2>Nombre</h2>
                    <p>@{user}</p>
                </div>
                <p>No verificado</p>
            </div>

            <div className="profile-stats">
                <div className="incidences">
                    <h3>Número de incidencias:</h3>
                    <p>2000</p>
                </div>
                <div className="incidences">
                    <h3>Número de incidencias polarizantes:</h3>
                    <p>120</p>
                </div>

                <div className="graph">

                </div>
                <p className="polarizing-percentage">16.6% polarizante</p>
            </div>

            <div className="br" />
        </div>
    );
}
 
export default Profile;