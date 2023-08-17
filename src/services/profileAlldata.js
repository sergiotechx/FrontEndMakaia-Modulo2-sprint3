import { Data_URL } from "@/constants/Constants"
import axios from 'axios';
import { getPosts, getUser } from "./primitives";
export async function getProfileAlldata(userId) {
    try {
        let basicUserData = await getUser(userId);
        let following = []
        let followers = []
        let posts = []
        
        for (let index = 0; index < basicUserData.following.length; index++) {
            let tempUser = await getUser(basicUserData.following[index].userId)
            if (Object.keys(tempUser).length > 0) {
                following.push(tempUser)
            }

        }
        for (let index = 0; index < basicUserData.followers.length; index++) {
            let tempUser = await getUser(basicUserData.followers[index].userId)
            if (Object.keys(tempUser).length > 0) {
                followers.push(tempUser)
            }
        }

        let tempPosts = await getPosts(userId)

        tempPosts.forEach(element => {
            posts.push({ message: element })
        });

       
        basicUserData.following = []
        basicUserData.followers = []
        basicUserData.posts =[]
        following.forEach(user=>basicUserData.following.push(user))
        followers.forEach(user=>basicUserData.followers.push(user))
        posts.forEach(post=>basicUserData.posts.push(post))

        return{basicUserData}

    }
    catch (error) {
        throw error
    }
}