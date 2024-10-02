import React, { useState } from "react";
import Header from "./components/Header/Header.js";
import Products from "./components/Products/Products.js";
import Cart from "./components/Cart/Cart.js";
import AddProduct from "./components/AddProduct/AddProduct.js";
import "./assets/default.jpg";

import initialProducts from "./data/products.json";
function App() {

  
  const [showCart, setShowCart] = useState(false);
  const[showAddProduct, setshowProduct] = useState(false);
  
  const [products, setProducts] = useState(initialProducts);
  const [cartItems, setCartItems] = useState([]);
  
  const openAddProduct = () => setshowProduct(true);
  const closeAddProduct = () => setshowProduct(false);
  
  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);
  
  const onAddCart = (productId, productName, productImage) => {
    const addedItem = cartItems.find((item) => item.id === productId);
    const cartItem = { id: productId, name: productName, image: productImage, quantity: 1 };

    if (addedItem) {
      setCartItems(
        state => state.map((item) =>
          item.id === productId
            ? { ...addedItem, quantity: addedItem.quantity + 1 }
            : item  
        ));}
        else {
          setCartItems((state) => [...state, cartItem]);
  };
};

const increment = (productId) => {
  const idIndex = cartItems.findIndex((item) => item.id === productId);
  const updatedCartItems = [...cartItems];
  updatedCartItems[idIndex].quantity += 1;
  setCartItems(updatedCartItems);
};

const decrement = (productId) => {
  const idIndex = cartItems.findIndex((item) => item.id === productId);
  let updatedCartItems = [...cartItems];
  if (updatedCartItems[idIndex].quantity > 1) {
    updatedCartItems[idIndex].quantity -= 1; 
  } 
  else {
    updatedCartItems = updatedCartItems.filter((item) => item.id !== productId);
  }

  setCartItems(updatedCartItems);
};


const handleAddProduct = (productName) => {
  const product = {
    id: products.length + 1,
    name: productName, 
    image: "default.jpg"
  };
  setProducts((state) => [...state, product]);
  closeAddProduct();
  }

  
  return (
    <div>
      <Header openCart = {openCart} onAddProductClick = {openAddProduct}/>
      <Products products = {products} onAddCart = {onAddCart}/>
      <Cart showCart = {showCart} 
            closeCart = {closeCart} 
            cartItems = {cartItems} 
            increment = {increment} 
            decrement = {decrement}/>
      <AddProduct showAddProduct = {showAddProduct} 
                  closeAddProduct = {closeAddProduct}
                  onAddProduct = {handleAddProduct} />
    </div>
  );
}

export default App;
