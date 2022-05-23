import React, {useState, useEffect} from 'react'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {Link} from 'react-router-dom'
import { login } from '../actions/userActions'
import Meta from '../components/Meta'

const LoginScreen = ({location, history}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
        history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <>
            <Meta title="Login to your account" />
            <section className="login_box_area section-margin">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login_box_img">
                                <div className="hover">
                                    <h4>New to BestWatchesDeals</h4>
                                    <p>Create an account in a few steps to get started</p>
                                    <Link class="button button-account" to="/register">Create an Account</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login_form_inner">
                                <h3>Log in to enter</h3>
                                <div className='row justify-content-center'>
                                    <div className='col-md-8'>
                                        {error && <Message variant='danger'>{error}</Message>}
                                        {loading && <Loader />}
                                    </div>
                                </div>
                                
                                <form className="row login_form" method="POST" onSubmit={submitHandler}>
                                    <div class="col-md-12 form-group">
                                        <input type="email" className="form-control"
                                            id="email" placeholder="Email Address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="password" className="form-control"
                                            id="password" placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    
                                    <div className="col-md-12 form-group">
                                        <button type="submit" value="submit" className="button button-login w-100">Log In</button>
                                        {/* <Link to="/forgot-password">Forgot Password?</Link> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default LoginScreen