import React, {useState, useEffect} from 'react'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Rating from '../components/Rating'
import {
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane
} from "reactstrap";
import {
    listProductDetails,
    createProductReview,
} from '../actions/productActions'
import { addToCart } from '../actions/cartActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'
import Meta from '../components/Meta'

const ProductScreen = ({match}) => {
    const getId = match.params.id

    const [pills, setPills] = React.useState("1")
    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    const productReviewCreate = useSelector((state) => state.productReviewCreate)
    const {
        success: successProductReview,
        loading: loadingProductReview,
        error: errorProductReview,
    } = productReviewCreate


    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        window.scrollTo(0, 0)
        if (successProductReview) {
            setRating(0)
            setComment('')
        }
        if (!product._id || product._id !== getId) {
            dispatch(listProductDetails(getId))
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
        }
    }, [dispatch, getId, product._id, successProductReview])

    // const convertFirstLetter = (str) => {
    //     return str.charAt(0).toUpperCase() + str.slice(1)
    // }

    const addToCartHandler = () => {
        dispatch(addToCart(getId, qty))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            createProductReview(match.params.id, {
                rating,
                comment,
            })
        )
    }

    return (
      <>
        <Meta title={product.name} />
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
            <section className='section-margin calc-60px'>
              <div className='container'>
                <div className='section-intro pb-60px'>
                  <h5>{product.name}</h5>
                </div>
                <div className='row card-row'>
                  <div className='col-lg-5 mb-3'>
                    <img
                      className='img-fluid'
                      src={product.image}
                      alt='Product'
                    />
                  </div>
                  <div className='col-lg-7'>
                    <div className='s_product_text'>
                        <h2>{product.name}</h2>
                      <h2>&#x24;{product.price}</h2>
                      <ul className='list'>
                        <li>
                          <span>Category</span> : {product.brand}
                        </li>
                        <li>
                          <span>Brand</span> : {product.category}
                        </li>
                        <li>
                          <span>Availability</span> :{' '}
                          {product.countInStock > 0
                            ? 'In Stock'
                            : 'Out Of Stock'}
                        </li>
                      </ul>
                      <p>{product.description}</p>
                      <div className='product_count'>
                        {product.countInStock > 0 && (
                          <span className='mr-2'>
                            <label htmlFor='qty'>Quantity:</label>
                            <select
                              className='input-text qty'
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </span>
                        )}
                        {cartItems.find((x) => x.product === getId) ? (
                          <button
                            className='button disabled'
                            type='button'
                            disabled={true}
                          >
                            Added to Cart
                          </button>
                        ) : (
                          <button
                            className={
                              product.countInStock === 0
                                ? 'button disabled'
                                : 'button'
                            }
                            type='button'
                            disabled={product.countInStock === 0}
                            onClick={addToCartHandler}
                          >
                            Add to Cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className='product_description_area'>
              <div className='container'>
                <div className='tab-menu'>
                  <Nav className='nav-tabs-default' role='tablist' tabs>
                    <NavItem>
                      <NavLink
                        className={pills === '1' ? 'active' : ''}
                        href='#pablo'
                        onClick={(e) => {
                          e.preventDefault();
                          setPills('1');
                        }}
                      >
                        <span>Features</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === '2' ? 'active' : ''}
                        href='#pablo'
                        onClick={(e) => {
                          e.preventDefault();
                          setPills('2');
                        }}
                      >
                        <span>Reviews</span>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <div className='tab-body'>
                  <TabContent activeTab={'pills' + pills}>
                    <TabPane tabId='pills1'>
                      <div className='row mt-4'>
                        <div className='col-md-6'>
                          <p
                            className='text-justify'
                            style={{ fontSize: '.9rem' }}
                          >
                            {product.features}
                          </p>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId='pills2'>
                      <div className='row mt-4'>
                        <div className='col-lg-6'>
                          <div className='row total_rate mb-3'>
                            <div className='col-md-6'>
                              <div className='box_total'>
                                <h5>Overall</h5>
                                <h4>{product.rating}</h4>
                                <h6>({product.numReviews} Reviews)</h6>
                              </div>
                            </div>
                          </div>
                          {product.reviews.length === 0 && (
                            <Message>No Reviews found.</Message>
                          )}
                          <div className='review_list'>
                            {product.reviews.map((review) => (
                              <div className='review_item' key={review._id}>
                                <div className='media'>
                                  <div className='media-body'>
                                    <h4>{review.name}</h4>
                                    <Rating value={review.rating} />
                                  </div>
                                </div>
                                <p>{review.comment}</p>
                                <hr />
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div className='review_box'>
                            <h4>
                              <u>Add a Review</u>
                            </h4>
                            {successProductReview && (
                              <Message variant='success'>
                                Review submitted successfully
                              </Message>
                            )}
                            {loadingProductReview && <Loader />}
                            {errorProductReview && (
                              <Message variant='danger'>
                                {errorProductReview}
                              </Message>
                            )}
                            {userInfo ? (
                              <form
                                className='border-form comment-form mt-3'
                                onSubmit={submitHandler}
                              >
                                <div className='form-group'>
                                  <select
                                    className='form-control'
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                  >
                                    <option value=''>Select a Rating</option>
                                    <option value='1'>1 - Poor</option>
                                    <option value='2'>2 - Fair</option>
                                    <option value='3'>3 - Good</option>
                                    <option value='4'>4 - Very Good</option>
                                    <option value='5'>5 - Excellent</option>
                                  </select>
                                </div>
                                <div className='form-group'>
                                  <textarea
                                    className='form-control different-control w-100'
                                    cols='30'
                                    rows='5'
                                    placeholder='Enter Message'
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                  ></textarea>
                                </div>
                                <div className='form-group text-center text-md-right mt-3'>
                                  <button
                                    disabled={loadingProductReview}
                                    type='submit'
                                    className='button button--active button-review'
                                  >
                                    Submit
                                  </button>
                                </div>
                              </form>
                            ) : (
                              <Message>
                                Please <Link to='/sign-in'>sign in</Link> to
                                write a review{' '}
                              </Message>
                            )}
                          </div>
                        </div>
                      </div>
                    </TabPane>
                  </TabContent>
                </div>
              </div>
            </section>
          </>
        )}

        <Footer />
      </>
    );
}

export default ProductScreen