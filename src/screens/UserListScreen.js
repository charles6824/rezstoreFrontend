import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Footer from '../components/Footer';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { listUsers } from '../actions/userActions';
import Meta from '../components/Meta';

const UserListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users, page, pages } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers(pageNumber));
    } else {
      history.push('/login');
    }
  }, [dispatch, history, userInfo, pageNumber]);

  return (
    <>
      <Meta title='List of Users' />
      <section className='section-margin calc-60px'>
        <div className='container profile_container'>
          <div className='section-intro'>
            <h5>
              <span className='section-intro__style'>All Users</span>
            </h5>
          </div>
          <div className='row justify-content-center'>
            <div className='col-md-10 mb-5'>
              {loading ? (
                <Loader />
              ) : error ? (
                <Message variant='danger'>{error}</Message>
              ) : (
                <div className='table-responsive store-table'>
                  <table className='table table-bordered'>
                    <thead>
                      <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr key={user._id}>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>
                            {user.isAdmin ? (
                              <span>Admin</span>
                            ) : (
                              <span>User</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
          <div className='rr'>
            {pages > 1 && (
              <Pagination>
                {[...Array(pages).keys()].map((x) => (
                  <LinkContainer key={x + 1} to={`/admin/users/${x + 1}`}>
                    <Pagination.Item active={x + 1 === page}>
                      {x + 1}
                    </Pagination.Item>
                  </LinkContainer>
                ))}
              </Pagination>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UserListScreen;
