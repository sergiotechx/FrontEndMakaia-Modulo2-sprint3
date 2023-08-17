"use client";
import React, { useContext } from "react";
import "./page.scss";
import { StoreContext } from "@/store/StoreProvider";

const Page = () => {
  const { perfilStore } = useContext(StoreContext);
  const followersCount = perfilStore?.followers.length;
  const followingCount = perfilStore?.following.length;
  const fotos = perfilStore.posts[0].message.image;

  return (
    <div className="firstContainer">
      <figure className="firstContainer__imgPortada">
        <img src={perfilStore.avatar} alt="" />
      </figure>
      <div className="firstContainer__details">
        <div className="firstContainer__imgPerfil">
          <span>
            {followersCount} <p>Followers</p>
          </span>
          <figure className="imgPerfil">
            <img src={perfilStore.poster} alt="" />
          </figure>
          <span>
            {followingCount} <p>Likes</p>
          </span>
        </div>
        <div className="firstContainer__description">
          <h2>{perfilStore.name}</h2>
          <span>J. Hello Guys</span>
          <span>Follow me and like my post</span>
        </div>
        <div className="buttons">
          <span>Follow</span>
          <span>Messages</span>
        </div>
      </div>
      <div className="secondContainers">
        <div className="filter">
          <span>Photos</span>
          <span>Videos</span>
          <span>Albun</span>
          <span>Tag</span>
        </div>
        <figure className="imgPost">
          <img src={fotos} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Page;
// merge
