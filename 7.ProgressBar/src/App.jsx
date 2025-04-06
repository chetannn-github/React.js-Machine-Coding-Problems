import React from 'react'
import ProgressBar from './Components/ProgressBar'

function App() {
  return (
    <div>{[4,19,23,43,54,85,99,19].map((item)=>(<ProgressBar intialProgress={item}/>))}</div>
    
  )
}

export default App