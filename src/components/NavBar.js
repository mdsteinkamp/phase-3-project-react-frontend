import React from "react";
import '../App.css';
import { NavLink } from "react-router-dom";

export default function NavBar() {
  
  return(
    <span className="App">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/addclient">Add a Client</NavLink>
      <NavLink to="/addpolicy">Add a Policy</NavLink>
    </span>
  )
}