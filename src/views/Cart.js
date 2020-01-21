import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {cartRemoveProduct} from '../actions/cartAction';
import "./Cart.css";

export class Cart extends Component{
    render(){
        return(
            <div className='cart-product-container'>
                <ul className='cart-product-list'>
                    {this.props.products && this.props.products.map((product) => (
                        <li className="cart-product-item">
                            {product.image && <img src={require(`../assets/images/${product.image}`)} alt={product.name}/>}
                            <h3 className="cart-product-item-name">{product.name}</h3>
                            <span className="cart-product-item-price">
                                <b>Price: </b> {product.price && product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}
                            </span>
                            <p><button onClick= {() => this.props.cartRemoveProduct(product)}>Remove from Cart</button></p>                   
                        </li>
                    ))}                               
                </ul>
                <p><Link to={`/`} id="btnCartVoltar">Voltar</Link></p>
            </div>
       
        );
    }
}

const mapStateToProps = ({cartReducer}) => {
    return {products: cartReducer.products}
}

export default Cart = connect(
    mapStateToProps,
    {cartRemoveProduct}
)(Cart)