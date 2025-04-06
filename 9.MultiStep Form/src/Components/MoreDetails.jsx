import React from 'react'

function MoreDetails({formData,setFormData}) {
    
    let handleChange = (e)=>{
        setFormData({...formData,gender:e.target.value});
    }
    
    return (
        <div>
            MoreDetails
            
            <label>
                <input type='radio' value="male" onChange={handleChange} checked={formData.gender=="male"}></input>
                Male
            </label>
            <label>
                <input type='radio' value="female" onChange={handleChange} checked={formData.gender=="female"}></input>
                Female
            </label>
            
            
        </div>
  )
}

export default MoreDetails