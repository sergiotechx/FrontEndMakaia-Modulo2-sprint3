import axios from "axios";
import { URL_API, endpoints } from "../constants/Constants";
import { getPost } from "./primitives";
const julian = require("julian");

const sendComent = async (postId, userId, newComent) => {
  const now = new Date();
  const newComentObject = {
    postId: postId,
    userId: userId,
    text: newComent,
    timestamp: Number(julian(now)),
  };

  let consulta = `${URL_API}/comments?_sort=id&postId=${postId}&_order=desc`;

  try {
    let result = await axios.post(
      endpoints.coments,
      JSON.stringify(newComentObject),
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(result);
    console.log("revisar", endpoints.coments);
    let tempost = await getPost(postId);
    let result2 = await axios.get(consulta);
    let lastComentId = result2.data[0].id;
    tempost.comments.push({ commentId: lastComentId });
    let result3 = await axios.patch(
      `${URL_API}/posts/${postId}`,
      JSON.stringify(tempost),
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(result3);
  } catch (error) {
    console.error("Error al enviar el comentario:", error);
  }
};

export { sendComent };
