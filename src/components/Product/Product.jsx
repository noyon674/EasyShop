import React from 'react'
import './product.scss'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';

function Product(props) {
    const {title, images, price, category} = props
  return (
    <Card style={{ width: '18rem' }}>
      <Link>
        <Card.Img variant="top" src={images[0]}/>
      </Link>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p>${price}</p>
        <Link className='btn'>Add to cart</Link>
      </Card.Body>
    </Card>
  )
}

export default Product