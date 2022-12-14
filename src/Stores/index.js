import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import BakeryShop from '../Reducers/index'
const store =  createStore(BakeryShop,applyMiddleware(thunkMiddleware));
export default store;