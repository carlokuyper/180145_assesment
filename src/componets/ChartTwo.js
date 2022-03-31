import React, { useEffect, useState } from 'react';
import {  Chart as ChartJS,  CategoryScale,  LinearScale,  BarElement,  Title,  Tooltip,  Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';


ChartJS.register(  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend );

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};





const ChartTwo = () => {

    const [shipName, setShipName] = useState([]);
    const [seavPush, setseavPush] = useState([]);
    const [seatPush, setseatPush] = useState([]);   

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v4/rockets')
        .then((res)=>{
            let data = res.data;
         
            // console.log(res)
            for(let i = 0; i < data.length; i++){
                
                let name = data[i].name;             
                let seaT = data[i].first_stage.thrust_sea_level.kN;
                let seaV = data[i].first_stage.thrust_vacuum.kN;

                shipName.push(name)
                seavPush.push(seaV)
                seatPush.push(seaT)
            }
            setShipName(shipName);
            setseavPush(seavPush);
            setseatPush(seatPush);
        })
    }, [])

    const data = {
        labels: shipName,
        datasets: [
          {
            label: 'Thrust Sea level',
            data: seatPush,
            backgroundColor: '#2b2b2b',
          },
          {
            label: 'Thrust Vacuum',
            data: seavPush,
            backgroundColor: 'rgb(209, 209, 209)',
          },
        ],
    };

    return(
        <>
            <Bar options={options} data={data} />;
        </>
    )
}

export default ChartTwo