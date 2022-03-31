import React from "react";
import {useState, useRef, useEffect} from 'react';
import axios from "axios";

import 'chart.js/auto';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';



ChartJS.register(ArcElement, Tooltip, Legend);


const ChartOne = () => {

    const [chartInfo, setChartInfo] = useState([]);
    const [successInfo, setSuccessInfo] = useState([]);
    const [faileInfo, setFailInfo] = useState([]);

    useEffect(()=>{
        axios.get('https://api.spacexdata.com/v5/launches')
        .then((res)=>{
            let data = res.data;

            let success = data.filter((item) => item.success === true).length;
            let fail = data.filter((item) => item.success === false).length;

            setChartInfo([success, fail]);

            let successData = [];
            let failData = [];

            setSuccessInfo(successData)
            setFailInfo(failData)
            // console.log(res)
        })
        
    }, [])

    const chartData = {
        labels: ['Success', 'Fil'],
        datasets: [
        {
            label: 'Nr of Success',
            data: chartInfo,
            backgroundColor: [
            '#2b2b2b',
            '#ffffff',
            ],
            borderColor: [
            '#2b2b2b',
            '#2b2b2b',
            ],
            borderWidth: 1,
        },
        ],
    
    }

    return(
        <>
        <div className="topCon">
            <div className="pieCon">
                <Doughnut data={chartData} />
            </div>
            <div className="barCon"></div>
            <div className="lineCon"></div>
        </div>
        <div className="missionCon"></div>
        </>
    )
}

export default ChartOne;