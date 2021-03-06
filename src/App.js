//Import react
import React, {useState} from "react";
//Import the "Style" CSS file
import "./Style.css";
//Import the "Header" component
import Header from "./components/Header";
//Import the "Search" component
import Search from "./components/Search";
//Import the "Footer" component
import Footer from "./components/Footer";

//Create the "App" component
function App() {
  return (
    <>
      {/*Return the "Header" component*/}
      <Header/>
      {/*Return the "Search" component*/}
      <Search/>
      {/*Return the "Footer" component*/}
      <Footer/>
    </>
  );
}

//Export the "App" component
export default App;
