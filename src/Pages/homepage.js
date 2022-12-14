import React, { Component,useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from '../Components/navbar';
import cake from "../Assets/Images/pngwing.com.png"
import Menu from '../Components/menu';
import ItemCard from '../Components/item_card';
import Items from '../Components/items';
import {navigationItems} from '../Constants/routing_constant';

const HomePage = (props) =>{
  return (
    <div className='bg-[#ECEAE7]'>
    <div className="h-full md:h-screen">
        <NavBar navigation={navigationItems}/>
        <div className="w-full h-5/6 grid grid-cols-7">
            <div className="col-span-5 my-auto mx-10">
                <p className="text-4xl md:text-6xl font-black text-amber-500"> Freshness Baked Everyday !</p>
                <p className="text-3xl md:text-5xl font-black"> It’s sweet. It’s light.</p>
                <p className="text-3xl md:text-5xl font-black"> It’s right here.</p>
                <p className='h-8'></p>
                <p className="text-xl font-medium italic">Come discover why we are best in bussiness</p>
                <p className="text-xl font-medium italic"> when it comes to cakes !</p>
            </div>
            <div className="bg-amber-400 col-span-2">
            <img
                className="absolute h-96 right-28 top-52 invisible lg:visible"
                      src={cake}
                      alt="Workflow"
                    />
            </div>
        </div>
    </div>
.
    <div className='h-full grid grid-cols-6 gap-x-4 px-2 md:px-10 pb-10 bg-green relative'>
        <div className='col-span-6 md:col-span-1'>
            <Menu/>
        </div>
        <Items/>
    </div>
    </div>
  )
}

export default HomePage
