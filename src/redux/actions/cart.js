export const addPizzaCart = (val) => {
        return {
                type:"ADD_PIZZA_CART",
                payload:val
        }
}

export const addItemToCart=(val)=>({
        type:"ADD_PIZZA_TO_CART",
        payload:val
})

export const removeCartItem=(id)=>({
        type:"REMOVE_CART_ITEM",
        payload:id
       
})

export const minusItem=(id)=>({
        type:"MINUS_ITEM",
        payload:id
})

export const clearCart=()=>({
        type:"CLEAR_CART",
       
})