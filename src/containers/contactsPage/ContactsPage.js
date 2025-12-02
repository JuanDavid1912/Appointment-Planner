import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState("");
 const [phone, setPhone] = useState("");
 const [email, setEmail] = useState("");
 const [duplicate, setDuplicate] = useState(false);


  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(()=>{
    const exists = props.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    setDuplicate(exists);
  },[name, props.contacts])
 
 const handleSubmit = (e) => {
    e.preventDefault();
    if(duplicate == true){
      alert("The contact already exists, please change the name.");
      return;
    }

    props.addContact({name:name, phone:phone, email:email})
    
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit}/> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList array={props.contacts}/>
      </section>
    </div>
  );
};
