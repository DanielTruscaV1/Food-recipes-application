//Import react
import React, {useState} from 'react'
//Import images
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";

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
      <div className="card">
        <img src={image1}/>
        <p>Chocolate Orange Cake</p>
      </div>
      <div className="card">
        <img src={image2}/>
        <p>Chicken Spinach Mozzarella</p>
      </div>
      <div className="card">
        <img src={image3}/>
        <p>Bacon-Apple-Pecan Stuffed</p>
      </div>
      <div className="card">
        <img src={image4}/>
        <p>Mushroom Jerky</p>
      </div>
      <div className="card">
        <img src={image5}/>
        <p>Beef Jerky</p>
      </div>
    </div>
  )
}
