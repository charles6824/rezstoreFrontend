import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions'
import CheckOutSteps from '../components/CheckOutSteps'
import Footer from '../components/Footer'
import Meta from '../components/Meta'

const ShippingScreen = ({history}) => {

    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart

    const [mobile, setMobile] = useState(shippingAddress.mobile)
    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ mobile, address, city, postalCode, country }))
        history.push('/placeorder')
    }

    return (
        <>
            <Meta title="Shipping Details" />
            <section className="section-margin calc-60px cart_area">
                <div className="container">
                    <CheckOutSteps step1 />
                    <div className="section-intro pb-60px">
                        <h3>Shipping <span className="section-intro__style">Address</span></h3>
                    </div>
                    <form className="form-contact form-review comment-form mt-3" method="POST" onSubmit={submitHandler}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="address">Address:</label>
                                    <input type="text" className="form-control" value={address}
                                        required
                                        onChange={(e) => setAddress(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">City:</label>
                                    <input type="text" className="form-control" value={city}
                                        required
                                        onChange={(e) => setCity(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Postal Code:</label>
                                    <input type="text" className="form-control" value={postalCode}
                                        required
                                        onChange={(e) => setPostalCode(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Country:</label>
                                    <input type="text" className="form-control" value={country}
                                        required
                                        onChange={(e) => setCountry(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Mobile Number:</label>
                                    <input type="text" className="form-control" value={mobile}
                                        required
                                        onChange={(e) => setMobile(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="order_box">
                                    <p>Ready to place order? Click on the link below if your shipping address has been confirmed.</p>
                                    <p>
                                        <button 
                                            type='submit' 
                                            className='button'
                                        >
                                            Place Order
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ShippingScreen