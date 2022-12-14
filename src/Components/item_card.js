import React, { Component } from 'react'
import {connect} from 'react-redux';
import {AddCart,IncreaseQuantity,DecreaseQuantity} from '../Actions'

const ItemCard = (item) =>{
    var newitem = item.item
  return (
    <div className='h-64 w-full grid grid-cols-5 gap-x-4 rounded-xl bg-white overflow-hidden hover:shadow-2xl'>
        <div className='col-span-2'>
            <img className='h-64 bg-clip-border' src={newitem.image}>
            </img>
        </div>
        <div className='col-span-3 p-2'>
            <p className='text-xl font-bold pb-2 text-gray-800'>{newitem.name}</p>
            <p className='text-md font-medium text-gray-700 pb-2'>{newitem.description}</p>
            <div className='grid grid-cols-2'>
                <div>
                    <p className='font-bold'>Servings</p>
                    <p className='font-black text-gray-600'>{2}</p>
                </div>
                <div className>
                    <p className='font-bold'>Price</p>
                    <p className='font-black text-gray-600'>{"$ "+ newitem.price}</p>
                </div>
            </div>
            {!item.isInCart &&
            <button className='my-2 w-full py-1 rounded-lg bg-amber-400 text-md font-bold text-gray-800' onClick={()=>item.addToCart(newitem)}>Add to Cart</button>}
            {item.isInCart &&
            <button className='my-2 w-full py-1 rounded-lg bg-red-500 text-md font-bold text-gray-800' onClick={()=>item.removeFromCart(newitem)}>Remove From Cart</button>}
            {/* <div className='grid grid-cols-5'>
            <button className='p-1 rounded-lg bg-amber-400 text-xl font-black'>+</button>
            <p className='col-span-3 text-lg font-bold m-auto text-gray-800'>39</p>
            <button className='p-1 rounded-lg bg-amber-400 text-xl font-black'>-</button>
            </div> */}
        </div>

    </div>
  )}

const mapStateToProps = state =>{
return {
        carts: state._todoProduct.carts,
    };
}


export default connect(mapStateToProps,{AddCart,IncreaseQuantity,DecreaseQuantity})(ItemCard)