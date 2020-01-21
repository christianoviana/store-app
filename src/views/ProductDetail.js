import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {ProductApi} from '../api/ProductApi';
import {cartAddProduct} from '../actions/cartAction';
import './ProductDetail.css';

export class ProductDetail extends Component{

    constructor(props){
        super(props);

        this.state = {
            product:{}
        }
    }

    async componentWillMount(){
        let service = new ProductApi();
        const product = await service.getProductsById(this.props.match.params.id);
       
        this.setState({
            product
        })
    }

    render(){
        return(
          
            <div className="product-detail">                 
                {this.state.product.image && <img className="product-detail__img" src={require(`../assets/images/${this.state.product.image}`)} alt={this.state.product.name}/>}
                <h3 className="product-detail__name">{this.state.product.name}</h3>
                <span className="product-detail__price">
                    <b>Price: </b> {this.state.product.price && this.state.product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}
                </span>

                <p className="product-detail__description">{this.state.product.description}</p>   
                <p><button 
                        className="product-detail__button addToCart" 
                        onClick= {() => this.props.cartAddProduct(this.state.product)}>Add to Cart</button>
                </p>         
                <div>                    
                    <Link className="product-detail__button lime" id="btnViewCart" to={`/cart`}>View Cart</Link> 
                    <Link className="product-detail__button lime" id="btnBack" to={`/`}>Back</Link>                   
                </div>
            </div>
        )
    }
}

export default ProductDetail = connect(
    undefined,
    {cartAddProduct}    
)(ProductDetail)