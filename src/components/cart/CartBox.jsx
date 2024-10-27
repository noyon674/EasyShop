import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import './cart-box.scss'
import { decreaseItem, deleteItem, increateItem } from '../../redux/action/action';
import { RxCross2 } from "react-icons/rx";
import Card from 'react-bootstrap/Card';

function CartBox() {
    const cartList = useSelector(state=>state.cart)
    const dispatch = useDispatch()

    let total = 0
    const calBill = (price)=>{
       return total+=price
    }
  return (
    <div className='cartBox-div'>
        <div className="cart-left">
            <h3>An overview of your orders</h3>
            <div className="orders-table">
                <Table hover>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartList.map(item=>{
                                console.log(item)
                                const {title, price, images, quantity, id, totalPrice} = item
                                return <tr key={id}>
                                    <td><img src={images[0]} alt="" /></td>
                                    <td>{title}</td>
                                    <td>${price}</td>
                                    <td>
                                        <button 
                                        className='btn btn-success'
                                        onClick={e=>dispatch(decreaseItem(id))}
                                        disabled = {quantity === 0 && true}
                                        >-</button>
                                        <span>{quantity}</span>
                                        <button 
                                        className='btn btn-success'
                                        onClick={e=>dispatch(increateItem(id))}
                                        >+</button>
                                    </td>
                                    <td>{totalPrice}</td>
                                    <td>
                                        <button 
                                        className='btn btn-danger'
                                        onClick={e=>dispatch(deleteItem(id))}
                                        ><RxCross2 /></button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
        <div className="cart-right">
            <h3>Order Details</h3>
            <div className="order-details">
                {
                    cartList.map(item=>{
                        
                    return <Card>
                        <Card.Body>
                            <p>
                                <span>Sub-total</span>
                                <span>${calBill(item.totalPrice)}</span>
                            </p>
                            <p>
                                <span>Shipping</span>
                                <span>Free</span>
                            </p>
                            <p>
                                <span>Estimated Tax</span>
                                <span>-</span>
                            </p>
                        </Card.Body>
                        <Card.Footer>
                            <p>
                                <span>Total</span>
                                <span>${total}</span>
                            </p>
                        </Card.Footer>
                        <button className='btn btn-dark'>Place Order</button>
                    </Card>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default CartBox