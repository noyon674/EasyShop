import React from 'react'
import { useLocation } from 'react-router-dom'
import './productdetail.scss'

function ProductDetails() {
    const {title, images, category, price, description} = useLocation().state.props
  return (
    <div className='product-details'>
        <div className="content">
            <div className="left">
                <img src={images[0]} alt="" />
            </div>
            <div className="right">
                <h1>{title}</h1>
                <span>{category.name}</span>
                <h5>${price}</h5>
                <p>{description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails