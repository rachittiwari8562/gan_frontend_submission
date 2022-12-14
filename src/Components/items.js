import React, {useState,useEffect } from 'react'
import {connect} from 'react-redux';
import ItemCard from './item_card';
import {AddCart} from '../Actions';
import bag from "../Assets/Images/bag.png"

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

    const removeOneFromCart = (el) =>{
        let hardCopy = [...cart];
        const index = hardCopy.indexOf(el);
        if (index > -1) { // only splice array when item is found
        hardCopy.splice(index, 1); // 2nd parameter means remove one item only
        }
        setCart(hardCopy);
        
    }
  
    const removeFromCart = (el) => {
      let hardCopy = [...cart];
      hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
      setCart(hardCopy);
    };

    const isInCart = (val)=>{
        return cart.some(item => val.id === item.id);
    };

    const getItemNumberInCart= (el)=>{
        return cart.filter((cartItem) => cartItem.id === el.id).length; 
    }

    const showCart = ()=>{
        console.log("---------------- final details of cart are as follows--------");
        var unique_list = []
        for (var i in cart){
            if (!unique_list.includes(cart[i].id)) {
                unique_list.push(cart[i].id);
            }
        }
        var new_cart = [];
        var grand_total = 0;
        var total_items = 0;
        for (var unique in unique_list){
            var nu = cart.filter((cartItem) => cartItem.id === unique_list[unique]);
            var number = nu.length
            var price = nu[0].price
            var name = nu[0].name
            var total = price*number
            grand_total+=total
            total_items+=number
            new_cart.push({
                name:name,
                quantity:number,
                per_item_price:price,
                total_price :total
            });
        }
        console.log(new_cart)
        console.log("Total items :"+total_items)
        console.log("Grand Total :"+grand_total)
        console.log("--------------------------------------------------------");
    }

    return (
        <div className='col-span-6 md:col-span-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-2 md:gap-x-6 gap-y-6'>
            <div className="hidden md:flex relative col-span-2 w-full text-gray-600 focus-within:text-gray-400 p-2">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                </span>
                <input type="search" name="q" className="w-full py-2 text-sm text-white bg-transparent border-gray-300 border-2 rounded-3xl pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autoComplete="off"/>
            </div>
            <div className='hidden md:flex col-span-1'></div>
            <button className='absolute mr-2 md:left-10 md:bottom-10 md:mt-96 top-0  right-0 w-40 h-10 flex my-auto justify-start bg-green-500 rounded-lg shadow-sm hover:shadow-2xl' onClick={()=>showCart()}> 
            <img className="inline w-8 ml-2" src={bag}></img>
            <span className='font-bold mt-1 ml-4 text-lg'>Cart</span>
            </button>
        {props._products._products.map((item)=>(
            <ItemCard item={item} isInCart={isInCart(item)} addToCart={addToCart} removeOneFromCart={removeOneFromCart} removeFromCart={removeFromCart} getItemNumberInCart={getItemNumberInCart}></ItemCard>
        ))}
        </div>
    )}

const mapStateToProps = state =>{
    return {
            _products: state._todoProduct,
        };
}
export default connect(mapStateToProps)(Items)