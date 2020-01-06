import {CART_ADD_PRODUCT, CART_REMOVE_PRODUCT} from '../actions/actionTypes';

const initialState = {
    products:[]
}

export function cartReducer(state = initialState, action) {
    switch(action.type){
        case CART_ADD_PRODUCT:
            if(state.products.find(e => e.id === action.product.id)){
                return state;
            }

            state.products.push(action.product);

            return {
                ...state,
                products: state.products
            };
        case CART_REMOVE_PRODUCT:{
            if(state.products.find(e => e.id === action.product.id)){
                return {
                    ...state,
                    products: state.products.filter(e => e.id !== action.product.id)
                };
            }           

            return state;
        }
                   
        default:
        return state;
    }    
  };
  
  export default cartReducer;