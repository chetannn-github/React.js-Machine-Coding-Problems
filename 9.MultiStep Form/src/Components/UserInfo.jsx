import React from 'react'

function UserInfo({formData,setFormData}) {
  let handleChange = (e)=>{
    setFormData({...formData,name:e.target.value});
  }
  return (
    <div>UserInfo
        <input type='text' value={formData.name} onChange={handleChange}></input>
        
    </div>

  )
}

export default UserInfo