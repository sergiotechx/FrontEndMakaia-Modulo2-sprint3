import { Data_URL } from "@/constants/Constants"
import axios from 'axios';

export const getPosts = async (id) => {
    try {
        let complete_Url = Data_URL + `posts?userId=${id}`
        const tempPosts = await axios.get(complete_Url)

        let messages = []

        if (tempPosts.data.length > 0) {
            messages = tempPosts.data
        }
        return messages
    }
    catch (error) {
        throw error
    }
}
export const getUser = async (id) => {
    try {

        let complete_Url = Data_URL + `users/${id}`
        const tempUserData = await axios.get(complete_Url)
        let user = {}

        if (Object.keys(tempUserData.data).length > 0 ) {
            user = tempUserData.data

        }
        return user
    }
    catch (error) {
        throw error 
    }
}
export const getPostComments = async(postId)=>{
    try{
     
        let complete_Url = Data_URL + `comments?postId=${postId}`
     
        const tempPostComments = await axios.get(complete_Url)
       
        if(tempPostComments.data.length >0){
           return tempPostComments.data
        }
        else{return []}
         
    }
    catch(error){
        throw error
    }
}