const Data_URL = 'https://frontendmakaia-modulo2-sprint3-jsonserver.onrender.com/'
const  Session_Name ='Findy'
const URL_API = 'http://localhost:3001'

const endpoints = {
    coments : `${URL_API}/comments`
}

export {Data_URL,Session_Name, endpoints}  
 
export const types = {
    authLogin: 'auth - login',
    authLogout: 'auth - logout',
    perfilsetData: "set - data",
    setComment : "set-comment",
}
