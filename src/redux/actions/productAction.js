// import axios from "axios";
import fakeStoreApi from '../../apis/fakeStoreApi'
import { ActionType } from "../constent/actionsType";

export const fetchProducts = () => async (dispatch, getState) => {
    const res = await fakeStoreApi.get('/products')
    console.log(res, 'gooodddddd')
    dispatch({
        type: ActionType.FETCH_PRODUCTS,
        payload: res
    })

}
export const fetchProduct = (id) => async (dispatch, getState) => {
    const res = await fakeStoreApi.get(`/products/${id}`)
    console.log(res, 'gooodddddd')
    dispatch({
        type: ActionType.SELECTED_PRODUCT,
        payload: res
    })

}


export const setProducts = (products) => {
    return {
        type: ActionType.SET_PRODUCTS,
        payload: products
    }
}
export const selectedProducts = (product) => {
    return {
        type: ActionType.SELECTED_PRODUCT,
        payload: product
    }
}
export const removeSelectedProducts = () => {
    return {
        type: ActionType.REMOVE_SELECTED_PRODUCT,
    }
}