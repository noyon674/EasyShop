import React from 'react';
import { useDispatch } from 'react-redux';
import { resetCart } from '../../redux/action/action';

function Contact() {
  const dispatch = useDispatch()
  return <div>
    <button onClick={e=>dispatch(resetCart())}>resetCart</button>
  </div>;

}

export default Contact;
