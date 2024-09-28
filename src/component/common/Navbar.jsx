
import React from "react";
import  { NavLink, useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService"


function Navbar(){{
    const isAuthenticated = ApiService.isAuthenticated();
    const isAdmin = ApiService.isAdmin();
    const isUser = ApiService.isUser();


    return (

        <nav>
            <div>
            </div>
        
        
        </nav>
    )

}
}
export default Navbar;