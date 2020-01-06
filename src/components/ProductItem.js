import React from 'react';
import {Link} from 'react-router-dom'

export const ProductItem = ({product}) => {

    return (
        <div className="product-item">
            <img src={require(`../assets/images/${product.image}`)} alt={product.name}/>
            <h3 className="product-name">{product.name}</h3>
            <span className="product-price">
                <b>Price: </b> {product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}
            </span>

            <p><Link to={`/product/${product.id}`}>Details</Link></p>
        </div>
    )    
}

export default ProductItem;