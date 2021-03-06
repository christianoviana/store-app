import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {cartRemoveProduct} from '../actions/cartAction';
import "./Cart.css";
import ProductItem from '../components/ProductItem';

const border ={
    border: '2px solid blue'
}
export class Cart extends Component{
    render(){
        return(
            <div className='cart-product-container'>
                <div className='row'>
                    {this.props.products && this.props.products.map((product) => (
                         <div className="col-6 col-md-4 col-lg-3 cart-item">                               
                            <ProductItem product={product}/>
                            
                            <div className='align-btn-product--remove'>
                                <button id='btn-product--remove' className='btn btn-outline-danger' onClick= {() => this.props.cartRemoveProduct(product)}>Remove</button>
                            </div>                           
                        </div> 
                    ))}   

                     {this.props.products && this.props.products.length===0 &&
                         <div id='cart-empty' className="col-12">                               
                           <h1>There are no items.</h1>
                           <h2><Link to={`/`}>Try add items here</Link></h2>
                        </div> 
                    }                   
                </div>                     
              
                <Link to={`/`} id="btnCartVoltar">Voltar</Link>
            </div>
       
        );
    }
}

const mapStateToProps = ({cartReducer}) => {
    return {products: cartReducer}
}

export default Cart = connect(
    mapStateToProps,
    {cartRemoveProduct}
)(Cart)