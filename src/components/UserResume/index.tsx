import React from 'react';
import { IUserResume } from '../../util/interfaces';
import { Link } from 'react-router-dom';
import './index.scss';
 
const UserResume = (props: { user: IUserResume }) => {
    return (
        <div className="user-container">
            <div className="user-left">
                <p>{props.user.name}</p>
                <p>@{props.user.username}</p>
            </div>
            <div className="user-right">
                <p>Incidencias: {props.user.counter}</p>
                <p><Link to={props.user.username}>Ir al perfil</Link></p>
            </div>
        </div>
    );
}
 
export default UserResume;