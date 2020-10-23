import React from 'react';
import { Line } from 'react-chartjs-2';
import './index.scss';

const state = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Incidencias',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
        }
    ],
}

 
const ChartsHome = () => {
    return (
        <div className="chartsHome-container">
            <Line
                data={state}
                height={280}
                width={560}
                options={{
                    title:{
                        display:true,
                        text:'Gráfica de tweets polarizantes analizados',
                        fontSize:20
                    },
                }}
            />
            <Line
                data={state}
                height={280}
                width={560}
                options={{
                    title:{
                        display:true,
                        text:'Gráfica de tweets políticos analizados',
                        fontSize:20
                    },
                }}
            />
        </div>
    );
}
 
export default ChartsHome;