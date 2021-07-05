import React from "react";
import {NavLink} from "react-router-dom";
import { v4 as uuid } from "uuid";

const ColorsHome = ({clrs})=>{
      
    return(
        <div>
            <div>
            <h2>Welcome to the color factory</h2>
            <h2><NavLink exact to="/colors/new">Add a Color</NavLink></h2>
            </div>

            <div>
                <h3>Please select a color</h3>
                <ul>
                    {Object.keys(clrs).map(c => <li key={uuid()}><NavLink exact to={`/colors/${c}`}>{c}</NavLink></li>)}
                </ul>
                
            </div>
            
        </div>
    )
}

export default ColorsHome;