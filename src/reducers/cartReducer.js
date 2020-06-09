import {CART_ADD_PRODUCT, CART_REMOVE_PRODUCT} from '../actions/actionTypes';


export function cartReducer(state = [], action) {
    switch(action.type){
        case CART_ADD_PRODUCT:
            if(state.find(e => e.id === action.product.id)){
                return state;
            }

            return [
                ...state,
                {                    
                    id: action.product.id,
                    image: action.product.image,
                    name: action.product.name,
                    description: action.product.description,
                    price: action.product.price
                }
            ];
        case CART_REMOVE_PRODUCT:{          
            const newState = state.filter((product) => product.id !== action.product.id);

            return [
                ...newState
            ];            
        }
                   
        default:
        return state;
    }    
  };
  
  export default cartReducer;