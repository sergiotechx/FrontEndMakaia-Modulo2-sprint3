import { Data_URL } from "@/constants/Constants"
import { types } from "@/store/AuthReducer";
import axios from 'axios';
import { StoreContext } from '@/store/StoreProvider'
import { useContext } from "react";

export async function login(email, password) {
    try {
        let complete_Url = Data_URL + `users?email=${email}&password=${password}`
        const userInfo = await axios.get(complete_Url)
        if (userInfo.data.length > 0) {
            return userInfo.data[0]
        }
        else {
            return ({})
        }
    }
    catch (error) {
        throw error
    }
}