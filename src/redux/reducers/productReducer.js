
import { ActionType } from "../constent/actionsType";

const initailState = {
    products: []
}

export const productReducer = (state = initailState, { type, payload }) => {

    switch (type) {
        case ActionType.SET_PRODUCTS:
            return { ...state, products: payload };
        case ActionType.FETCH_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionType.SELECTED_PRODUCT:
            return { ...state, ...payload }
        case ActionType.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }

}