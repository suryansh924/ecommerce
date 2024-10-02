// import productsData from "../../data/products.json";
import "./Products.css";
// map product array data

function Product({id, name, image, onAddCart}) {
    return (
        <div key = {id} className = "product">
            <img src={require(`../../assets/${image}`)} alt={name}/>
            <div className = "product-name">{name}</div>
            <button className="cart-btn" onClick={() => onAddCart(id, name, image)}>Add to Cart</button>
        </div>
    )
}


function Products({products, onAddCart}) {
    return (
        <div className = "products-container">
            {products.map((product) => 
                <Product 
                key = {product.id} 
                id = {product.id} 
                name = {product.name} 
                image = {product.image}
                onAddCart={onAddCart}/>
            )}
        </div>
    );
}

export default Products;