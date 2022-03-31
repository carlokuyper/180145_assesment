import React from "react";

const MissionLog = (props) => {

    console.log(props);
    return(
    
            <div className="missionBox" key={props.key}>
                <h3>{props.name}</h3>
                <p className="des">{props.discrip}</p>
                <p>Manufacturer: {props.manufac}</p>
                <p><a href={props.wesUrl}>Click To See Webiste</a></p>
            </div>
            
        
    )
}

export default MissionLog