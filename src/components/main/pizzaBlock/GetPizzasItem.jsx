import React from 'react'


import PizzaItem from './Pizzas'
import Menu from '../menu/Menu'


function GetPizzasItem() {

        
   
        
        return (
                <section>
                <div className="menu__block"><Menu/></div>
                <div className='main__pizzaBlock'>
                    <PizzaItem />
                        
                        
                </div>
                </section>
        )
}


export default GetPizzasItem
