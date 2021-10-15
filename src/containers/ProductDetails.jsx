import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct, removeSelectedProducts } from '../redux/actions/productAction'

const ProductDetails = () => {
    const { productId } = useParams();
    const product = useSelector(state => state.product)

    const dispatch = useDispatch()
    // console.log(product, 'sdsfsdfsdf')
    // const fetchProduct = async () => {
    //     const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    //         .catch((error) => console.log(error, 'err'))
    //     dispatch(selectedProducts(res.data))
    // }

    useEffect(() => {
        if (productId && productId !== '') dispatch(fetchProduct(productId))
        return () => {

            dispatch(removeSelectedProducts())
        }
    }, [productId])
    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div style={{ position: 'absolute', top: '75px' }}>...Loading</div>
            ) : (
                <div className="ui placeholder segment" style={{ position: 'absolute', top: '75px' }}>
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={product?.data?.image} />
                            </div>
                            <div className="column rp">
                                <h1>{product?.data?.title}</h1>
                                <h2>
                                    <a className="ui teal tag label">${product?.data?.price}</a>
                                </h2>
                                <h3 className="ui brown block header">{product?.data?.category}</h3>
                                <p>{product?.data?.description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetails
