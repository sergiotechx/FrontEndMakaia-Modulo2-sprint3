"use client";
import React, { useContext, useState } from "react";
import "./page.scss";
import { StoreContext } from "@/store/StoreProvider";
import { Button } from "@mantine/core";
import Swal from "sweetalert2";

const Page = () => {
  const { perfilStore } = useContext(StoreContext);
  const followersCount = perfilStore?.followers.length;
  const followingCount = perfilStore?.following.length;
  const fotos = perfilStore.posts[0].message.image;
  const [menuOptions, setMenuOptions] = useState(false);
  const [disabeled, setDisabeled] = useState(true);
  const [inputValue, setInputValue] = useState(perfilStore.name);

  const handleBack = () => {
    console.log("Atras");
  };

  const handleOptions = () => {
    setMenuOptions((prevMenuOptions) => !prevMenuOptions);
  };

  const handleEdit = () => {
    setDisabeled((prevDisabeled) => !prevDisabeled);
    setMenuOptions(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClickEdit = () => {
    console.log("icon edit");
    Swal.fire({
      title: "Espera un momento!",
      text: "Estas seguro de modificar tu perfil?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, modificar perfil!",
    }).then((result) => {
      console.log(inputValue);
      if (result.isConfirmed) {
        setDisabeled((prevDisabeled) => !prevDisabeled);
        Swal.fire("Excelente!", "Perfil modificado con exito.", "success");
      }
    });
  };

  return (
    <div className="firstContainer">
      <figure className="options">
        <img
          onClick={handleBack}
          src="/images/chevron-back-outline.svg"
          alt=""
        />
        <img
          onClick={handleOptions}
          src="/images/ellipsis-horizontal-outline.svg"
          alt=""
        />
      </figure>
      <Button
        onClick={handleEdit}
        className={`menuOpcions ${menuOptions ? "menuOpcionsActive" : ""}`}
        variant="gradient"
        gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
      >
        Editar perfil
      </Button>
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
          <div className="container__input">
            <input
              onChange={handleInputChange}
              disabled={disabeled}
              className="span"
              value={inputValue}
            ></input>
            <figure
              onClick={handleClickEdit}
              className={`icon-edit  ${!disabeled ? "icon-editActive" : ""}`}
            >
              <img src="/images/edit-3.svg" alt="" />
            </figure>
          </div>

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
