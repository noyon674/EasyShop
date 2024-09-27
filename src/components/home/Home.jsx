import React, { useEffect, useState } from 'react';
import './home.scss';
import { IoIosArrowDown } from "react-icons/io";
import axios from 'axios';
import Product from '../Product/Product';
import Icon1 from '../../img/delivery-icon.svg'
import Icon2 from '../../img/gift_card.svg'
import Icon3 from '../../img/returns.svg'
import { FaFacebook, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { storeProducts } from '../../redux/action/action';

function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchProduct = async()=>{
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products')
        const data = response.data;
        if(data){
          setProducts(data)
          dispatch(storeProducts(data))
        }
      } catch (error) {
        
      }
    }
    fetchProduct()
  }, [])

  return (
    <div className="home-comp">
      <div className="banner">
        <div className="left">
          <h1>panjabi <br />collection</h1>
          <button className='btn'>shop now</button>
        </div>
        <div className="right"></div>
      </div>
      <div className="sample-product">
        <p>New Arrival</p>
        <div className='arrow'>
          <a href="#sampleProduct"><IoIosArrowDown/></a>
        </div>
      </div>
      <div id='sampleProduct' className="sample-product">
        <div className='showable-product'>
          {
            products && products.map((product, index)=>{
              if(index <= 7){
                return <Product key={index} {...product}/>
              }
            })
          }
        </div>
        <div className='showMore'>
          <button className='btn showMore'>
            shop all
          </button>
        </div>
      </div>
      <div className="company-details">
        <div className="box">
          <div className="box-icon">
            <img src={Icon1} alt="" />
          </div>
          <div className="box-text">
            <h2>free <br />delivery</h2>
            <p>Free delivery over</p>
            <p>1000 BDT</p>
            <p>shopping</p>
          </div>
        </div>
        <div className="box">
          <div className="box-icon">
            <img src={Icon3} alt="" />
          </div>
          <div className="box-text">
            <h2>EASY Policies</h2>
            <br />
            <p>Delivery/Return in easy way</p>
          </div>
        </div>
        <div className="box">
          <div className="box-icon">
            <img src={Icon2} alt="" />
          </div>
          <div className="box-text">
            <h2>Secure <br />Payment</h2>
            <br />
            <br />
            <p>COD/bKash/Cards</p>
          </div>
        </div>
        <div className="box">
          <div className="box-icon">
            <img src='' alt="" />
          </div>
          <div className="box-text">
            <h2>Thousands <br />Styles</h2>
            <br />
            <br />
            <p>Everything you need</p>
          </div>
        </div>
      </div>
      <div className="social-icons">
        <h5>follow us</h5>
        <span></span>
        <a href=""><FaFacebook /></a>
        <a href=""><FiInstagram /></a>
        <a href=""><FaLinkedinIn /></a>
        <a href=""><FaYoutube /></a>
      </div>
    </div>
  );
}

export default Home;
