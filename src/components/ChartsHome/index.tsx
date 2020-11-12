import React from 'react';
import { Line } from 'react-chartjs-2';
import { Map, Marker, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";
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
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[10.96854, -74.78132]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[6.25184, -75.56359]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                    <Marker position={[4.60971, -74.08175]} />
                </MarkerClusterGroup>
            </Map>
        </div>
    );
}
 
export default ChartsHome;