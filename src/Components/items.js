import React, {useState,useEffect } from 'react'
import {connect} from 'react-redux';
import ItemCard from './item_card';
import {AddCart} from '../Actions'
// dummy data
import one from "../Assets/Images/1.jpg"
import two from "../Assets/Images/2.jpg"
import three from "../Assets/Images/3.jpg"
import four from "../Assets/Images/4.jpg"
import five  from "../Assets/Images/5.jpg"

const Items = (props) =>{
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
  
    useEffect(() => {
      total();
    }, [cart]);
  
    const total = () => {
      let totalVal = 0;
      for (let i = 0; i < cart.length; i++) {
        totalVal += cart[i].price;
      }
      setCartTotal(totalVal);
    };
  
    const addToCart = (el) => {
        setCart([...cart, el]);
    };
  
    const removeFromCart = (el) => {
      let hardCopy = [...cart];
      hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
      setCart(hardCopy);
    };

    const isInCart = (val)=>{
        return cart.some(item => val.id === item.id);
    };

    const showCart = ()=>{
        console.log(cart);
    }

    return (
        <div className='col-span-5 grid grid-cols-3 gap-x-6 gap-y-6'>
            <div className="relative col-span-2 w-full text-gray-600 focus-within:text-gray-400 p-2">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                </span>
                <input type="search" name="q" className="w-full py-2 text-sm text-white bg-transparent border-gray-300 border-2 rounded-3xl pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autoComplete="off"/>
            </div>
            <button className='col-span-1 px-24 py-2 bg-green-500 text-xl font-black rounded-md shadow-sm m-auto' onClick={()=>showCart()}> Checkout</button>
        {props._products._products.map((item)=>(
            <ItemCard item={item} isInCart={isInCart(item)} addToCart={addToCart} removeFromCart={removeFromCart}></ItemCard>
        ))}
        </div>
    )}

const mapStateToProps = state =>{
    return {
            _products: state._todoProduct,
        };
}
export default connect(mapStateToProps)(Items)