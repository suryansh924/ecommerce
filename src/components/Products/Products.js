import productsData from "../../data/products.json";
import "./Products.css";
// map product array data

function Product({id, name, image}){
    return (
        <div key = {id} className = "product">
            <img src={require(`../../assets/${image}`)} alt={name}/>
            <div className = "product-name">{name}</div>
            <button className="cart-btn">Add to Cart</button>
        </div>
    )
}


function Products() {
    return (
        <div className = "products-container">
            {productsData.map((product) => 
                <Product key = {product.id} id = {product.id} name = {product.name} image = {product.image}/>
            )}
        </div>
    );
}

export default Products;