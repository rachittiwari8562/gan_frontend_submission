import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

var notSelectedStyle="w-20 md:w-40 py-1 rounded-3xl text-sm md:text-base hover:font-medium text-gray-500 hover:bg-amber-400 hover:text-black border-gray-300 border-2 hover:border-white my-2 flex  justify-center md:justify-start"
var selectedStyle = "w-20 md:w-40 py-1 rounded-3xl text-sm md:text-base font-medium bg-amber-400 text-black my-2 flex justify-center md:justify-start"
    
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
            <span className='hidden md:inline-flex justify-center items-center w-7 h-7 bg-white rounded-full mx-2'>
            <img className="w-4" src={item.icon}></img>
            </span>
            {item.name}
        </button>
  )}
 export default RoundMenuItem