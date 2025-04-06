import React from 'react'

function AdressdDetails({formData,setFormData}) {

    let handleChange = (e)=>{ 
        setFormData({...formData,address:e.target.value});
    }
  return (
    <div>
        <h1>AdressdDetails</h1>
        <input type='text'  onChange={handleChange} value={formData.address}></input>

    </div>
  )
}

export default AdressdDetails