import React from 'react'
import './product.scss'

import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addTOCart } from '../../redux/action/action';

function Product(props) {
  const cartList = useSelector(state=>state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const isAuth = true;
  const {title, images, price, id} = props
  console.log(cartList)
  const isInCart = cartList && cartList.some(cart=>cart.id == id)

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
        disabled={isInCart ? true : false}
        onClick={e=>isAuth ? dispatch(addTOCart(props)): navigate('/login')}
        >{isInCart ? 'Added to Cart' : 'Add to cart'}</button>
      </Card.Body>
    </Card>
  )
}

export default Product