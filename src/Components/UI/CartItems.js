import React from 'react'

const CartItem = (props) => {
    return (
        <div className="cart-item-layout">
            <img className="item-img" src={props.img} alt="img" />
            <div className="cart-item-info">
                <h4>Shirt</h4>
                <h5>{props.name}</h5>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}} className="cart-item-amount">
                    <h1 style={{display: "inline-block", marginRight: 10}}>-</h1>
                    <input style={{width: "60px", outline: "none"}} type="number" />
                    <h2 style={{display: "inline-block", marginLeft: 10, cursor: "pointer"}}>+</h2>
                </div>
            </div>
            <div className="cart-item-price">
                <h6 style={{alignSelf: "start"}}>${props.price}</h6>
            </div>
        </div>
    )
}

export default CartItem