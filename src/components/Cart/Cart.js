// import { useState } from "react";
import Modal from "../UI/Modal/Modal";
import "./Cart.css";
function CartItem ({id, name, image, quantity, increment, decrement}) {

    return <div className="cart-item">
        <img src= {require(`../../assets/${image}`)}/>
        <div className="cart-item-info">
            <div className = "cart-item-name">{name}</div>
            <div className="quantity-container">
                <button className="minus-btn" onClick={() => decrement(id)}>-</button>
                <div className = "cart-item-quantity">Qty: {quantity}</div>
                <button className="plus-btn" onClick={() => increment(id)}>+</button>
            </div>

        </div>
    </div>

}

function Cart({showCart, closeCart, cartItems, increment, decrement}){
    return(
        <Modal show = {showCart} onClose = {closeCart} cartItems = {cartItems}>
            <div className="cart-container">
            <h2 className="cart-heading">Cart</h2>
            {cartItems.length > 0
            ? cartItems.map(item => 
                <CartItem 
                key = {item.id} 
                id = {item.id} 
                name = {item.name} 
                image = {item.image} 
                quantity = {item.quantity}
                increment = {increment}
                decrement = {decrement}/>
                ): <div className="cart-empty">Cart is Empty!</div>
            } 

<           div className="cart-btns">
            <button className="close-cart black-btn" onClick = {closeCart}>Close Cart</button>
            {cartItems.length > 0 && <button className="checkout-cart cart-btn" onClick = {() => alert("Checkout")}>Check Out</button>}
            </div>
            </div>
        </Modal>
    );
}


export default Cart;