//Import react
import React, {useState} from 'react'
//Import images
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";

//Create and export the "Main" function component
export default function Main(props) {

  return (
    <div className="main">
      {
        props.image1 !== ""?
        <div className="container">
          <h3>Searched:</h3>
          <hr/>
          <div className="card">
            <img src={props.image1}/>
            <p>
              {
                props.title1.length > 10?
                props.title1:
                props.title1
              }
            </p>
          </div>
         <div className="card">
            <img src={props.image2}/>
            <p>
              {
                props.title2.length > 10?
                props.title2:
                props.title2
              }
            </p>
          </div>
          <div className="card">
            <img src={props.image3}/>
            <p>
              {
                props.title3.length > 10?
                props.title3:
                props.title3
              }
            </p>
          </div>
          <div className="card">
            <img src={props.image4}/>
            <p>
              {
                props.title4.length > 10?
                props.title4:
                props.title4
              }
            </p>
          </div>
          <div className="card">
            <img src={props.image5}/>
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
