import React from "react";
import {NavLink, Switch, Redirect} from "react-router-dom";
import "./Nav.css"

const Nav = ({name})=>{
    return(
        <>
            <NavLink className="nav" exact to={`/dogs/${name}`}>{name}</NavLink>
        </>
    )

}


export default Nav;