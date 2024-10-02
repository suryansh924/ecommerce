import {useRef} from "react";
import { useState } from "react";
import Modal from "../UI/Modal/Modal";
import "./AddProduct.css";



function AddProduct({showAddProduct ,closeAddProduct, onAddProduct}) {
    // const nameRef = useRef(null);

    const [productName, setProductName] = useState("");

    const handleProductNameChange = (event) => {
        setProductName(event.target.value);
    }

    const handleSubmit = (event) => {
    event.preventDefault();
    // const nameValue = nameRef.current.value;
    onAddProduct(productName);

}

    return <Modal show = {showAddProduct} onClose = {closeAddProduct}>
    <div className="add-product-container">
      <p className="add-product-heading">Add Product</p>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <label htmlFor="productName" className="form-label">
          Enter Product Name
        </label>
        <input
          // ref={nameRef}
          type="text"
          id="productName"
          name="productName"
          value={productName}
          onChange={handleProductNameChange}
          className="form-input"
        />
        <button type="submit" className="submit-button yellow-btn">
          Add Product
        </button>
      </form>
    </div>
  </Modal>


}


export default AddProduct;