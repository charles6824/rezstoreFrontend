import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({product}) => { 
    return (
      <div className='card card-product'>
        <div className='card-product__img card-prod'>
          <Link to={`/product/${product._id}`}>
            <img className='card-img' src={product.image} alt='' width='100%' />
          </Link>
        </div>
        <div className='card-body'>
          <p className='text-wine'>{product.category}</p>
          <h6 className='card-product__title'>
            <Link to={`/product/${product._id}`}>
              {product.name.toUpperCase().substring(0, 18)}...
            </Link>
          </h6>
          <p className='card-product__price'>
          &#8358;{product.price}
          </p>
          <Rating value={product.rating} />
        </div>
      </div>
    );
}

export default Product