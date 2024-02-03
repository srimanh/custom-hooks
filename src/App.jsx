import React,{useState,useEffect} from "react";
import "./App.css";
import useStorage from "./UseStorage"

function App() { 


const initValue = localStorage.getItem('values') || "" ;

  const [value,handleSetValue] = useStorage(initValue);

  return (
    <div>
      <input type="text" onChange={(e) => handleSetValue(e)} value={value}/>
    </div>
  );
}

export default App;
