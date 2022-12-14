import { combineReducers } from 'redux';
import {GET_NUMBER_CART,ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART} from  '../Actions';

// dummy data
import one from "../Assets/Images/1.jpg"
import two from "../Assets/Images/2.jpg"
import three from "../Assets/Images/3.jpg"
import four from "../Assets/Images/4.jpg"
import five  from "../Assets/Images/5.jpg"

const cakeData = [
    {
        id:1,
        name:"A velvet cake with oranges peels",
        image:one,
        price:26,
        description:"A gorgeous cake freshly baked , perfect for weddings",
    },
    {
        id:2,
        name:"Brown Chocolate apple pie cake",
        image:two,
        price:50,
        description:"A mouth watering brown chocolate cake with fresh apples.",
    },
    {
        id:3,
        name:"Vanilla cake with pink roses .",
        image:three,
        price:50,
        description:"With the aroma of fresh rose flowers, this cake is here to win hearts.",
    },
    {
        id:4,
        name:"Apple cider cake with pistachios.",
        image:four,
        price:40,
        description:"Thin slices of apple , carefully creamed with delicious vannilla !",
    },
    {
        id:5,
        name:"Small Icecream cake with muffins.",
        image:five,
        price:20,
        description:"Extremely delicious fusion of strawberry icecream with chocolate muffins.",
    },

]

const initProduct = {
    numberCart:0,
    Carts:[],
    _products:cakeData
}

function todoProduct(state = initProduct,action){
    switch(action.type){
        case GET_NUMBER_CART:
                return{
                    ...state
                }
        case ADD_CART:
            if(state.numberCart==0){
                let cart = {
                    id:action.payload.id,
                    quantity:1,
                    name:action.payload.name,
                    price:action.payload.price
                } 
                state.Carts.push(cart); 
            }
            else{
                let check = false;
                state.Carts.map((item,key)=>{
                    if(item.id==action.payload.id){
                        state.Carts[key].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id:action.payload.id,
                        quantity:1,
                        name:action.payload.name,
                        price:action.payload.price
                    }
                    state.Carts.push(_cart);
                }
            }
            return{
                ...state,
                numberCart:state.numberCart+1
            }
            case INCREASE_QUANTITY:
                state.numberCart++
                state.Carts[action.payload].quantity++;
              
               return{
                   ...state
               }
            case DECREASE_QUANTITY:
                let quantity = state.Carts[action.payload].quantity;
                if(quantity>1){
                    state.numberCart--;
                    state.Carts[action.payload].quantity--;
                }
              
                return{
                    ...state
                }
            case DELETE_CART:
                let quantity_ = state.Carts[action.payload].quantity;
                return{
                    ...state,
                    numberCart:state.numberCart - quantity_,
                    Carts:state.Carts.filter(item=>{
                        return item.id!=state.Carts[action.payload].id
                    })
                   
                }
        default:
            return state;
    }
}
const BakeryShop = combineReducers({
    _todoProduct:todoProduct
});
export default BakeryShop;