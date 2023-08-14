import { Data_URL } from "@/constants/Constants"
import axios from 'axios';
export async function getHomeInitialData(data) {
    try {
        let messages = []
        let followingUsers = []

       
        let tempMessages = await getPosts(data.id)

        tempMessages.forEach(element => {
            messages.push(element)
        });
        
        for (let index = 0; index < data.following.length; index++) {
            tempMessages = await getPosts(data.following[index].id)

            tempMessages.forEach(element => {
                messages.push(element)
            });
        }

        for(let index = 0; index < data.following.length; index++){
           let  tempUser = await getUser(data.following[index].id)
       
            if(Object.keys(tempUser).length > 0){
                followingUsers.push(tempUser) 
            }
        }
        messages.sort((a,b)=>b.timestamp-a.timestamp)

        
      
        return ({messages, followingUsers})

    }
    catch (error) {
        throw error
    }
}

const getPosts = async (id) => {
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
const getUser = async (id) => {
    try {
     
        let complete_Url = Data_URL + `users/${id}`
        const tempUserData = await axios.get(complete_Url)
        let user = {}
        
        if (Object.keys(tempUserData.data).length > 0 > 0) {
            user = tempUserData.data
            
        }
        return user
    }
    catch (error) {
        throw error
    }


}
