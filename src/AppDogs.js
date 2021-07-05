import {BrowserRouter, NavLink} from "react-router-dom";
import './App.css';
import Nav from "./Dog-finder/Nav";
import Routes from "./Dog-finder/Routes";
import {v4 as uuid} from "uuid";

function AppDogs({dogs}) {
  return (
    <div className="App">
      <BrowserRouter>

      <NavLink exact to="/dogs">Home</NavLink>

      <ul>
      {dogs.map(el=> (<li key={uuid()}><Nav  name={el.name}/></li>))}
      </ul>
      
      <Routes dogs={dogs}/>

      </BrowserRouter>
    </div>
  );
}

AppDogs.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: `../pictures/whiskey.jpg`,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: `../pictures/duke.jpg`,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: `../pictures/perry.jpg`,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: `../pictures/tubby.jpg`,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}




export default AppDogs;
