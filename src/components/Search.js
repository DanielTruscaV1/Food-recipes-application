//Import react
import React, {useState} from 'react'
//Import the "Main" component
import Main from "./Main";
//Import the "Recipe" component
import Recipe from "./Recipe";

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
  const [id1, setId1] = useState("");
  const [id2, setId2] = useState("");
  const [id3, setId3] = useState("");
  const [id4, setId4] = useState("");
  const [id5, setId5] = useState("");
  const [text, setText] = useState("");
  const [shouldBeShown, setShouldBeShown] = useState(true);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");

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
    setId1(data.results[0].id);
    setId2(data.results[1].id);
    setId3(data.results[2].id);
    setId4(data.results[3].id);
    setId5(data.results[4].id);
  }

  const [showSignUp, setShowSignUp] = useState(false);
  const goToSignUp = () => {
    setShowSignUp(!showSignUp);
  }

  return (
    <div className="search">
        <button className="authentication" onClick={goToSignUp}>Sign-up</button>
        <button className="authentication">Sign-in</button>
        <br/>
        {
        showSignUp?
        <>
          <h1 className="titleHeader">Sign-up today!</h1>
          <div className="signUpContainer">
            <p>Set your username:</p>
            <br/>
            <input type="text" className="signUpInput" placeholder="Username..." required/>
            <p>Set your password:</p>
            <br/>
            <input type="text" className="signUpInput" placeholder="Password..." required/>
            <p>Set your email:</p>
            <br/>
            <input type="text" className="signUpInput" placeholder="Email..." required/>
            <br/>
            <button onClick={() => alert("You have been signed up!")}>Sign-up</button>
          </div>
        </>:
        <>
          <input type="text" placeholder="Search for something..." id="searchBar" onChange={event => setText(event.target.value)}/>
          <button onClick={call}><i className="fa fa-search"></i></button>
          {
            shouldBeShown?
            <Main shouldBeShown={shouldBeShown} setShouldBeShown={setShouldBeShown} setImage={setImage} setTitle={setTitle} setId={setId} image1={image1} image2={image2} image3={image3} image4={image4} image5={image5} title1={title1} title2={title2} title3={title3} title4={title4} title5={title5} id1={id1} id2={id2} id3={id3} id4={id4} id5={id5}/>:
            <Recipe shouldBeShown={shouldBeShown} setShouldBeShown={setShouldBeShown} image={image} title={title} id={id}/>
          }
        </>
        }
    </div>
  )
}
