import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IUserResume } from '../../util/interfaces';
import './index.scss';
import UserResume from '../UserResume';
 
const IncidencesTopUsers = () => {
    const [topUsers, setTopUsers] = useState<Array<IUserResume>>([]);

    useEffect(() => {
        const getTopUsers = async () => {
            const response = await axios(`${process.env.REACT_APP_URL_BACKEND}/common`);
            setTopUsers(response.data);
        };

        getTopUsers();
    }, []);
    
    return (
        <div className="topUsers-container">
            <p className="topUsers-p">Usuarios con más incidencias</p>
            <div className="topUsers-list">
                {topUsers.map(user => (
                    <UserResume
                        key={user._id}
                        user={user}
                    />
                ))}
            </div>
        </div>
    );
}
 
export default IncidencesTopUsers;