import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import {sortBy} from './rducers/filter'
import {setPizzas} from "./rducers/pizzas"
import {cart} from "./rducers/cart"




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const root=combineReducers({
        sortBy,
        setPizzas,
        cart
        
})

const store=createStore(root,composeEnhancers(applyMiddleware(thunk)))


window.store=store

export default store