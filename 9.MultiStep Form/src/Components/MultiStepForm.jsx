import React from 'react'
import UserInfo from './UserInfo';
import AdressdDetails from './AdressdDetails';
import MoreDetails from './MoreDetails';
import { useState } from 'react';

function MultiStepForm() {
    let [currentStep, setCurrentStep] = React.useState(0);
    let [formData, setFormData] = useState({
        name : null,
        address : null,
        gender : null,

    });

    let formNavigation = {
        0 : "UserInfo",
        1 : "AdressdDetails",
        2 : "MoreDetails",

    }

    let handlePrevious = () => {
        if(currentStep == 0) return;
        setCurrentStep(currentStep - 1);
    }

    let handleNext = ()=>{
        if(currentStep == 2) return;

        if(formData.name == null && currentStep == 0){
            alert("name is required");
            return;
        }

        if(formData.address == null && currentStep == 1){
            alert("address is required");
            return;
        }

        setCurrentStep(currentStep +1);
    }

    let handleSubmitForm = ()=>{
        if(formData.gender == null){
            alert("geneder is required");
            return ;
        }

        alert("Form submitted successfully");
        console.log(formData);
    }
    

    return (
        
        <div>
            <h1>MultiStepForm</h1>
            {currentStep == 0 && <UserInfo formData={formData} setFormData={setFormData}/>}
            {currentStep == 1 && <AdressdDetails formData={formData} setFormData={setFormData}/>}
            {currentStep == 2 && <MoreDetails formData={formData} setFormData={setFormData}/>}
            
            {currentStep>0 && <button disabled= {currentStep==0 } onClick={handlePrevious}>previous</button>}
            {currentStep != 2 && <button disabled={currentStep ==2} onClick={handleNext}>next</button>}
            {currentStep ==2 && <button  onClick={handleSubmitForm}>Submit</button>} 
            
        </div>
    )
}

export default MultiStepForm    