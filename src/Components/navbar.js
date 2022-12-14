import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const navigation = [
  { name: 'Home',current: true,routes:""},
  { name: 'Receipe', current: false,routes:"/homepage/receipe" },
  { name: 'About us',current: false,routes:"/homepage/about_us" },
  { name: 'Contact Us',current:false,routes:"/homepage/contact_us"}
]

function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}

const NavBar = (props) =>{
  return (
    <div className=' grid grid-cols-7'>
              <div className="col-span-5 flex items-center justify-around h-12 md:h-20">
                  <h5 className="text-4xl pl-5 font-black text-gray-600">Cakes & Cakery</h5>
                  <div className="hidden md:block">
                    <div className="ml-16 flex items-baseline space-x-6">
                      {navigation.map((item) => (
                        <Link to={item.routes} key={item.routes}>
                        <button
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.routes===true
                              ? 'bg-purple-900 text-white'
                              : 'text-gray-100 hover:bg-amber-500 hover:text-white',
                            'px-4 py-1 rounded-md text-lg font-bold text-gray-700'
                          )}>
                          {item.name}
                        </button>
                        </Link>
                      ))}
                    </div>
                </div>
              </div>
            <div className='col-span-2 bg-amber-400'></div>
            </div>
  )
}

export default NavBar
