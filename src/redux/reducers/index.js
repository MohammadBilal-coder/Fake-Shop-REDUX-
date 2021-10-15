import { combineReducers } from 'redux'

import { productReducer, selectedProductReducer } from './productReducer'

export const rootReducer = combineReducers({
    productReducer,
    product: selectedProductReducer
})