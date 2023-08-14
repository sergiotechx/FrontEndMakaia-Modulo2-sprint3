
import { useState } from "react";

const useSessionStorage = () => {

  const [_sessionStorage, setDataStorage] = useState({})
  
  const getSessionStorage = (key) => {
    
    let temp = sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : {};
    setDataStorage(temp);
    return temp;
   }


  const  saveInfoSessionStorage =  (key, data)=>  {
    console.log("saveInfoSessionStorage")
    sessionStorage.setItem(key, JSON.stringify(data));
    setDataStorage(data);
  };

  const deleteInfoSessionStorage = (key) => {
    sessionStorage.removeItem(key);
    setDataStorage({});
  };

  return ({ _sessionStorage, getSessionStorage,saveInfoSessionStorage, deleteInfoSessionStorage });

};

export default useSessionStorage;  