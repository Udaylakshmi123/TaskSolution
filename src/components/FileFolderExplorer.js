import { useState } from "react";

const FileFolderExplorer = ({fileData, addNewFolder, deleteFileFolder})=>{
    const [isExpanded, setIsExpanded] = useState({});
    return (<div className="fileStructure">
    {fileData?.length && fileData.map(file=>(
    <div key={file.id}>
        <div className="fileName" onClick={()=> setIsExpanded((prev)=> ({
            ...prev,
            [file.name]: !prev[file.name]
        }))}>{file.isFolder &&<span>{isExpanded[file.name] ? '-' : '+'}</span>} <b>{file.name} </b> 
        {file.isFolder && <img onClick={()=>addNewFolder(file.id)} className="folderImg" src="https://cdn4.iconfinder.com/data/icons/utilities-part-3/64/add_folder-512.png" />}
        <img onClick={()=>deleteFileFolder(file.id)} className="folderImg" src="https://static-00.iconduck.com/assets.00/delete-icon-1864x2048-bp2i0gor.png" /></div>
        {(isExpanded[file.name]) && file?.children && <FileFolderExplorer fileData={file.children} addNewFolder={addNewFolder} deleteFileFolder={deleteFileFolder}/>}
        </div>
    ))}
    </div>)
}
export default FileFolderExplorer;