import React, {useState, useEffect} from 'react'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'

const RegisterScreen = ({history, location}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        setMessage(null)
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password))
        }
    }

    return (
        <>
            <Meta title="Register for free!" />
            <section className="login_box_area section-margin">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login_box_img">
                                <div className="hover">
                                    <h4>Already have an account?</h4>
                                    <Link className="button button-account" to="/sign-in">Login Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login_form_inner">
                                <h3>Create an account</h3>
                                <div className='row justify-content-center'>
                                    <div className='col-md-8'>
                                        {message && <Message variant='danger'>{message}</Message>}
                                        {error && <Message variant='danger'>{error}</Message>}
                                        {loading && <Loader />}
                                    </div>
                                </div>
                                
                                <form className="row login_form" method="POST" onSubmit={submitHandler}>
                                    <div className="col-md-12 form-group">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Full Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            placeholder="Email Address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            placeholder="Confirm Password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-12 mt-4 form-group">
                                        <button type="submit" value="submit" className="button button-login w-100">Register</button>
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

export default RegisterScreen