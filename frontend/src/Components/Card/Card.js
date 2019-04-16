import React from "react";
import "./Card.css";

function Card(props) {
  const kuva = props.kuva;
  if (!kuva) {
    return <div className={"Card"}>{props.children}</div>;
  }

  var tyyli = {
    backgroundImage: `url(${kuva})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    alt: `url(${kuva.alt})`
  };

  return (
    <div className={"Card"} style={tyyli}>
      {props.children}
    </div>
  );
}

export default Card;
