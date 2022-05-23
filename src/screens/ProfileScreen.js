import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Footer from '../components/Footer'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { listMyOrders } from '../actions/orderActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
import {
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane
} from "reactstrap";
import Meta from '../components/Meta'

const ProfileScreen = ({ location, history }) => {

    const [pills, setPills] = React.useState("1")
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const orderListMy = useSelector((state) => state.orderListMy)
    const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        }else {
            if (!user || !user.name || success) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails('profile'))
                dispatch(listMyOrders())
            }else {
                console.log(user)
                setName(user.name)
                setEmail(user.email)
                setMobile(user.mobile)
            }
        }
        
    }, [dispatch, history, userInfo, user, success])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, mobile, password }))
        }
    }

    return (
        <>
            <Meta title="Profile" />
            <section className="section-margin calc-60px">
                <div className="container profile_container">
                    <div className="section-intro">
                        <h5><span className="section-intro__style">Profile</span></h5>
                    </div>
                    <div className="tab-menu">
                        <Nav
                            className="nav-tabs-default"
                            role="tablist"
                            tabs
                        >
                            <NavItem>
                                <NavLink
                                    className={pills === "1" ? "active" : ""}
                                    href="#pablo"
                                    onClick={e => {
                                    e.preventDefault();
                                    setPills("1");
                                    }}
                                >
                                    <span>Details</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={pills === "2" ? "active" : ""}
                                    href="#pablo"
                                    onClick={e => {
                                    e.preventDefault();
                                    setPills("2");
                                    }}
                                >
                                    <span>Orders</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <div className="tab-body">
                        <TabContent activeTab={"pills" + pills}>
                            <TabPane tabId="pills1">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 mb-5">
                                        {message && <Message variant='danger'>{message}</Message>}
                                        {}
                                        {success && <Message variant='success'>Profile Updated</Message>}
                                        {loading ? (
                                            <Loader />
                                            ) : error ? (
                                            <Message variant='danger'>{error}</Message>
                                            ) : (
                                                <form className="border-form comment-form mt-3" onSubmit={submitHandler}>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <div className="form-group">
                                                                <label htmlFor="name">Name:</label>
                                                                <input type="text" className="form-control" value={name}
                                                                    onChange={(e) => setName(e.target.value)} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="email">Email:</label>
                                                                <input type="text" className="form-control" value={email}
                                                                    onChange={(e) => setEmail(e.target.value)} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="email">Mobile Number:</label>
                                                                <input type="text" className="form-control" value={mobile}
                                                                    onChange={(e) => setMobile(e.target.value)} />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="name">Password:</label>
                                                                <input type="password" className="form-control" value={password}
                                                                    onChange={(e) => setPassword(e.target.value)} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="email">Confirm Password:</label>
                                                                <input type="password" className="form-control" value={confirmPassword}
                                                                    onChange={(e) => setConfirmPassword(e.target.value)} />
                                                            </div>
                                                            <div className="form-group text-right">
                                                                <button className='button' type='submit'>Update Details</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </form>
                                            )
                                        }
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="pills2">
                                <div className="row mt-3">
                                    <div className="col-md-10">
                                        {loadingOrders ? (
                                            <Loader />
                                            ) : errorOrders ? (
                                            <Message variant='danger'>{errorOrders}</Message>
                                            ) : (
                                            <div className="table-responsive">
                                                <table className="table table-bordered store-table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">ID</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Total</th>
                                                            <th scope="col">Paid</th>
                                                            <th scope="col">Delivered</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {orders.map((order) => (
                                                            <tr key={order._id}>
                                                                <td>{order._id}</td>
                                                                <td>{order.createdAt.substring(0, 10)}</td>
                                                                <td>&#8358;{order.totalPrice}</td>
                                                                <td>
                                                                    {order.isPaid ? (
                                                                        <span>Paid</span>
                                                                    ) : (
                                                                        <span>Not Paid</span>
                                                                    )}
                                                                </td>
                                                                <td>
                                                                    {order.isDelivered ? (
                                                                        <span>Delivered</span>
                                                                    ) : (
                                                                        <span>Not Delivered</span>
                                                                    )}
                                                                </td>
                                                                <td>
                                                                    <Link to={`/order/${order._id}`}>View</Link>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ProfileScreen