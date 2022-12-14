import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}

const NavBar = ({navigation}) =>{
  return (
    <div className='grid grid-cols-7'>
              <div className="col-span-5 flex items-center justify-around h-12 md:h-20">
                  <h5 className="hidden md:block text-4xl pl-5 font-black text-gray-600">Cakes & Cakery</h5>
                  <div className="hidden md:block">
                    <div className="ml-16 flex items-baseline space-x-6">
                      {navigation.map((item) => (
                        <Link to={item.routes} key={item.routes}>
                        <button
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.name==="Home"
                              ? 'bg-amber-500 text-white'
                              : 'text-gray-500 hover:bg-amber-500 hover:text-white',
                            'px-4 py-1 rounded-md text-lg font-bold'
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
