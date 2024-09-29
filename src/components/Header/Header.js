import "./Header.css";
import { useState } from "react";


function Header(){
const [showCart, setShowCart] = useState(false);


function openCart(){
    setShowCart(true);
}

function closeCart(){
    setShowCart(false);
}
    return(
        <div className="header">
            <h1>My E-Commerce Store</h1>
            <div className="btns">
                <button className="add-btn">Add Products</button>
                <button className="cart-btn" onClick = {openCart}>Cart</button>
            </div>
            {showCart && <div className="backDrop" onClick={closeCart}>
                <div className="cartModal">Hi!</div>
            </div>}
        </div>
        );
}

export default Header;
