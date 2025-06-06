import React, { useEffect, useRef, useState } from 'react'
import { DELETE_ICON_URL, FOLDER_IMAGE_URL, PLUS_FOLDER_URL, PLUS_IMAGE_URL } from '../utils/data'
import FileExplorer from './FileExplorer'

function Folder({folderData,data,setData}) {
    const [isOpen, setIsOpen] = useState(true);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    }
    // console.log(data)
    const [isNew, setIsNew] = useState(false);
    const [isNewFolder, setIsNewFolder] = useState(false);
    const inputRef = React.useRef(null);

    useEffect(() => {
        if (isNew && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isNew]);
    

    const handleNewFile = () => {
        setIsOpen(true);
        setIsNew(true);    
    }

    const handleNewFolder = () => {
        setIsOpen(true); 
        setIsNew(true);
        setIsNewFolder(true);
    }
    const handleBlur = () => {
        setIsNew(false);
    }
    
    const handleAddNewFile = (e) =>{
        if(e.key == "Enter"){
            let newFile ={
                name: e.target.value,
                id: Date.now(),
                isFolder: isNewFolder,
                children: []
            }
            // console.log(folderData.id)
            let updatedData = addFileToFolder(data,folderData.id,newFile);
            console.log(updatedData);
            setData(() => updatedData)
            setIsNew(false);
            setIsOpen(true);
        }
    } 
    

    const addFileToFolder = (currData, folderId, newFile) => {
        return currData.map(item => {
            if (item.id === folderId) {
                return {
                    ...item,
                    children: [...item.children, newFile]
                };
            } else if (item.isFolder && item.children.length > 0) {
                return {
                    ...item,
                    children: addFileToFolder(item.children, folderId, newFile)
                };
            } else {
                return item;
            }
        });
    };

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

    const handleDelete = () => {
        let updatedData = deleteFile(data,folderData.id);
        setData(() => updatedData);
    }

    


    return (
        <div  className='folder' style={{marginLeft: '20px'}} >
            <div className='folder-name' style={{display : "flex", alignItems : "center", gap: "10px" , cursor: "pointer"}} >
                <div onClick={handleToggle} style={{display : "flex", gap: "5 px"}}>{folderData.name}
                    <img src={FOLDER_IMAGE_URL} style={{height : "18px"}}></img> 
                </div>
                
                <img src={PLUS_IMAGE_URL} style={{height : "18px"}} onClick={handleNewFile}></img>
                <img src={PLUS_FOLDER_URL} style={{height : "18px"}} onClick={handleNewFolder}></img>
                 <img src={DELETE_ICON_URL} style={{height : "18px"}} onClick={handleDelete}></img>
            </div>
            {isNew && <input ref={inputRef} type='text' onBlur={handleBlur} style={{marginLeft: '20px'}} onKeyDown={handleAddNewFile} ></input> }
            {isOpen && folderData.children.length > 0 && <FileExplorer data={data} currFolderData={folderData.children} setData={setData}/>}

        </div>
  )
}

export default Folder