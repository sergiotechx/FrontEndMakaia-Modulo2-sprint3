import { Data_URL, URL_API } from "@/constants/Constants";
import axios from "axios";

export const getPosts = async (id) => {
  try {
    let complete_Url = Data_URL + `posts?userId=${id}`;
    const tempPosts = await axios.get(complete_Url);

    let messages = [];

    if (tempPosts.data.length > 0) {
      messages = tempPosts.data;
    }
    return messages;
  } catch (error) {
    throw error;
  }
};
export const getPost = async (id) => {
  try {
    let complete_Url = URL_API + `/posts/${id}`;
    console.log("esta", complete_Url);
    const tempPost = await axios.get(complete_Url);

    if (Object.keys(tempPost.data).length > 0) {
      return tempPost.data;
    } else {
      return {};
    }
  } catch (error) {
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    let complete_Url = Data_URL + `users/${id}`;
    const tempUserData = await axios.get(complete_Url);
    let user = {};

    if (Object.keys(tempUserData.data).length > 0) {
      user = tempUserData.data;
    }
    return user;
  } catch (error) {
    throw error;
  }
};
export const getPostComments = async (postId) => {
  try {
    let complete_Url = Data_URL + `comments?postId=${postId}`;

    const tempPostComments = await axios.get(complete_Url);

    if (tempPostComments.data.length > 0) {
      return tempPostComments.data;
    } else {
      return [];
    }
  } catch (error) {
    throw error;
  }
};

export const upDateProfile = async (id, user) => {
  try {
    let complete_Url = Data_URL + `users/${id}`;
    let result3 = await axios.patch(complete_Url, JSON.stringify(user), {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};
