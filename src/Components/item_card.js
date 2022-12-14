import React, { Component } from 'react'
import {connect} from 'react-redux';
import {AddCart,IncreaseQuantity,DecreaseQuantity} from '../Actions'
import trash from "../Assets/Images/delete.png"

const ItemCard = (item) =>{
    var newitem = item.item
  return (
    <div className='h-auto w-full grid grid-cols-5 gap-x-1 md:gap-x-4 rounded-xl bg-white overflow-hidden hover:shadow-2xl'>
        <div className='col-span-5 md:col-span-2'>
            <img className='bg-clip-border h-40 w-full md:h-full' src={newitem.image}>
            </img>
        </div>
        <div className='col-span-5 md:col-span-3 p-2'>
            <p className='text-md md:text-xl font-bold pb-2 text-gray-800'>{newitem.name}</p>
            <p className='hidden md:flex text-md font-medium text-gray-700 pb-2'>{newitem.description}</p>
            <div className='grid grid-cols-2'>
                <div>
                    <p className='font-bold text-sm md:text-base'>Servings</p>
                    <p className='font-black text-sm md:text-base text-gray-600'>{2}</p>
                </div>
                <div>
                    <p className='font-bold text-sm md:text-base'>Price</p>
                    <p className='font-black text-sm md:text-base text-gray-600'>{"$ "+ newitem.price}</p>
                </div>
            </div>
            {!item.isInCart &&
                <button className=' mt-4 my-2 w-full py-1 rounded-lg bg-amber-400 text-md font-bold text-gray-800' onClick={()=>item.addToCart(newitem)}>Add to Cart</button>}
            {item.isInCart &&
                <div className='grid grid-cols-5 mt-4'>
                    <button className='p-1 rounded-lg bg-amber-400 text-xl font-black' onClick={()=>item.addToCart(newitem)}>+</button>
                    <p className='col-span-1 text-lg font-bold m-auto text-gray-800'>{item.getItemNumberInCart(newitem)}</p>
                    <button className='p-1 rounded-lg bg-amber-400 text-xl font-black' onClick={()=>item.removeOneFromCart(newitem)}>-</button>
                    <div className='col-span-1'></div>
                    <button className='col-span-1 rounded-lg bg-red-400' onClick={()=>item.removeFromCart(newitem)}><img className='w-6 ml-2' src={trash}></img></button>
                </div>
            }
        </div>

    </div>
  )}

const mapStateToProps = state =>{
return {
        carts: state._todoProduct.carts,
    };
}


export default connect(mapStateToProps,{AddCart,IncreaseQuantity,DecreaseQuantity})(ItemCard)