import React from 'react';
import { IUserResume } from '../../util/interfaces';
import './index.scss';
 
const UserResume = (props: { user: IUserResume }) => {
    return (
        <div className="user-container">
            <div className="user-left">
                <p>{props.user.username}</p>
                <p>{props.user.user}</p>
            </div>
            <div className="user-right">
                <p>{props.user.incidences}</p>
                <a
                    href={props.user.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >Ir al perfil</a>
            </div>
        </div>
    );
}
 
export default UserResume;