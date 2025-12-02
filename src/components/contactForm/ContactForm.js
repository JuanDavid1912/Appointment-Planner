import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input  id="name" value = {name} type = 'text' onChange={({target})=> setName(target.value)}></input>

        <label>phone</label>
        <input id="phone" value = {phone} type = 'text' onChange={({target})=> setPhone(target.value)}></input>

        <label>email</label>
        <input id="email" value = {email} type = 'text' onChange={({target})=> setEmail(target.value)}></input>

        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

