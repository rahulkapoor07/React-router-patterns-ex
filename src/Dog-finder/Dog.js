import React from "react";

const Dog = ({name, age, src, facts})=>{
    console.log(src);
    return(
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <img src={src} alt="dog"/>
            <ul>
            {facts.map((fact, idx) =><li key={idx}>{fact}</li>)}
            </ul>
        </div>
    )
}


export default Dog;