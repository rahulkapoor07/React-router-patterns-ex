import React, {useState} from "react";
import {useHistory} from "react-router-dom";

const FormPage = ({addColor})=>{
    const history = useHistory(); 
    const INITIAL_STATE = {colorName: "", color : ""}
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        console.log(name, value);
        setFormData(data => ({...data,
            [name] : value
        }));
    }

    const handleSubmit = ()=>{
        console.log(formData);
        addColor(formData.colorName, formData.color);
        history.push("/colors");
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor ="color-name" >Color Name: </label>
            <input id="color-name" type="text" placeholder="Color Name"
            value={formData.colorName} name="colorName"
            onChange={handleChange}/>

            <label htmlFor ="color" >Color: </label>
            <input id="color" type="color"
            value={formData.color} name="color"
            onChange={handleChange}/>

            <button>Add Color</button>
        </form>
    )
}

export default FormPage;