import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


import "./header.scss"
import cartIcon from "../../assets/iconfinder_shopping-cart_2561279 1.svg"

function Header() {

        const {totalCount,totalPrice} = useSelector(({cart}) => {

                return {
                        totalCount:cart.totalCount,
                        totalPrice:cart.totalPrice
                }
        })



        return (
                <header className="Header">
                        

                        <div className="Header__main">
                                <Link to="/">
                                <h2>
                                ReactPizzas
                                </h2>
                                 </Link>
                                </div>
                       
                        <Link to='/cart'>
                        <div><button className="btn btn-warning"><span>{totalPrice} ₽</span>
                        <span>|
                        </span>
                        <img src={cartIcon} alt="cart"  width="30px" height="30px"/>
                        <span>{totalCount} </span></button> </div>
                        </Link>
                </header>
        )
}

export default Header
