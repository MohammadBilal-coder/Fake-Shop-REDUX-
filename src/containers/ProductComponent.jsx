import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const ProductComponent = () => {
    const products = useSelector(state => state.productReducer.products)
    console.log(products.data, 'bilal')
    const renderList = products?.data?.map((item) => {
        const { id, title, image, price, category } = item
        return (
            <div className="four wide column" key={id}>
                <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
                    <div className='ui link cards'>
                        <div className="card">
                            <div className='image'>
                                <img src={image} alt={title} />
                            </div>
                            <div className="header">{title} </div>
                            <div className="meta price">${price} </div>
                            <div className="meta">{category} </div>

                        </div>

                    </div>
                </Link>
            </div>
        )
    })
    return (
        <>
            {renderList}
        </>
    )
}

export default ProductComponent
