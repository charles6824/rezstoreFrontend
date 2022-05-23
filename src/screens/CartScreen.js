import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Footer from '../components/Footer'
import { addToCart, removeFromCart } from '../actions/cartActions'
import Meta from '../components/Meta'

const CartScreen = ({history}) => {

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        history.push('/sign-in?redirect=shipping')
    }

    return (
      <>
        <Meta title='Your Cart' />
        <section className='section-margin calc-60px cart_area'>
          <div className='container'>
            <div className='section-intro pb-60px'>
              <h5>
                Your <span className='section-intro__style'>Cart</span>
              </h5>
            </div>
            {cartItems.length === 0 ? (
              <Message>
                Your cart is empty <Link to='/'>Go Back</Link>
              </Message>
            ) : (
              <div className='row'>
                <div className='col-md-9 mb-3'>
                  <div className='table-responsive'>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th scope='col'>Product</th>
                          <th scope='col'>Price</th>
                          <th scope='col'>Quantity</th>
                          <th scope='col'>Total</th>
                          <th scope='col'>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <tr key={item.product}>
                            <td>
                              <div className='media'>
                                <div className='d-flex'>
                                  <img src={item.image} alt={item.name} />
                                </div>
                                <div className='media-body'>
                                  <p>{item.name}</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span>&#x24;{item.price.toLocaleString()}</span>
                            </td>
                            <td>
                              <select
                                className='input-text qty'
                                value={item.qty}
                                onChange={(e) =>
                                  dispatch(
                                    addToCart(
                                      item.product,
                                      Number(e.target.value)
                                    )
                                  )
                                }
                              >
                                {[...Array(item.countInStock).keys()].map(
                                  (x) => (
                                    <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </option>
                                  )
                                )}
                              </select>
                            </td>
                            <td>
                              <span>
                                &#x24;
                                {(
                                  Number(item.price) * Number(item.qty)
                                ).toLocaleString()}
                              </span>
                            </td>
                            <td>
                              <button
                                type='button'
                                onClick={() =>
                                  removeFromCartHandler(item.product)
                                }
                              >
                                <span className='fa fa-trash'></span>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='order_box'>
                    <h2>Sub Total</h2>
                    <p>
                      &#x24;
                      {cartItems
                        .reduce((acc, item) => acc + item.qty * item.price, 0)
                        .toFixed(2)
                        .toLocaleString()}
                    </p>
                    <p>
                      <button
                        type='button'
                        className='button'
                        disabled={cartItems.length === 0}
                        onClick={checkoutHandler}
                      >
                        Checkout
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        <Footer />
      </>
    );
}

export default CartScreen