import './App.css';
import { useState } from "react";
import FileFolderExplorer from './components/FileFolderExplorer';
import ProgressBar from "./components/ProgressBar";
import json from "./utils/fileData.json";
import TravelProductsList from './components/TravelProductsList';
import useTravelProductsList from './hooks/useTravelProductsList';


function App() {
  useTravelProductsList();
   const [fileData, setFileData] = useState(json);
    const addNewFolder = (id)=>{
      const name=prompt('Enter name');
      const updateFolder =(prevList)=>{
       return prevList.map((list)=>{
            if(list.id === id){
                return {...list, children:[...list.children, {isFolder:true,name:name, id:Date.now().toString(), children:[]}]}
            }
            if(list?.children){
                return {...list, children: updateFolder(list.children)}
            }
            return list;
        })
      }
      setFileData((prevList)=> updateFolder(prevList))
    }
    const deleteFileFolder = (itemId)=>{
      console.log(itemId,'dele...')
      const deleteFile = (prevData)=>{
        return prevData.filter((list) => list.id !== itemId).map((filterData)=>{
          if(filterData.children){
            return {...filterData, children: deleteFile(filterData.children)}
          }
          return filterData
        })
      }
     setFileData((prevData)=>deleteFile(prevData))
    }
  return (
 <div className="App">
  <h1>Progress Bar</h1>
   <ProgressBar progress={70} />
   <h1>File/Folder Explorer</h1>
   <FileFolderExplorer fileData={fileData} addNewFolder={addNewFolder} deleteFileFolder={deleteFileFolder}/>
   <h1>Bellroy Test</h1>
   <TravelProductsList title={"Traveling soon? These travel products will help."} />
   </div>
  );
}

export default App;
