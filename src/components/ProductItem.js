import React from 'react';
import {Link} from 'react-router-dom'

export const ProductItem = ({product}) => {

    return (   
        <Link className="productItem--detail" to={`/product/${product.id}`}>         
            <div className="productItem">          
                <img className="productItem__img" src={require(`../assets/images/${product.image}`)} alt={product.name}/>
                <p className="productItem__name">{product.name}</p>
                <span className="productItem__price">
                    <b>Price: </b> {product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}
                </span>
                {/* <p className="product-link-detail"><Link  >Details</Link></p> */}        
            </div>
        </Link>                                      
    )    
}

export default ProductItem;