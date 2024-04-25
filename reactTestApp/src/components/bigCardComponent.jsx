import React from "react";

export const BigCard = (props) => {
    return(
      <div class={props.class}>
        <img src={props.src} className={props.className} alt={props.alt}></img>
        <h2>{props.h2}</h2>
      </div>
    );
  };