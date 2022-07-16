//Import react
import React, {useState} from 'react'

//Create and export the "Main" function component
export default function Main() {
  const [image, setImage] = useState("");

  //Make the API call
  const APIkey = "3f0ecd1443624db880a149d438cf0841";
  const call = async () => {
    const API = await fetch("https://api.spoonacular.com/recipes/random?apiKey="+APIkey);
    const data = await API.json();
    console.log(data);
    setImage(data.recipes[0].image);
  }

  return (
    <div className="main">
      <h3 onClick={call}>Featured:</h3>
      <hr/>
      <img src={image}/>
    </div>
  )
}
