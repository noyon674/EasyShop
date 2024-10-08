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
            <button 
            className={category == 'All' && 'active'} 
            onClick={e=>filterItem('All')}>All</button>
            <button 
            className={category == categories.Clothes && 'active'} 
            onClick={e=>filterItem(categories.Clothes)}>Clothes</button>
            <button 
            className={category == categories.Electronics && 'active'} 
            onClick={e=>filterItem(categories.Electronics)}>Electronics</button>
            <button 
            className={category == categories.Furniture && 'active'} 
            onClick={e=>filterItem(categories.Furniture)}>Furniture</button>
            <button 
            className={category == categories.Shoes && 'active'} 
            onClick={e=>filterItem(categories.Shoes)}>Shoes</button>
            <button 
            className={category == categories.Miscellaneous && 'active'} 
            onClick={e=>filterItem(categories.Miscellaneous)}>Miscellaneous</button>
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