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
            products: []
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
                <span id="qntCartView">{this.props.products && this.props.products.length > 0 ? this.formatValue(this.props.products.length) : ""}</span>        
                <Link id="btnCartView" to={`/cart`}>View Cart</Link>
                <ul className='products-list'>
                    {this.state.products.map((e) => (                     
                        <li><ProductItem product={e}/></li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({cartReducer}) => {
    console.log(cartReducer.products.length);
    return {products: cartReducer.products}
}

export default ProductList = connect(
    mapStateToProps,
    undefined
)(ProductList);