import React from "react";
import {useState, useEffect, useRef } from "react";

import axios from "axios";

import ChartOne from "./ChartOne";
import ChartThree from "./ChartThree";
import ChartTwo from "./ChartTwo";
import MissionLog from "./MissionLog";


const DynamicCharts = () => {

    const [panelInfo, setPanelInfo] = useState([]);
    const [shipLog, setShipLog] = useState([]);

    useEffect(()=>{
        axios.get("https://api.spacexdata.com/v3/missions")
        .then((res)=>{
            let data = res.data;

            // console.log(res)
            let shipLog = [];

            for(let i = 0; i < data.length; i++){
                shipLog.push({
                    name: data[i].mission_name,
                    des: data[i].description,
                    manu: data[i].manufacturers,
                    web: data[i].website
                })
                
            }
            console.log(shipLog[1].name)
            
            setShipLog(shipLog);

            let panelStart = shipLog.map((item) => <MissionLog name={item.name} discrip={item.des} manufac={item.manu} wesUrl={item.web} />)
            
            setPanelInfo(panelStart);
            
        })
    },[])

    return(
        <>
        <div className="topCon">
            <div className="pieCon">
                <ChartOne />
            </div>
            <div className="barCon">
                <ChartTwo />
            </div>
            <div className="lineCon">
                <ChartThree />
            </div>
        </div>
        <div className="bottomCon">
            <div className="missionCon">
                {panelInfo}
            </div>
        </div>
        
        </>
    )
}

export default DynamicCharts;