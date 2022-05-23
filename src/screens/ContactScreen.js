import React, {useState, useEffect} from 'react'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { submitIssue } from '../actions/userActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'

const ContactScreen = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [order, setOrder] = useState('')
    const [subject, setSubject] = useState('')
    const [details, setDetails] = useState('')

    const dispatch = useDispatch()

    const userIssue = useSelector((state) => state.userIssue)
    const { loading, error, issue } = userIssue

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()
        
        dispatch(submitIssue(name, email, order, subject, details))
        setName('')
        setEmail('')
        setDetails('')
        setOrder('')
        setSubject('')
    }

    return (
        <>
            <Meta title='Contact Us' />
            <section className="section-margin calc-60px">
                <div className="container">
                    <div className="section-intro">
                        <h5><span className="section-intro__style">How Can We Help You?</span></h5>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src='/images/contact.svg' className='img-fluid' alt='Contact' />
                            <div className="mt-5 call-contact">
                                <h6><u>You can call us:</u></h6>
                                <p>+234 81 489 99 280</p>
                                <p>+234 81 489 99 280</p>
                                <p>+234 81 489 99 280</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form className="border-form comment-form mt-3" onSubmit={submitHandler}>
                                <h6><u>You can write to us:</u></h6>
                                <div className="form-group">
                                    <label htmlFor="name">Name:<span>*</span></label>
                                    <input type="text" className="form-control" value={name}
                                        required
                                        onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:<span>*</span></label>
                                    <input type="email" className="form-control" value={email}
                                        required
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="order">Order Code:</label>
                                    <input type="text" className="form-control" value={order}
                                        required
                                        onChange={(e) => setOrder(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject:<span>*</span></label>
                                    <select className="form-control" value={subject} onChange={(e) => setSubject(e.target.value)}>
                                        <option value="" disabled={true} selected>-----</option>
                                        <option value="My delivery has not arrived">My delivery has not arrived</option>
                                        <option value="I want to cancel my order">I want to cancel my order</option>
                                        <option value="I want to return my order">I want to return my order</option>
                                        <option value="I have other requests">I have other requests</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="details">Details:<span>*</span></label>
                                    <textarea 
                                        className="form-control different-control w-100" 
                                        cols="30" rows="5" 
                                        placeholder="Full details of issue"
                                        value={details}
                                        onChange={(e) => setDetails(e.target.value)}
                                    ></textarea>
                                </div>
                                <div className="text-center">
                                    <button className='button mb-2' type='submit'>Send</button>
                                    <p>
                                        {issue && <Message variant='danger'>Message sent!</Message>}
                                        {error && <Message variant='danger'>{error}</Message>}
                                        {loading && <Loader />}
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ContactScreen