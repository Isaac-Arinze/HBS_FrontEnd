import React, {  Component  } from "react";
import { NavLink, useLocation  } from "react-router-dom";
import ApiService from "./ApiService";


export const ProtectedRoute = ({element: Component})=>{
    const location = useLocation();

    return ApiService.isAuthenticated() ?(
        Component
    ):(
        <NavLink to="/login" replace state={{from: location}}/>
    );

};

export const AdminRoute = ({element: Component})=>{
    const location = useLocation();

    return ApiService.isAdmin ?(
        Component
    ):(
        <NavLink to="/login" replace state={{from: location}}/>
    );

};


