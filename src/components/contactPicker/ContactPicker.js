import React from "react";

export const ContactPicker = (props) => {
  return (
    <select onChange={props.onChange} value={props.value}>
      <option value="">No Contact Selected</option>
      {props.contacts.map(({name})=>{
        return(
          <option key={name} value={name}>{name}</option>
        )
      })}
    </select>
  );
};
