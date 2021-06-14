import React from "react";
import "./estilo.css";

function Card({ pokemon }) {
  return (
    <div className="Card">
      <div className="Card_img">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>

      <div className="Card_name">{pokemon.name}</div>

      <div className="btn">
        <button>Detalhes</button>
      </div>
    </div>
  );
}
export default Card;
