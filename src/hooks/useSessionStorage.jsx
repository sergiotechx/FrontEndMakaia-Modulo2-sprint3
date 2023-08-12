
import { useState } from "react";

const useSessionStorage = () => {

  const [_sessionStorage, setDataStorage] = useState({})
  
  const getSessionStorage = (key) => {
    let temp = sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : {};
 
  }


  const  saveInfoSessionStorage =  (key, data)=>  {
    sessionStorage.setItem(key, JSON.stringify(data));
    setDataStorage(data);
  };

  const deleteInfoSessionStorage = (key) => {
    sessionStorage.removeItem(key);
    setDataStorage({});
  };

  return ({ _sessionStorage, saveInfoSessionStorage, deleteInfoSessionStorage });

};
//
export default useSessionStorage; 