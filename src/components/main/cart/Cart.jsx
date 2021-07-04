import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import truck from "../../../assets/Group 42.svg";
import "./cart.scss";
import empty from "../../../assets/Group 48.svg";
import {addItemToCart,clearCart as cartClear,removeCartItem ,minusItem} from "../../../redux/actions/cart"

function Cart() {

  const dispatch=useDispatch()

  const { cartItems,totalCount } = useSelector(({ cart }) => {
    return {
      cartItems: cart.items,
      totalCount:cart.totalCount
    };
  });



  const items = Object.keys(cartItems).map((element) => {
    return cartItems[element].item[0];
  });




  const addPizzaToCart=(i)=>{

dispatch(addItemToCart(i))
}

const onMinusItem=(id)=>{
  dispatch(minusItem(id))
}


const clearCart=()=>{
  if(window.confirm("вы хотите очистить карзину ?")){

   dispatch(cartClear())
  }
}
const removeItem =(id)=>{
  if(window.confirm("вы хотите удалить пиццу ?")){
  dispatch(removeCartItem(id))
  }
}




  return (
    <div className="cart">
      <div className="cart__header">
        <div className="cart__img">
        <img src={truck} alt="" width="250px" height="250px" />
      </div>
      <div className="cart__clear" onClick={clearCart}>
        очистить карзину
        </div>
        </div>
      <div className="cart__main">
        {items.length ? (
          items.map((element) => {
            return (
              <div className="cart__values" key={element.id}>
                <div className="cart__result">
                <div className="img">
                  <img src={element.image} alt="" width="150" height="150" />
                </div>
                <div className="sizes">
                   <span>{element.name}</span>
                   <br />
                  <span>{element.size}см․</span>
                  <span>{element.type}</span>
                </div>
                 </div>
                  <div className="cart__buttons">
                  <button onClick={()=>addPizzaToCart(element.id)}>+</button>

                  <span>{cartItems[element.id].item.length}</span>

                  <button onClick={()=>onMinusItem(element.id)}>-</button>

                  <span className="span_price">{cartItems[element.id].itemPrice}₽</span>

                  <button onClick={()=>removeItem(element.id)}>x</button>
                  </div>
                  
              </div>
            );
            
               
          })
 
       


        ) : (
          <div className="cart__empty">
            <Link to="/">
              <img src={empty} alt="" />
            </Link>
          </div>
        )}
                   <div className="cart__totalCount">
                    <span>Количество пицц <strong>{totalCount?totalCount:0}</strong></span>
                  </div>
      </div>
    </div>
  );
}

export default Cart;
