//Import react
import React, {useState} from 'react'
//Import the "Main" component
import Main from "./Main";

//Create and export the "Search" component
export default function Search() {
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const [title3, setTitle3] = useState("");
  const [title4, setTitle4] = useState("");
  const [title5, setTitle5] = useState("");
  const [text, setText] = useState("");

  //Make the API call
  const APIkey = "3f0ecd1443624db880a149d438cf0841";
  const call = async () => {
    const API = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey="+APIkey+"&query="+text);
    const data = await API.json();
    console.log(data);
    setImage1(data.results[0].image);
    setImage2(data.results[1].image);
    setImage3(data.results[2].image);
    setImage4(data.results[3].image);
    setImage5(data.results[4].image);
    setTitle1(data.results[0].title);
    setTitle2(data.results[1].title);
    setTitle3(data.results[2].title);
    setTitle4(data.results[3].title);
    setTitle5(data.results[4].title);
  }

  return (
    <div className="search">
        <input type="text" placeholder="Search for something..." id="searchBar" onChange={event => setText(event.target.value)}/>
        <button onClick={call}><i className="fa fa-search"></i></button>
        {/*Return the "Main" component*/}
        <Main image1={image1} image2={image2} image3={image3} image4={image4} image5={image5} title1={title1} title2={title2} title3={title3} title4={title4} title5={title5}/> 
    </div>
  )
}
