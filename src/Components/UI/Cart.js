import React, { useState, useEffect } from 'react'
import '../../Styles/cart.css'
import CartItem from './CartItems'


const Cart = (props) => {
    const [ allCartItems, setCartItems ] = useState([...props.addedToCart])
    const cartItems = allCartItems.map(item =>  <CartItem key={allCartItems.indexOf(item)} price={item.price} name={item.name} img={item.img} />)
    useEffect(() => {
        const buyBtn = document.querySelector('.add-to-cart')
        if(buyBtn) {
            buyBtn.addEventListener('click', () => {
                setCartItems([...props.addedToCart])
            })
        }
    })
    return (
        <div className="cart-div">
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                  <h2 id="offcanvasRightLabel">Your Shopping Cart</h2>
                  <button type="button" style={{color: "white"}} className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {cartItems}
                </div>
            </div>
        </div>
    )
}
export default Cart