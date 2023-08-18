import axios from "axios";
import { endpoints } from "../constants/Constants";
const julian = require("julian");

const sendComent = async (newComent) => {
  const now = new Date();
  const newComentObject = {
    postId: 6,
    userId: 2,
    text: newComent,
    timestamp: Number(julian(now)),
  };

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
  } catch (error) {
    console.error("Error al enviar el comentario:", error);
  }
};

export { sendComent };
