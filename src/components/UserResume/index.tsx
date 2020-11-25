import React from 'react';
import { IUserResume } from '../../util/interfaces';
import { Link } from 'react-router-dom';
import './index.scss';
 
const UserResume = (props: { user: IUserResume }) => {
    return (
        <div className="user-container">
            <div className="user-left">
                <p className="profile-name">{props.user._id}</p>
            </div>
            <div className="user-right">
                <p>Incidencias: {props.user.counter}</p>
                <p><Link to={`/region/${props.user._id}`}>Ir a la región</Link></p>
            </div>
        </div>
    );
}
 
export default UserResume;