import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CheckOutSteps from '../components/CheckOutSteps';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import Message from '../components/Message';
import Footer from '../components/Footer';
import { createOrder, makePayment } from '../actions/orderActions';
import {
  ORDER_CREATE_RESET,
  ORDER_PAY_RESET,
} from '../constants/orderConstants';
import { USER_DETAILS_RESET } from '../constants/userConstants';
import Meta from '../components/Meta';

const PlaceOrderScreen = ({ history }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [checked, setChecked] = useState(false);
  const [errorCheck, setErrorCheck] = useState(false);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  if (!cart.shippingAddress.address) {
    history.push('/shipping');
  }

  cart.paymentMethod = 'Bitcoin';

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  cart.shippingPrice = addDecimals(cart.itemsPrice > 100000 ? 50 : 50);
  cart.totalPrice = (
    Number(cart.itemsPrice) + Number(cart.shippingPrice)
  ).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  const orderPay = useSelector((state) => state.orderPay);
  const { success: successPay, payment } = orderPay;

  useEffect(() => {
    if (success) {
      // history.push(`/order/${order._id}`);
      let data = {
        amount: order.totalPrice,
        order_id: order._id,
      };
      dispatch(makePayment(data));
      dispatch({ type: USER_DETAILS_RESET });
      dispatch({ type: ORDER_CREATE_RESET });
    }
    // eslint-disable-next-line
  }, [history, success]);

  useEffect(() => {
    if (successPay) {
      document.location.href = payment.hosted_url;
      dispatch({ type: ORDER_PAY_RESET });
    }
  }, [successPay]);

  const handleCheck = () => {
    setChecked(!checked);
  };

  console.log(successPay);

  const placeOrderHandler = () => {
    if (checked) {
      dispatch(
        createOrder({
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          taxPrice: cart.taxPrice,
          totalPrice: cart.totalPrice,
        })
      );
    } else {
      setErrorCheck(true);
    }
  };

  return (
    <>
      <Meta title='Place your Order' />
      <section className='section-margin calc-60px cart_area'>
        <div className='container'>
          <CheckOutSteps step1 step2 />
          <div className='row card-row'>
            <div className='col-md-5'>
              <div className='order_box'>
                <h2>Shipping Address</h2>
                <ul className='list'>
                  <li>
                    <strong>
                      Mobile Number:{' '}
                      <span className='last'>
                        {cart.shippingAddress.mobile}
                      </span>
                    </strong>
                    <div className='clearfix'></div>
                  </li>
                  <li>
                    <strong>
                      Address:{' '}
                      <span className='last'>
                        {cart.shippingAddress.address}
                      </span>
                    </strong>
                    <div className='clearfix'></div>
                  </li>
                  <li>
                    <strong>
                      City:{' '}
                      <span className='last'>{cart.shippingAddress.city}</span>
                    </strong>
                    <div className='clearfix'></div>
                  </li>
                  <li>
                    <strong>
                      Postal Code:{' '}
                      <span className='last'>
                        {cart.shippingAddress.postalCode}
                      </span>
                    </strong>
                    <div className='clearfix'></div>
                  </li>
                  <li>
                    <strong>
                      Country:{' '}
                      <span className='last'>
                        {cart.shippingAddress.country}
                      </span>
                    </strong>
                    <div className='clearfix'></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-7'>
              <div className='order_box'>
                <h2>Your Order</h2>
                {cart.cartItems.length === 0 ? (
                  <Message>Your cart is empty</Message>
                ) : (
                  <>
                    <ul className='list'>
                      {cart.cartItems.map((item, index) => (
                        <li key={index}>
                          <strong>
                            {item.name}{' '}
                            <span className='middle'> x {item.qty}</span>{' '}
                            <span className='last'>
                              &#x24; {(item.price * item.qty).toLocaleString()}
                            </span>
                          </strong>
                          <div className='clearfix'></div>
                        </li>
                      ))}
                    </ul>
                    <ul className='list list_2'>
                      <li>
                        <strong>
                          Subtotal <span>&#x24;{cart.itemsPrice}</span>
                        </strong>
                      </li>
                      <li>
                        <strong>
                          Shipping{' '}
                          <span>
                            &#x24;
                            {cart.shippingPrice}
                          </span>
                        </strong>
                      </li>
                      <li>
                        <strong>
                          Total <span>&#x24;{cart.totalPrice}</span>
                        </strong>
                      </li>
                    </ul>
                    <div className='payment_item'>
                      <p>
                        This is a detailed list of what you are ordering.
                        Proceed to make payment after accepting our terms and
                        conditions.
                      </p>
                    </div>
                    <div className='creat_account'>
                      <input
                        type='checkbox'
                        id='f-option4'
                        name='selector'
                        checked={checked}
                        onChange={handleCheck}
                      />
                      <label for='f-option4'>I’ve read and accepted the </label>
                      <Link to=''> terms & conditions.</Link>
                    </div>
                    {errorCheck && (
                      <Message variant='danger'>
                        You need to accept the Terms first.
                      </Message>
                    )}
                    {error && <Message variant='danger'>{error}</Message>}
                    <div className='text-center'>
                      {/* <button
                        className='button button-paypal mr-2'
                        onClick={placeOrderHandler}
                      >
                        Make Payment
                      </button> */}
                      <Button variant='primary' onClick={handleShow}>
                        Pay With Bitcoin
                      </Button>

                      <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                          <Modal.Title>
                            Procedures to Bitcoin Transfer Payment
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <ol>
                            <li>Ensure You accept our Terms and Conditions </li>
                            <li>
                              {' '}
                              send the sum of &#x24;
                              {cart.totalPrice} worth of bitcoin to the
                               bitcoin address after clicking the pay Now Button shown below
                            </li>
                            
                            <li>
                              Your Payment will be automatically updated once payment has been successful
                            </li>
                          </ol>
              
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant='secondary' onClick={handleClose}>
                            Close
                          </Button>
                          <Button variant='primary' onClick={placeOrderHandler}>
                            PAY NOW
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PlaceOrderScreen; 
