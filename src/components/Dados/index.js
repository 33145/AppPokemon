import React from "react";
import "./estilo.css";

function Dados({ pokemon }) {
  return (
    <div className="Card">
      <div className="Card__types">
        {pokemon.types.map((type) => {
          return <div className="Card__type">{type.type.name}</div>;
        })}
      </div>
      <div className="Card__info">
        <div className="Card__data Card__data--weight">
          <p className="title">Weight</p>
          <p>{pokemon.weight}</p>
        </div>
        <div className="Card__data Card__data--height">
          <p className="title">Height</p>
          <p>{pokemon.weight}</p>
        </div>
        <div className="Card__data Card__data--abilit">
          <p className="title">Weight</p>
          <p>{pokemon.ability[0].ability.name}</p>
        </div>
      </div>
    </div>
  );
}
export default Dados;
