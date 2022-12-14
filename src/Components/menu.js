import React, {useState,useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RoundMenuItem from './round_menu_item';

const menuItems = [
    { name: 'Pizzas',current: true,routes:"/homepage/pizza/"},
    { name: 'Cakes', current: false,routes:"/homepage/cakes/" },
    { name: 'Icecreams',current: false,routes:"/homepage/icecreams/" },
    { name: 'Breads',current:false,routes:"/homepage/breads/"}
  ]



const Menu = () =>{

    const [currentMenuItem, selectMenuItem] = useState("Cakes")
    return (
        <div className="grid grid-cols-1">
            <p className='text-3xl font-bold mb-8'>Menu</p>
        {menuItems.map((item)=>(
            // <p>{item.name}</p>
            <RoundMenuItem key={item.name} selected={currentMenuItem} item={item} selectMenuItem={selectMenuItem}></RoundMenuItem>
        ))}
        </div>
    )}
 export default Menu