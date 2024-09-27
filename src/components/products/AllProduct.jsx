import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Product from '../Product/Product'
import './allproduct.scss'
import { NavLink } from 'react-router-dom'

function AllProduct() {
    const products = useSelector(state=>state.products[0])
    const [category, setCategory] = useState('All')

    const categories = {
        Clothes: 'Clothes',
        Electronics: 'Electronics',
        Furniture: 'Furniture',
        Shoes: 'Shoes',
        Miscellaneous: 'Miscellaneous'
    }

    const filterItem = (category)=>{
        setCategory(category)
    }
    console.log(category)
  return (
    <div className='products-div'>
        <nav>
            <NavLink onClick={e=>filterItem('All')}>All</NavLink>
            <NavLink onClick={e=>filterItem(categories.Clothes)}>Clothes</NavLink>
            <NavLink onClick={e=>filterItem(categories.Electronics)}>Electronics</NavLink>
            <NavLink onClick={e=>filterItem(categories.Furniture)}>Furniture</NavLink>
            <NavLink onClick={e=>filterItem(categories.Shoes)}>Shoes</NavLink>
            <NavLink onClick={e=>filterItem(categories.Miscellaneous)}>Miscellaneous</NavLink>
        </nav>
        <div className='all-products'>
            {
                products && products.map((product, index)=>{
                    if(product.category.name == category){
                        return <Product key={index} {...product}/>
                    }
                    else if(category == 'All'){
                        return <Product key={index} {...product}/>
                    }
                })
            }
        </div>
    </div>
  )
}

export default AllProduct