import { Data_URL } from "@/constants/Constants"
import axios from 'axios';
import { getPosts, getUser } from "./primitives";
export async function getHomeInitialData(data) {
    try {
        
        let messages = []
        let followingUsers = []

        for (let index = 0; index < data.following.length; index++) {
            let tempUser = await getUser(data.following[index].userId)

            if (Object.keys(tempUser).length > 0) {
                followingUsers.push(tempUser)
            }
        }
        

        let tempMessages = await getPosts(data.id)
     
        tempMessages.forEach(element => {
            messages.push({ message: element, user: data })
        });
     


        for (let index = 0; index < data.following.length; index++) {
            tempMessages = await getPosts(data.following[index].userId)
            let tempUser = followingUsers.find(user=>user.id == data.following[index].userId)
            
            tempMessages.forEach(element => {
                messages.push({ message: element, user: tempUser })
            });
        }


        messages.sort((a, b) => b.message.timestamp - a.message.timestamp)
     

        return ({ messages, followingUsers })

    }
    catch (error) {
        throw error
    }
}