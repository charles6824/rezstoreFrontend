import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Footer from '../components/Footer'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { listIssues} from '../actions/userActions'
import Meta from '../components/Meta'

const IssueListScreen = ({ history, match }) => {

    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const userListIssue = useSelector((state) => state.userListIssue)
    const { loading, error, issues, page, pages } = userListIssue

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listIssues(pageNumber))
        } else {
            history.push('/login')
        }
    }, [dispatch, history, userInfo, pageNumber])

    return (
        <>
            <Meta title="Issues sent" />
            <section className="section-margin calc-60px">
                <div className="container profile_container">
                    <div className="section-intro">
                        <h5><span className="section-intro__style">Issues Raised</span></h5>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-12 mb-5">
                            {loading ? (
                                <Loader />
                                ) : error ? (
                                <Message variant='danger'>{error}</Message>
                                ) : (
                                    <div className="table-responsive store-table">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Order</th>
                                                    <th scope="col">Subject</th>
                                                    <th scope="col">Details</th>
                                                    <th scope="col">Date Created</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {issues.map((issue) => (
                                                    <tr key={issue._id}>
                                                        <td>{issue.name}</td>
                                                        <td>{issue.email}</td>
                                                        <td>{issue.order}</td>
                                                        <td>{issue.subject}</td>
                                                        <td>{issue.details}</td>
                                                        <td>{issue.createdAt.substring(0, 10)}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    {pages > 1 && (
                        <Pagination>
                            {[...Array(pages).keys()].map((x) => (
                                <LinkContainer
                                    key={x + 1}
                                    to={
                                        `/admin/users/${x + 1}`
                                    }
                                >
                                    <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
                                </LinkContainer>
                            ))}
                        </Pagination>
                    )}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default IssueListScreen