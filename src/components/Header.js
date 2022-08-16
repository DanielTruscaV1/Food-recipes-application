//Import react
import React, {useState} from 'react'

//Create and export the "Header" component
export default function Header() {
  const [darkTheme, setDarkTheme] = useState(false);

  const changeTheme = event => {
    event.preventDefault();
    if(darkTheme == false)
    {
      document.body.style.backgroundColor = "rgb(50, 50, 50)";
      document.body.style.color = "white";
      if(document.getElementById("searchBar").style.backgroundColor != "")
        document.getElementById("searchBar").style.backgroundColor = "white";
      document.getElementById("title").style.color = "black";
      document.getElementById("icon").style.color = "black";
      document.getElementById("footerId").style.backgroundColor = "white";
      document.getElementsByClassName("footerText")[0].style.color = "rgb(50, 50, 50)";
      document.getElementsByClassName("footerText")[1].style.color = "rgb(50, 50, 50)";
      document.getElementsByClassName("fa")[2].style.color = "rgb(50, 50, 50)";
      document.getElementsByClassName("fa")[3].style.color = "rgb(50, 50, 50)";
      document.getElementsByClassName("fa")[4].style.color = "rgb(50, 50, 50)";
      document.getElementsByClassName("fa")[5].style.color = "rgb(50, 50, 50)";
      document.getElementsByClassName("fa")[6].style.color = "rgb(50, 50, 50)";
      document.getElementById("headerId").style.backgroundColor = "rgb(240, 240, 240)";
    }
    else
    {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.getElementById("searchBar").style.backgroundColor = "rgb(50, 50, 50)";
      document.getElementById("footerId").style.backgroundColor = "rgb(50, 50, 50)";
      document.getElementsByClassName("footerText")[0].style.color = "white";
      document.getElementsByClassName("footerText")[1].style.color = "white";
      document.getElementsByClassName("fa")[2].style.color = "white";
      document.getElementsByClassName("fa")[3].style.color = "white";
      document.getElementsByClassName("fa")[4].style.color = "white";
      document.getElementsByClassName("fa")[5].style.color = "white";
      document.getElementsByClassName("fa")[6].style.color = "white";
      document.getElementById("headerId").style.backgroundColor = "rgb(240, 240, 240)";
    }
    setDarkTheme(!darkTheme);
  }

  return (
    <div className="header" id="headerId">
        <i className="fa fa-cutlery" id="icon"></i>
        <h1 id="title">Delicious.com</h1>
        <br/>
        <button onClick={changeTheme}>Dark mode</button>
    </div>
  )
}
