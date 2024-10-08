import React from 'react'
import './product.scss'

import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';

function Product(props) {
  const navigate = useNavigate();
  const isAuth = false;
  const {title, images, price, id} = props
  return (
    <Card style={{ width: '18rem' }}>
      <Link 
      to={`/products/${id}`}
      state={{props}}
      >
        <Card.Img variant="top" src={images[0]}/>
      </Link>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p>${price}</p>
        <button 
        className='btn'
        onClick={e=>isAuth ? console.log('added'): navigate('/login')}
        >Add to cart</button>
      </Card.Body>
    </Card>
  )
}

export default Product