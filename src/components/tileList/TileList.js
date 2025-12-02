import React from "react";
import Tile from "../tile/Tile"

export const TileList = (props) => {

  return (
    <div>
      {props.array.map(({name, ...description}, index)=>{
        return (
          <div> 
            <Tile key={index} name={name} description={description}/> 
            <hr></hr>
          </div>
        )
      })}
    </div>
  );
};
