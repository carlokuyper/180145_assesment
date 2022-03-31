import React, { useEffect } from "react";
import {   Chart as ChartJS,   CategoryScale,  LinearScale,  PointElement,  LineElement,  Title,  Tooltip,  Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from "axios";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend );

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};



export const data = {
  labels:  ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Launches Per Year',
      data: [1651, 4545, 1546,464],
      borderColor: '#2b2b2b',
      backgroundColor: '#2b2b2b)',
    }
  ],
};



const ChartThree = () => {

    // useEffect(()=>{
    //     axios.get("https://api.spacexdata.com/v4/launches")
    //     .then((res)=>{
    //         console.log(res) 
    //         let data = res.data;
    //         let launchesYear = data.filter((item) => item.)
            
    //         for(let i = 0; i <data.length; i++){}

    //     })
    // },[])

    return(
        <>
            <Line options={options} data={data} />;
        </>
    )
}

export default ChartThree