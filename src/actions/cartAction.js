import {CART_ADD_PRODUCT, CART_REMOVE_PRODUCT} from './actionTypes';

export const cartAddProduct = (product) => ({
    type: CART_ADD_PRODUCT,
    product
});

export const cartRemoveProduct = (product) => ({
    type: CART_REMOVE_PRODUCT,
    product
});