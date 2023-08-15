"use client";
import React, { useContext } from "react";
import "./page.scss";
import { StoreContext } from "@/store/StoreProvider";

const Page = () => {
  const [perfilStore, perfilDispatch] = useContext(StoreContext); // coment
  return (
    <div className="firstContainer">
      <figure className="firstContainer__imgPortada">
        <img
          src="https://img.panamericana.pe/noticia/2016/09/640-1474742374600.jpg.webp"
          alt=""
        />
      </figure>
      <div className="firstContainer__details">
        <div className="firstContainer__imgPerfil">
          <span>
            10.7 M <p>Followers</p>
          </span>
          <figure className="imgPerfil">
            <img
              src="https://img.freepik.com/fotos-premium/cara-modelo-coreana_825367-1711.jpg?w=2000"
              alt=""
            />
          </figure>
          <span>
            108.3 M <p>Likes</p>
          </span>
        </div>
        <div className="firstContainer__description">
          <h2>Jennie Kim</h2>
          <span>J. Hello Guys</span>
          <span>Follow me and like my post</span>
        </div>
        <div className="buttons">
          <span>Follow</span>
          <span>Messages</span>
        </div>
        <div className="secondContainers">
          <div className="filter">
            <span>Photos</span>
            <span>Videos</span>
            <span>Albun</span>
            <span>Tag</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
