import {  Outlet, NavLink } from "react-router-dom";

export const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

function Root() {
    return (
        <>
            <nav>
                <NavLink to={"/contacts"} >
                Contacts
                </NavLink>
                <NavLink to={"/appointments"} >
                Appointments
                </NavLink>
            </nav>
            <Outlet/>
      </>
    );

}

export default Root;