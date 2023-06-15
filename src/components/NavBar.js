import React from "react";
import '../App.css';
import { NavLink } from "react-router-dom";

export default function NavBar() {
  
  return(
    <span className="App">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/clients">View Clients</NavLink>
      <NavLink to="/policies">View Policies</NavLink>
    </span>
  )
}