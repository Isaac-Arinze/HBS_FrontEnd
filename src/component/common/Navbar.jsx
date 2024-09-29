
import React from "react";
import  { NavLink, useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService"


function Navbar(){
    const isAuthenticated = ApiService.isAuthenticated();
    const isAdmin = ApiService.isAdmin();
    const isUser = ApiService.isUser();


    return (

        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/home">Sytech Hotel</NavLink>
            </div>
            <ul className ="navbar-ul">
                <li><NavLink to="/home" activeClass="active"> Home</NavLink> </li>
                <li><NavLink to="/rooms" activeClass="active">Rooms</NavLink> </li>
                <li><NavLink to="find-booking" activeClass="active">bookings</NavLink> </li>
                <li><NavLink to="/profile" activeClass="active"> Profile</NavLink> </li>
                <li><NavLink to="/login" activeClass="active"> Login</NavLink> </li>
                <li><NavLink to="/regster" activeClass="active"> Register</NavLink> </li>
                <li>Logout</li>

            </ul>
        
        
        </nav>
    )

}

export default Navbar;