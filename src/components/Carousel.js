import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import banner1 from '../images/banner/banner-1.jpg'
import banner2 from '../images/banner/banner-2.jpg'
import banner3 from '../images/banner/banner-3.jpg'

const Carousels = () => {
  return (
    <Carousel fade>
  <Carousel.Item style={{backgroundImage: `url(${banner1})`, backgroundPosition: `center center`, height: `60vh`, backgroundSize: `cover`}} className='p-5'>
  <div className='container mt-5'>
    <div className='row mt-5'>
            <div className='col-md-5 ml-5 mt-3'>
                <h4>Amazing Deals</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <a href='' className='btn btn-primary'>Shop Now</a>
            </div>
        </div>
  </div>
  </Carousel.Item>
  <Carousel.Item style={{backgroundImage: `url(${banner2})`, backgroundPosition: `center center`, height: `60vh`, backgroundSize: `cover`}} className='p-5'>
  <div className='container mt-5'>
    <div className='row mt-5'>
            <div className='col-md-5 ml-5 mt-3'>
                <h4>Amazing Deals</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <a href='' className='btn btn-primary'>Shop Now</a>
            </div>
        </div>
  </div>
  </Carousel.Item>
  <Carousel.Item style={{backgroundImage: `url(${banner3})`, backgroundPosition: `center center`, height: `60vh`, backgroundSize: `cover`}} className='p-5'>
  <div className='container mt-5'>
    <div className='row mt-5'>
            <div className='col-md-5 ml-5 mt-3'>
                <h4>Amazing Deals</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <a href='' className='btn btn-primary'>Shop Now</a>
            </div>
        </div>
  </div>
  </Carousel.Item>
</Carousel>
  )
}

export default Carousels