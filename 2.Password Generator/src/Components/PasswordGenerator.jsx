import { useState } from "react";
import InputCheckBox from "./InputCheckBox";


function PasswordGenerator() {
    let [passwordLength,setPasswordLength] = useState(14);
    let [generatedpassword, setGeneratedPassword] = useState("e34343");
    let [passwordStrength , setPasswordStrength] = useState("");
    const [isCopied, setIsCopied] = useState(false);
    const [error,setError] = useState(null)

    let [checkBoxeState, setCheckBoxState] = useState([
        {id:"lowercase",checked:false},
        {id:"uppercase",checked:false},
        {id:"special",checked:false}, 
        {id:"number",checked:false},
    ]);


    let handleCheckBoxChange = (id) => {
        const newCheckBoxState = checkBoxeState.map((value)=>( value.id == id ? {...value , checked  : !value.checked} : value));
        setCheckBoxState(newCheckBoxState);
    };

    
    let handlePasswordLengthChange = (e) =>{
        console.log(e.target.value);
        setPasswordLength(e.target.value)
    }

    let handlePasswordGenerate = () =>{
        setError(null);
        setPasswordStrength("")
        
        // check out selected checkboxes and  password length and on that basis generate random password...
        const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

        let charSet = "";
        let selected = 0;
        
        if(checkBoxeState[0].checked){charSet +=lowerChars; selected++;} 
        if(checkBoxeState[1].checked){charSet +=upperChars; selected++;}
        if(checkBoxeState[2].checked){charSet +=specialChars; selected++;} 
        if(checkBoxeState[3].checked){charSet +=numberChars; selected++;}

        if(selected==0){
            setError("please select any one checkbox ....")
            return ;
        }
        else if(selected<=2&& passwordLength<10){
            setPasswordStrength("Weak")
        }

        else if(selected>=2 && passwordLength<10){
            setPasswordStrength("Moderate")
        }
        else if(selected>=3 && passwordLength>10){
            setPasswordStrength("Strong")
        }

        let password = "";
        for(let i=0; i<passwordLength; i++){
           password += charSet[Math.floor(Math.random()*charSet.length)];
           setGeneratedPassword(password);
        }
    }

    let handleCopy = async() =>{
       await navigator.clipboard.writeText(generatedpassword);

       setIsCopied(true);

       setTimeout(()=>setIsCopied(false),2000);

    }


  return (
    <div className="bg-black w-[35vw] h-fit px-7 py-5 pb-10">
        <h1 className="text-2xl">PasswordGenerator</h1>
        <div className="flex justify-between">
            <h2 className="text-xl">{generatedpassword}</h2>
            <button 
                className=" bg-green-800 text-white text-sm rounded-xl px-6 py-2" 
                onClick={handleCopy}>
                {isCopied? "Copied" : "Copy"}
            </button>
        </div>
    

        <div id="password-selector" className="flex flex-col gap-4">
            <div>
                <div className="flex justify-between">
                    <h3>Password Length</h3> 
                    <h3>{passwordLength}</h3>
                </div>
                <input
                className="w-full h-[10px]" 
                onChange={handlePasswordLengthChange}
                type="range"
                max={20}
                min={8}
                step={1}
                defaultValue={passwordLength}
                />
            </div>

        
            <div className="flex justify-between">
                {["Lowercase", "Uppercase", "Special Character", "Number"].map((val, index) => (
                    <InputCheckBox 
                    text={val} 
                    key={index}
                    id={checkBoxeState[index].id}
                    handleCheckBoxChange={handleCheckBoxChange}
                    checked= {checkBoxeState[index].checked}
                    />
                ))}
            </div>

            {passwordStrength!="" &&<div className="flex justify-between">
                <h3>Password Strength</h3>
                <h3>{passwordStrength}</h3>  
            </div>}

                {error && <p className="text-red-700 ">{error}</p>}
            <button className="p-3 bg-green-800 text-white rounded-2xl px-5 py-3"  onClick={handlePasswordGenerate}>
                Generate Password
            </button>

        </div>
    
    
    </div>

  )
}

export default PasswordGenerator