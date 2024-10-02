import "./Header.css";


function Header({openCart, onAddProductClick}) {

    return(
        <div className="header">
            <h1>My E-Commerce Store</h1>
            <div className="btns">
                <button className="add-btn" onClick = {onAddProductClick}>Add Products</button>
                <button className="cart-btn" onClick = {openCart}>Cart</button>
            </div>
        </div>
        );
}

export default Header;
