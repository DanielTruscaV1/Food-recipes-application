//Import react
import React, {useState} from 'react'
//Import images
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image1prime from "../images/image1.jfif";

//Create and export the "Main" function component
export default function Main(props) {

  return (
    <div className="main">
      <div>
        <h1 className="welcomeHeader">Welcome to Delicious.com!</h1>
        <img className="welcomeImage" src={image1prime} alt=""/>
      </div>
      {
        props.image1 !== ""?
        <div className="container">
          <h3>Searched:</h3>
          <hr/>
          <div className="card">
            <img src={props.image1} onClick={() => {
              props.setShouldBeShown(!props.shouldBeShown);
              props.setImage(props.image1);
              props.setTitle(props.title1);
              props.setId(props.id1);
              }}/>
            <p>
              {
                props.title1.length > 10?
                props.title1:
                props.title1
              }
            </p>
          </div>
         <div className="card">
            <img src={props.image2} onClick={() => {
              props.setShouldBeShown(!props.shouldBeShown);
              props.setImage(props.image2);
              props.setTitle(props.title2);
              props.setId(props.id2);
              }}/>
            <p>
              {
                props.title2.length > 10?
                props.title2:
                props.title2
              }
            </p>
          </div>
          <div className="card">
            <img src={props.image3} onClick={() => {
              props.setShouldBeShown(!props.shouldBeShown);
              props.setImage(props.image3);
              props.setTitle(props.title3);
              props.setId(props.id3);
              }}/>
            <p>
              {
                props.title3.length > 10?
                props.title3:
                props.title3
              }
            </p>
          </div>
          <div className="card">
            <img src={props.image4} onClick={() => {
              props.setShouldBeShown(!props.shouldBeShown);
              props.setImage(props.image4);
              props.setTitle(props.title4);
              props.setId(props.id4);
              }}/>
            <p>
              {
                props.title4.length > 10?
                props.title4:
                props.title4
              }
            </p>
          </div>
          <div className="card">
            <img src={props.image5} onClick={() => {
              props.setShouldBeShown(!props.shouldBeShown);
              props.setImage(props.image5);
              props.setTitle(props.title5);
              props.setId(props.id5);
              }}/>
            <p>
              {
                props.title5.length > 10?
                props.title5:
                props.title5
              }
            </p>
          </div>
        </div>
        :
        <>
        </>
      }
      <h3>Featured:</h3>
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
