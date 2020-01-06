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
          
            <div className="product-details">                 
                {this.state.product.image && <img src={require(`../assets/images/${this.state.product.image}`)} alt={this.state.product.name}/>}
                <h3 className="product-name">{this.state.product.name}</h3>
                <span className="product-price">
                    <b>Price: </b> {this.state.product.price && this.state.product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}
                </span>

                <p className="product-description">{this.state.product.description}</p>   
                <p><button onClick= {() => this.props.cartAddProduct(this.state.product)}>Add to Cart</button></p>         
                <div>                    
                    <Link className="link-btn orange" id="btnViewCart" to={`/cart`}>View Cart</Link> 
                    <Link className="link-btn orange" id="btnVoltar" to={`/`}>Voltar</Link>                   
                </div>
            </div>
        )
    }
}

export default ProductDetail = connect(
    undefined,
    {cartAddProduct}    
)(ProductDetail)