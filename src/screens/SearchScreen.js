import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {Link} from 'react-router-dom'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap' 
import Meta from '../components/Meta'
import Footer from '../components/Footer'

const SearchScreen = ({history, match}) => {

    const [keyword, setKeyword] = useState('')

    const keywordParams = match.params.keyword
    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading, error, products, page, pages } = productList

    useEffect(() => {
        dispatch(listProducts(keywordParams, pageNumber))
    }, [dispatch, keywordParams, pageNumber])

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/search')
        }
    }

    return (
      <>
        <Meta title='Search For...' />
        <section className='section-margin calc-60px search-area'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div id='col-md-8'>
                <form className='form-inline' onSubmit={submitHandler}>
                  <input
                    className='form-control'
                    type='search'
                    placeholder='Search for...'
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button className='button' type='submit'>
                    Search
                  </button>
                </form>
              </div>
            </div>
            <hr />
            <div className='mb-5'>
              {keywordParams ? (
                <div>
                  <h5 className='mb-4'>
                    Search results for{' '}
                    <span className='section-intro__style'>{keyword}</span>
                  </h5>
                  {loading ? (
                    <Loader />
                  ) : error ? (
                    <Message variant='danger'>{error}</Message>
                  ) : (
                    <>
                      <div className='row card-row'>
                        {products.map((product) => (
                          <div
                            className='col-md-6 col-lg-4 col-xl-3'
                            key={product._id}
                          >
                            <Product product={product} />
                          </div>
                        ))}
                      </div>
                      <div className='rr'>
                        {pages > 1 && (
                          <Pagination>
                            {[...Array(pages).keys()].map((x) => (
                              <LinkContainer
                                key={x + 1}
                                to={`/search/${keyword}/page/${x + 1}`}
                              >
                                <Pagination.Item active={x + 1 === page}>
                                  {x + 1}
                                </Pagination.Item>
                              </LinkContainer>
                            ))}
                          </Pagination>
                        )}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className='text-center'>
                  <p>Your search results will appear here.</p>
                </div>
              )}
            </div>
            <section className='container'>
              <div className=' categories-search'>
                <h5>Popular Brand</h5>
                <div className='row '>
                  <div className='col-lg-2 col-md-2 col-sm-6 col-6 mb-4'>
                    <Link to='/categories/rolex'>
                      <div className='catImg'>
                        <img
                          src='/images/categories/rolex.jpg'
                          alt='Rolex Category'
                          title='Rolex'
                        />
                      </div>
                    </Link>
                  </div>
                  <div className='col-lg-2 col-md-2 col-sm-6 col-6 mb-3'>
                    <Link to='/categories/breitling'>
                      <div className='catImg'>
                        <img
                          src='/images/categories/breitling.jpg'
                          alt='Breitling Category'
                          title='Breitling'
                        />
                      </div>
                    </Link>
                  </div>
                  <div className='col-lg-2 col-md-2 col-sm-6 col-6 mb-4'>
                    <Link to='/categories/dior'>
                      <div className='catImg'>
                        <img
                          src='/images/categories/christian-dior.jpg'
                          alt='Dior Category'
                          title='Dior'
                        />
                      </div>
                    </Link>
                  </div>
                  <div className='col-lg-2 col-md-2 col-sm-6 col-6 mb-4'>
                    <Link to='/categories/omega'>
                      <div className='catImg'>
                        <img
                          src='/images/categories/omega.jpg'
                          alt='Omega Category'
                          title='Omega'
                        />
                      </div>
                    </Link>
                  </div>
                  <div className='col-lg-2 col-md-2 col-sm-6 col-6 mb-4'>
                    <Link to='/categories/tag-heuer'>
                      <div className='catImg'>
                        <img
                          src='/images/categories/tag-heuer.jpg'
                          alt='Tag Heuer Category'
                          title='Tag Heuer'
                        />
                      </div>
                    </Link>
                  </div>
                  <div className='col-lg-2 col-md-2 col-sm-6 col-6 mb-3'>
                    <Link to='/categories/longines'>
                      <div className='catImg'>
                        <img
                          src='/images/categories/longines.jpg'
                          alt='Longines Category'
                          title='Longines'
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <Footer />
      </>
    );
}

export default SearchScreen