import React, {useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

  const [contacts, setContacts] = useState([]);    //variables for contacts 
  const [appointments, setAppointments] = useState([]); //variables for appointments 
  
  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (contact) =>{
    setContacts((prev)=> [...prev, contact])
  }

  const addAppointment = (appointment) =>{
    setAppointments((prev)=> [...prev, appointment])
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route path={"/contacts"} element={ <ContactsPage contacts={contacts} addContact={addContact}   /> /* Add props to ContactsPage */ }/>
      <Route path={"/appointments"} element={ <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
