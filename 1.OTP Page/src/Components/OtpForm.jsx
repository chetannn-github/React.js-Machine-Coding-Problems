import React, { useEffect, useRef, useState } from 'react'

function OtpForm({otpLength}) {
  let [otp, setOtp] = useState(new Array(otpLength).fill(""));
  let inputRefs = useRef([]);
  
  useEffect(()=>{
    if(inputRefs.current[0]){
      inputRefs.current[0].focus();
    }
  },[]);

  let handleOtpChange = (index,e) =>{
    const value = e.target.value;
    console.log(value)
    if(isNaN(value)){
      console.error("not a numberr")
      console.log(value);
      return;
    }
    
    let newOtp = [...otp];
    newOtp[index] = value[(value.length-1)];
    setOtp(newOtp);
    console.log(newOtp);
    
    

    // call submit function with newOtp not with otp bcoz setFn in useState is async so hume abhii updated value nhii milegiii!!
    if(newOtp.length == otpLength)  handleOtpSubmit(parseInt(newOtp.join("")));


    // move to next input field if current is filled

    if(value && index<otpLength-1){
      inputRefs.current[index+1].focus();
    }
  
    
  }

  let handleOtpSubmit = (otp) =>{
    console.log("handle otp submit  -->>>>>>>>>"+otp );
  }

  let handleKeyDown = (index, e) =>{
    
    if(e.key =="Backspace" && index>0 && !otp[index]) {
      console.log("backspace pressed");
      inputRefs.current[index-1].focus();
    }
    inputRefs.current[index].setSelectionRange(1,1);
  }

  let handleClick = (index)=>{
    inputRefs.current[index].setSelectionRange(1,1);

      for(let i=0; i<index;i++){
        if(!otp[i]){
          inputRefs.current[i].focus();
          return;
        }
    }
  }

  return (
    <div id='otpform'>
        OtpForm
        {otp.map((value,index)=> (
          <input
            value={otp[index]}
            key={index}
            type='text'
            ref={(el)=>(inputRefs.current[index] = el)}
            onChange={(e)=>handleOtpChange(index,e)}
            onKeyDown={(e)=>{handleKeyDown(index,e)}}
            onClick={()=>handleClick(index)}
           />
          
           
    ))}
    </div> 
  )
}

export default OtpForm