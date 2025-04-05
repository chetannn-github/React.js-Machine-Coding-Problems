import React, { useState } from 'react'
import { FOLDER_IMAGE_URL } from '../utils/data';
import Folder from './Folder';


function FileExplorer({data}) {

    return (
        <>
        {data.map((item, index)=>(
            item.isFolder ?  (
                <Folder folderData ={item} key={item.id}/>
            ) : (
                <div className='file' style={{marginLeft: '20px'}} key={item.id}>   
                    <div className='file-name'>{item.name}</div>
                </div>
            )
        ))}
    </>
    )
}

export default FileExplorer