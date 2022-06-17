import Axios from 'axios';
import * as types from './actionTypes';



// add product to cart
const addProductCartRequest = (payload) => {
    return {
        type: types.ADD_PRODUCT_CART_REQUEST,
        payload
    }
}
const addProductCartSuccess = (payload) => {
    return {
        type: types.ADD_PRODUCT_CART_SUCCESS,
        payload
    }
}
const addProductCartFailure = (payload) => {
    return {
        type: types.ADD_PRODUCT_CART_FAILURE,
        payload
    }
}
const addProductCart = (product) => (dispatch) => {
    dispatch(addProductCartRequest())
    Axios.post('/cart', product).then(r => dispatch(addProductCartSuccess(r.data))).catch(e => dispatch(addProductCartFailure(e.data)));
}



// impliment cart
const fetchCartRequest = (payload) => {
    return {
        type: types.FETCH_CART_REQUEST,
        payload
    }
}
const fetchCartSuccess = (payload) => {
    return {
        type: types.FETCH_CART_SUCCESS,
        payload
    }
}
const fetchCartFailure = (payload) => {
    return {
        type: types.FETCH_CART_FAILURE,
        payload
    }
}
const fetchCart = () => (dispatch) => {
    dispatch(fetchCartRequest())
    Axios.get('/cart').then(r => dispatch(fetchCartSuccess(r.data))).catch(e => dispatch(fetchCartFailure(e.data)));
}



// delete product from cart
const deleteProductCartRequest = (payload) => {
    return {
        type: types.REMOVE_PRODUCT_CART_REQUEST,
        payload
    }
}
const deleteProductCartSuccess = (payload) => {
    return {
        type: types.REMOVE_PRODUCT_CART_SUCCESS,
        payload
    }
}
const deleteProductCartFailure = (payload) => {
    return {
        type: types.REMOVE_PRODUCT_CART_FAILURE,
        payload
    }
}
const deleteProductCart = (id) => (dispatch) => {
    dispatch(deleteProductCartRequest())
    Axios.delete(`/cart/${id}`).then((r) => {
        dispatch(deleteProductCartSuccess(r.data))
    }).then(() => dispatch(fetchCart())).catch(e => dispatch(deleteProductCartFailure(e.data)));
}


// products shift from cart to orders
const addOrderRequest = (payload) => {
    return {
        type: types.ADD_ORDER_REQUEST,
        payload
    }
}
const addOrderSuccess = (payload) => {
    return {
        type: types.ADD_ORDER_SUCCESS,
        payload
    }
}
const addOrderFailure = (payload) => {
    return {
        type: types.ADD_ORDER_FAILURE,
        payload
    }
}
const addOrder = (payload) => (dispatch) => {
    dispatch(addOrderRequest())
    const orderPayload = [];
    for (let product of payload) {
        product && orderPayload.push(Axios.post('/orders', product))
    }
    Promise.all(orderPayload)
    .then((r) => {
        console.log(r)
        dispatch(addOrderSuccess())
    })
    .then(()=>dispatch(emptyCart(payload)))
    .catch((e) => dispatch(addOrderFailure(e.data)))
}


// remove products from cart 
const emptyCartRequest = () => {
    return {
        type: types.EMPTY_CART_REQUEST,
    }
}
const emptyCartSuccess = () => {
    return {
        type: types.EMPTY_CART_SUCCESS,
    }
}
const emptyCartFailure = () => {
    return {
        type: types.EMPTY_CART_FAILURE,
    }
}

const emptyCart = (payload) => (dispatch) => {
    dispatch(emptyCartRequest());
    const deleteOrders = [];
    for (let obj of payload) {
        let temp = dispatch(deleteProductCart(obj.id));
        deleteOrders.push(temp);
    }
    Promise.all(deleteOrders).then((r) =>
    dispatch(emptyCartSuccess())).catch(() => dispatch(emptyCartFailure()))
}

// impliment Order
const fetchOrdersRequest = (payload) => {
    return {
        type: types.FETCH_ORDERS_REQUEST,
        payload
    }
}
const fetchOrdersSuccess = (payload) => {
    return {
        type: types.FETCH_ORDERS_SUCCESS,
        payload
    }
}
const fetchOrdersFailure = (payload) => {
    return {
        type: types.FETCH_ORDERS_FAILURE,
        payload
    }
}
const fetchOrders = () => (dispatch) => {
    dispatch(fetchOrdersRequest())
    Axios.get('/cart').then(r => dispatch(fetchOrdersSuccess(r.data))).catch(e => dispatch(fetchOrdersFailure(e.data)));
}

export {  addProductCart, fetchCart, deleteProductCart, addOrder,emptyCart,fetchOrders};