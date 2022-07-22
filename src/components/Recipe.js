//Import react
import React, {useState} from 'react'
//Crate the "Recipe" component
const Recipe = (props) => {
  const [showInformations ,setShowInformations] = useState(false);
  const [cuisines, setCuisines] = useState([]);
  const [price, setPrice] = useState(0);
  const [preparationTime, setPreparationTime] = useState(0);
  const [vegetarian, setVegetarian] = useState(false);
  const [score, setScore] = useState(false);
  const [instructions, setInstructions] = useState("");

  //Make the API call
  const APIkey = "3f0ecd1443624db880a149d438cf0841";
  const call = async () => {
    const API = await fetch("https://api.spoonacular.com/recipes/"+props.id+"/information?apiKey="+APIkey);
    const data = await API.json();
    console.log(data);
    setShowInformations(!showInformations);
    setCuisines(data.cuisines);
    setPrice(data.pricePerServing);
    setPreparationTime(data.readyInMinutes);
    setVegetarian(data.vegetarian);
    setScore(data.healthScore);
    setInstructions(data.instructions);
  }

  return (
    <div className="recipe">
      <button className="back">Go back</button>
      <img src={props.image} alt=""/>
      <h3>{props.title}</h3>
      <button onClick={call}>Show informations</button>
      {
        showInformations?
        <>
          <h3>Price:</h3>
          <p>${price}</p>
          <h3>Preparation time:</h3>
          <p>{preparationTime} minutes</p>
          <h3>Vegetarian:</h3>
          <p>{
            vegetarian?
            "Yes":
            "No"
          }</p>
          <h3>Health score:</h3>
          <p><span>{score}</span></p>
          <h3>Cuisines: </h3>
          {
            cuisines.map(element => <p>{element}</p>)
          }
          <h3>Instructions:</h3>
          <p>{instructions}</p>
        </>:
        <>
        </>
      }
    </div>
  )
}
//Export the "Recipe" component
export default Recipe