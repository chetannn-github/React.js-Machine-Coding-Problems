import React, { useState } from 'react'
import { FOLDER_IMAGE_URL, PLUS_IMAGE_URL } from '../utils/data'
import FileExplorer from './FileExplorer'

function Folder({folderData}) {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    
    return (
        <div  className='folder' style={{marginLeft: '20px'}} >
            <div className='folder-name' style={{display : "flex", alignItems : "center", gap: "10px" , cursor: "pointer"}} onClick={handleToggle}>
                <span>{folderData.name} </span>
                <img src={FOLDER_IMAGE_URL} style={{height : "18px"}}></img>
                <img src={PLUS_IMAGE_URL} style={{height : "18px"}}></img>
            </div>
            
            {isOpen && folderData.children.length > 0 && <FileExplorer data={folderData.children}/>}
        </div>
  )
}

export default Folder