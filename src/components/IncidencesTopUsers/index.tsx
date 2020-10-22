import React from 'react';
import './index.scss';
import { IUserResume } from '../../util/interfaces';
import UserResume from '../UserResume';
 
const IncidencesTopUsers = () => {
    const users: Array<IUserResume> = [
        {
            username: "Ninja",
            user: "@Ninja",
            incidences: 130,
            profileLink: "https://twitter.com/Juan_PRH",
        },
        {
            username: "Ninja",
            user: "@Ninja",
            incidences: 130,
            profileLink: "https://twitter.com/Juan_PRH",
        },
        {
            username: "Ninja",
            user: "@Ninja",
            incidences: 130,
            profileLink: "https://twitter.com/Juan_PRH",
        },
        {
            username: "Ninja",
            user: "@Ninja",
            incidences: 130,
            profileLink: "https://twitter.com/Juan_PRH",
        },
        {
            username: "Ninja",
            user: "@Ninja",
            incidences: 130,
            profileLink: "https://twitter.com/Juan_PRH",
        },
        {
            username: "Ninja",
            user: "@Ninja",
            incidences: 130,
            profileLink: "https://twitter.com/Juan_PRH",
        },
        {
            username: "Ninja",
            user: "@Ninja",
            incidences: 130,
            profileLink: "https://twitter.com/Juan_PRH",
        },
    ];
    
    return (
        <div className="topUsers-container">
            <p className="topUsers-p">Usuarios con más incidencias</p>
            <div className="topUsers-list">
                {users.map(user => (
                    <UserResume user={user}/>
                ))}
            </div>
        </div>
    );
}
 
export default IncidencesTopUsers;