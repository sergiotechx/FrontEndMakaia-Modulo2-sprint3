
import { useState } from "react";
import { Session_Name } from '@/constants/Constants';

const useSessionStorage = () => {

  const [_sessionStorage, setDataStorage] = useState({})

  const getSessionStorage = (key) => {

    let temp = sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : {};
    setDataStorage(temp);
    return temp;
  }


  const saveInfoSessionStorage = (key, data) => {
    sessionStorage.setItem(key, JSON.stringify(data));
    setDataStorage(data);
  };

  const deleteInfoSessionStorage = (key) => {
    sessionStorage.removeItem(key);
    setDataStorage({});
  };

  return ({ _sessionStorage, getSessionStorage, saveInfoSessionStorage, deleteInfoSessionStorage });

};

export default useSessionStorage;  