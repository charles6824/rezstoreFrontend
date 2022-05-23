import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
// import { PayPalButton } from 'react-paypal-button-v2';
import Message from '../components/Message';
import Loader from '../components/Loader';
// import CoinbaseCommerceButton from 'react-coinbase-commerce';
// import 'react-coinbase-commerce/dist/coinbase-commerce-button.css';
import Footer from '../components/Footer';
import {
  getOrderDetails,
  payOrder,
  deliverOrder,
} from '../actions/orderActions';
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from '../constants/orderConstants';
import Meta from '../components/Meta';

const OrderScreen = ({ match, history }) => {
  const [sdkReady, setSdkReady] = useState(false);

  const [amount, setAmount] = useState(0);
  const [key, setKey] = useState('');

  
  // const [modalShow, setModalShow] = useState(false);

  const orderId = match.params.id;

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;



  const config = {
    reference: new Date().getTime(),
    email: userInfo.email,
    amount: amount,
  };

  const handlePaypalSuccessAction = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult));
  };

  const handlePaypalCloseAction = () => {
    console.log('closed');
  };

  const componentProps = {
    ...config,
    text: 'Pay with Bitcoin',
    onSuccess: (paymentResult) => handlePaypalSuccessAction(paymentResult),
    onClose: handlePaypalCloseAction,
  };

  useEffect(() => {
    const payKey = async () => {
      const { data: clientId } = await axios.get('/api/config/bitcoin');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.blockonomics.co/pay-url/${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!userInfo) {
      history.push('/login');
    }

    if (!order || successPay || successDeliver || order._id !== orderId) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.bitcoin) {
        payKey();
      } else {
        setSdkReady(true);
      }
    }
    if (order) {
      setAmount(order.totalPrice * 100);
    }
  }, [dispatch, orderId, successPay, successDeliver, order, history, userInfo]);

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };
  const paidHandler = () => {
    dispatch(payOrder(order));
  };

  return (
    <>
      <Meta title='Bestwatchesdeals Order' />
      <section className='section-margin calc-60px cart_area'>
        <div className='container'>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <>
              <div className='section-intro pb-60px'>
                <h4>
                  Order Code:{' '}
                  <span className='section-intro__style'>{order._id}</span>
                </h4>
              </div>
              <div className='row card-row'>
                <div className='col-md-5'>
                  <div className='order_box'>
                    <h2>Shipping Details</h2>
                    <ul className='list'>
                      <li>
                        <strong>
                          Name: <span className='last'>{order.user.name}</span>
                        </strong>
                        <div className='clearfix'></div>
                      </li>
                      <li>
                        <strong>
                          Email:{' '}
                          <span className='last'>{order.user.email}</span>
                        </strong>
                        <div className='clearfix'></div>
                      </li>
                      <li>
                        <strong>
                          Mobile Number:{' '}
                          <span className='last'>
                            {order.shippingAddress.mobile}
                          </span>
                        </strong>
                        <div className='clearfix'></div>
                      </li>
                      <li>
                        <strong>
                          Address:{' '}
                          <span className='last'>
                            {order.shippingAddress.address}
                          </span>
                        </strong>
                        <div className='clearfix'></div>
                      </li>
                      <li>
                        <strong>
                          City:{' '}
                          <span className='last'>
                            {order.shippingAddress.city}
                          </span>
                        </strong>
                      </li>
                      <li>
                        <strong>
                          Postal Code:{' '}
                          <span className='last'>
                            {order.shippingAddress.postalCode}
                          </span>
                        </strong>
                      </li>
                      <li>
                        <strong>
                          Country:{' '}
                          <span className='last'>
                            {order.shippingAddress.country}
                          </span>
                        </strong>
                      </li>
                    </ul>
                    <div className='payment_item mt-3'>
                      {order.isDelivered ? (
                        <p>Order was delivered on {order.deliveredAt}</p>
                      ) : (
                        <p>Order not delivered yet.</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className='col-md-7'>
                  <div className='order_box'>
                    <h2>Order Details</h2>
                    {order.orderItems.length === 0 ? (
                      <Message>Order is empty</Message>
                    ) : (
                      <>
                        <ul className='list'>
                          {order.orderItems.map((item, index) => (
                            <li key={index}>
                              <strong>
                                {item.name}{' '}
                                <span className='middle'> x {item.qty}</span>{' '}
                                <span className='last'>
                                  &#x24;{' '}
                                  {(item.price * item.qty).toLocaleString()}
                                </span>
                              </strong>
                            </li>
                          ))}
                        </ul>
                        <ul className='list list_2'>
                          <li>
                            <strong>
                              Subtotal <span>&#x24;{order.itemsPrice}</span>
                            </strong>
                          </li>
                          <li>
                            <strong>
                              Shipping <span>&#x24;{order.shippingPrice}</span>
                            </strong>
                          </li>
                          <li>
                            <strong>
                              Total <span>{order.totalPrice}</span>
                            </strong>
                          </li>
                        </ul>

                        <div className='payment_item mt-3'>
                          {order.isPaid ? (
                            <p>
                              {loadingPay && <Loader />}
                              Order was paid on {order.paidAt}
                            </p>
                          ) : (
                            <p>Order not Paid yet</p>
                          )}
                        </div>
                        <hr />
                        {userInfo && userInfo.isAdmin && !order.isPaid && (
                          <div className='text-center'>
                            {loadingPay && <Loader />}
                            <button
                              type='button'
                              className='paypal-button'
                              {...componentProps}
                              onClick={paidHandler}
                            >
                              Mark As Paid
                            </button>
                          </div>
                        )}
                        {loadingDeliver && <Loader />}
                        {userInfo &&
                          userInfo.isAdmin &&
                          order.isPaid &&
                          !order.isDelivered && (
                            <div className='text-center'>
                              <button
                                type='button'
                                className='paypal-button'
                                onClick={deliverHandler}
                              >
                                Mark As Delivered
                              </button>
                            </div>
                          )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OrderScreen;
