import React from "react";

const Tile = (props) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{props.name}</p>
      {Object.values(props.description).map((value, index)=>{
        return <p className="tile" key={index}>{value}</p>
      })}
    </div>
  );
};

export default Tile;
