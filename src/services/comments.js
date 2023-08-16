import axios from "axios";
import { endpoints} from "../constants/Constants";
const julian = require('julian');

const sendComment = async (newComment) => {
    const now = new Date();
    const newCommentObject = { 
        postId: 6, 
        userId: 2, 
        text: newComment,
        timestamp: Number(julian(now)),
    };


    try {
              
       
            let result = await axios.post(endpoints.coments, JSON.stringify(newCommentObject), {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            })
            console.log(result);
            console.log('revisar', endpoints.coments);
    } catch (error) {
        console.error("Error al enviar el comentario:", error);
    }
};

export { sendComment };