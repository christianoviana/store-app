import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import ProductApi from '../api/ProductApi';
import ProductItem from '../components/ProductItem';
import './ProductList.css';


export class ProductList extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: [],
            products_cart:[]
        }
    }
    
    formatValue(value){
        var str = "" + value
        var pad = "00"
        return pad.substring(0, pad.length - str.length) + str
    }

    async componentWillMount(){
        let service = new ProductApi();
        const items = await service.getProducts();
      
        this.setState({
            products: items
        });
    }

    render(){
        return (
            <div>   
                <span className="productList__qntCartView">{this.props.products_cart && this.props.products_cart.length > 0 ? this.formatValue(this.props.products_cart.length) : ""}</span>        
                <Link className="productList__cartView" to={`/cart`}><span className="cartIcon"></span></Link>
                <div className="row">              
                    {this.state.products.map((e) => (  
                        <div id={e.id} className="col-6 col-md-4 col-lg-3 productList__item">                              
                            <ProductItem product={e}/>
                        </div>                  
                    ))}               
                </div>                         
            </div>
        );
    }
}

const mapStateToProps = ({cartReducer}) => {
    return {products_cart: cartReducer}
}

export default ProductList = connect(
    mapStateToProps,
    undefined
)(ProductList);