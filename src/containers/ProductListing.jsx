import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { setProducts, fetchProducts } from '../redux/actions/productAction'

const ProductListing = () => {
    const products = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(products, 'sasds')
    // const fetchProdutcs = async () => {
    //     const responce = await axios.get('https://fakestoreapi.com/products')
    //         .catch(error => {
    //             console.log(error, 'error------')
    //         })
    //     dispatch(setProducts(responce.data))
    // }
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    console.log('products:', products)
    return (
        <div className='ui grid container'>
            <ProductComponent />
        </div>
    )
}
export default ProductListing