import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Map, Marker, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";
import axios from 'axios';
import './index.scss';
import { ICluster, ILocation } from '../../util/interfaces';

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
    const [locations, setLocations] = useState<Array<ICluster>>([]);
    const markers: Array<ILocation> = [];

    useEffect(() => {
        const getLocations = async () => {
            const response = await axios(`${process.env.REACT_APP_URL_BACKEND}/tweet/location`);
            setLocations(response.data);
        };

        getLocations();
    }, []);

    locations.forEach(location => {
        for (let i = 0; i < location.count; i++) {
            markers.push({latitude: location.lcoation.latitude, longitude: location.lcoation.longitude });
        }
    });

    return (
        <div className="chartsHome-container">
            <div className="chart-home">
                <Line
                    data={state}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        title:{
                            display:true,
                            text:'Gráfica de tweets polarizantes analizados',
                            fontSize:20
                        },
                    }}
                />
            </div>
            <Map className="map" center={[4.60971, -74.08175]} zoom={6}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <MarkerClusterGroup>
                    {markers.map((marker, i) => (
                        <Marker
                            key={i}
                            position={[marker.latitude, marker.longitude]}
                        />
                    ))}
                    
                </MarkerClusterGroup>
            </Map>
        </div>
    );
}
 
export default ChartsHome;