import React, {useEffect, useState} from "react";
import {Switch,Route, Redirect, BrowserRouter} from "react-router-dom";
import FormPage from "./FormPage";
import ColorDetails from "./ColorDetails";
import ColorsHome from "./ColorsHome";

const Routes = ()=>{
    
    const initialColors = JSON.parse(localStorage.getItem("colors")) || {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
      };

      const [clrs, setClrs] = useState(initialColors);
    
      useEffect(
        () => localStorage.setItem("colors", JSON.stringify(clrs)),
        [clrs]
      );
      const addColor = (colorName, color)=> {
          setClrs(c => ({[colorName] : color, ...c}));
    }
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/colors"><ColorsHome clrs={clrs}/></Route>
            <Route exact path="/colors/new"><FormPage addColor={addColor}/></Route>
            <Route exact path="/colors/:color"><ColorDetails clrs={clrs}/></Route>
        
            <Redirect to="/colors"/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;