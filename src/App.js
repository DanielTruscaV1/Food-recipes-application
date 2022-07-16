//Import react
import React from "react";
//Import the "Style" CSS file
import "./Style.css";
//Import the "Header" component
import Header from "./components/Header";
//Import the "Search" component
import Search from "./components/Search";
//Import the "Main" component
import Main from "./components/Main";
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
      {/*Return the "Main" component*/}
      <Main/>
      {/*Return the "Footer" component*/}
      <Footer/>
    </>
  );
}

//Export the "App" component
export default App;
