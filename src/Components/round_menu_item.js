import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

var notSelectedStyle="w-40 py-1 rounded-3xl text-md hover:font-medium text-gray-500 hover:bg-amber-400 hover:text-black border-gray-300 border-2 hover:border-white my-2"
var selectedStyle = "w-40 py-1 rounded-3xl text-md font-medium bg-amber-400 text-black my-2"
    
const checkSelected = (name,selected)=>{
    if (name==selected){
        return selectedStyle
    }
    else{
        return notSelectedStyle
    }
}
    
const RoundMenuItem = ({selectMenuItem,item,selected}) =>{
  return (
        <button
            key={item.name}
            onClick={()=>selectMenuItem(item.name)}
            className={checkSelected(item.name,selected)}
            >
            {item.name}
        </button>
  )}
 export default RoundMenuItem