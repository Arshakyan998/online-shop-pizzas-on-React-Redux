import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

import RenderPizzas from './RenderPizzas'
import "./pizzas.scss"
import MyLoader from './LodingBlock'
import { fetchPizzas } from '../../../redux/actions/pizzas'
import {addPizzaCart} from '../../../redux/actions/cart'


function PizzaItem() {
        const dispatch=useDispatch()

        const {itemsPizzas,cart} = useSelector(state => {
                return{
                        itemsPizzas:state.setPizzas.items,
                        cart:state.cart.items,
                }
        })


        const {isLoaded} = useSelector(state => {
                return{
                        isLoaded:state.setPizzas.isLoaded
                }
        })

        const {catygory,sortBy,order} = useSelector(state => {
                return{
                        catygory:state.sortBy.catygory,
                        sortBy:state.sortBy.sortBy.type,
                        order:state.sortBy.sortBy.order
                }
        })

        const addPizzaToCart=(obj)=>{

               dispatch(addPizzaCart(obj))

        }

        React.useEffect(()=>{
dispatch(fetchPizzas(catygory,sortBy,order))
        },[catygory,sortBy,order])


        return (
                <div className='controll_pizzas_block'>
                        {
                              isLoaded ?itemsPizzas.map((element,i)=>{
                                       return  <RenderPizzas
                                        key={element.id}
                                        {...element}
                                        addPizzaToCart={addPizzaToCart}
                                        cart={cart}
                                       />
                                }):new Array(12).fill(0).map((_,i)=><MyLoader key={i}/>)
                        }
                        
                        
                </div>
        )
}

export default PizzaItem
