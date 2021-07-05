import React from "react";
import {useParams, useHistory} from "react-router-dom";
import "./ColorDetails.css"
// import {v4 as uuid} from "uuid";

const ColorDetails = ({clrs}) => {
    const history = useHistory();
    const {color} = useParams();
    const arrOfclrs = Object.keys(clrs);
    console.log(arrOfclrs);
    const finalColor = arrOfclrs.find(el => el === color);

    const handleClick = () => {
        history.push("/colors");
    }
    return(
        <div className="color-detail" style = {{backgroundColor : clrs[finalColor]}}>
            <h2>This is {finalColor}</h2>
            <h2>Isn't is beautiful?</h2>
            <button onClick={handleClick}>Get Back!</button>
        </div>
    )
}

export default ColorDetails;