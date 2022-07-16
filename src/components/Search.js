//Import react
import React from 'react'

//Create and export the "Search" component
export default function Search() {
  return (
    <div className="search">
        <input type="text" placeholder="Search for something..."/>
        <button><i className="fa fa-search"></i></button>
    </div>
  )
}
