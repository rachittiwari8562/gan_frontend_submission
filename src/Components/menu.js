import React, {useState,useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RoundMenuItem from './round_menu_item';
import {menuItems} from "../Constants/routing_constant"


const Menu = () =>{

    const [currentMenuItem, selectMenuItem] = useState("Cakes")
    return (
        <div className="grid grid-cols-4 gap-x-1 md:grid-cols-1">
            <p className='col-span-4 md:col-span-1 text-xl md:text-3xl font-bold mb-2 md:mb-8'>Menu</p>
        {menuItems.map((item)=>(
            <RoundMenuItem key={item.name} selected={currentMenuItem} item={item} selectMenuItem={selectMenuItem}></RoundMenuItem>
        ))}
        </div>
    )}
 export default Menu