import React, { useState } from 'react'
import FileExplorer from './Components/FileExplorer'
import { fileData } from './utils/data';

function App() {
  const [data, setData] = useState(fileData);
      console.log(data);
  return (
    <div>
      <FileExplorer data = {data}/>
    </div>
  )
}

export default App