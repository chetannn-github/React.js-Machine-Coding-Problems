import React, { useState } from 'react'
import { DELETE_ICON_URL, FOLDER_IMAGE_URL } from '../utils/data';
import Folder from './Folder';


function FileExplorer({currFolderData,data,setData}) {

    const deleteFile = (currData,id) =>{
        return currData.filter((item) => {
            if(item.id == id){
                return false;
            }
            else if(item.isFolder && item.children.length > 0){
                item.children = deleteFile(item.children,id);
            }
            return true;
        });
    }

    const handleDelete = (itemID) => {
        let updatedData = deleteFile(data,itemID);
        setData(() => updatedData);
    }
    return (
        <>
        {currFolderData.map((item, index)=>(
            item.isFolder ?  (
                <Folder data={data} setData = {setData} folderData ={item} key={item.id}/>
            ) : (
                <div className='file' style={{marginLeft: '20px'}} key={item.id}>   
                    <div className='file-name' style={{display:"flex" , alignItems : "center", gap: "10px" , cursor: "pointer"}} >
                        {item.name}
                        <img src={DELETE_ICON_URL} style={{height : "18px"}} onClick={() => handleDelete (item.id)}></img>
                    </div>
                    
                </div>
            )
        ))}
    </>
    )
}

export default FileExplorer