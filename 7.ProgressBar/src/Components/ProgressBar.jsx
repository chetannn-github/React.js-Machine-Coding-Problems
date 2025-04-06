import React from 'react'
import { useEffect } from 'react';

function ProgressBar({intialProgress}) {
    let [progress, setProgress] = React.useState(0);
    
    useEffect(() => {
        setProgress(intialProgress);
    },[])

    return (
        <div
            style={outerProgressStyle}>
            <div 
            style ={{
                ...innerProgressStyle, 
                transform: `translate(${progress-100}%)`,
            }}>
                {progress > 100 ? 100 : progress} %
            </div>
        </div>
  )
}

let innerProgressStyle = {
    display :"flex",
    justifyContent:"flex-end", 
    alignItems:"center",
    height:"100%" ,
    backgroundColor :"red",
    color:"white",
    transition : "transform 0.5s ease-in-out",
    

    
    
}

let outerProgressStyle = {
    width:"100%",
    height:"40px",
    overflow:"hidden",
    backgroundColor:"black",
    borderRadius:"10px",
    marginTop:"20px"
}

export default ProgressBar