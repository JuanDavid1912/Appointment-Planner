import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <div>
      <form onSubmit={handleSubmit}>     
      <label>Name</label>
      <input id="name" type="text" value={name} onChange={({target})=>setName(target.value)}/>

      <label>Date</label>
      <input id="date" type="date" min={getTodayString()} value={date} onChange={({target})=>setDate(target.value)}/>

      <label>Time</label>
      <input id="time" type="time" value={time} onChange={({target})=>setTime(target.value)}/>

      <ContactPicker contacts={contacts} value={contact}  onChange={({target})=>setContact(target.value)}/>

      <button type="submit">Add Appointment</button>
      </form>
    </div>
  );
};
