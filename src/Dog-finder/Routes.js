import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Dog from "./Dog";
import Dogs from "./Dogs";
import {v4 as uuid} from "uuid";

const Routes = ({dogs})=>{
    return(
        <Switch>
        <Route exact path="/dogs"><Dogs /></Route>
            {dogs.map(dog=>(
                <Route key={uuid()} exact path={`/dogs/${dog.name}`}>
                <Dog name={dog.name} age={dog.age} 
                src={dog.src} facts={dog.facts}/>
            </Route>
            ))}
        
        <Redirect to="/dogs"/>
        </Switch>
    )
}

export default Routes;