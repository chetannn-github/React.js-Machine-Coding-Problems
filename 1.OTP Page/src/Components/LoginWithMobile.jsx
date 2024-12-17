import React, { useRef, useState } from 'react'
import { isValidMobileNumber } from '../utils/regex';
import OtpForm from './OtpForm';

function LoginWithMobile() {
  let mobileRef = useRef();
  const [showOtpForm, setShowOtpForm] = useState(false);

  let handleMobileNumberSubmit = () =>{
    // check valid phone number using regex
    let enteredMobileNumber = mobileRef.current.value;
    let isValid = isValidMobileNumber(enteredMobileNumber)
    if(enteredMobileNumber.length<10 || !isValid){
      alert("invalid phone number..");
      mobileRef.current.value = "";
      return ;
    }

    setShowOtpForm(true);

    console.log(enteredMobileNumber);
  }

  return (
    <div>
      <div>Login With Mobile</div>
      {!showOtpForm && <div >
      <input type='text' placeholder='Enter your mobile number...' ref={mobileRef}/> 
      <button  onClick={handleMobileNumberSubmit}>Submit</button>
      </div>}
      {showOtpForm && <OtpForm otpLength={4}/>}
    </div>
  )
}

export default LoginWithMobile