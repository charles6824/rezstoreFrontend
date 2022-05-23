import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Footer from '../components/Footer'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {
    listProducts,
    deleteProduct,
    createProduct,
} from '../actions/productActions'
import { PRODUCT_CREATE_RESET } from '../constants/productConstants'
import Meta from '../components/Meta'

const ProductListScreen = ({ history, match }) => {

    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('')
    const [brand, setBrand] = useState('')

    const productList = useSelector((state) => state.productList)
    const { loading, error, products, page, pages } = productList

    const productDelete = useSelector((state) => state.productDelete)
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = productDelete

    const productCreate = useSelector((state) => state.productCreate)
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        product: createdProduct,
    } = productCreate

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch({ type: PRODUCT_CREATE_RESET })

        if (!userInfo || !userInfo.isAdmin) {
            history.push('/login')
        }

        if (successCreate) {
            history.push(`/admin/products/${createdProduct._id}/edit`)
        }else {
            dispatch(listProducts(search, pageNumber, category, brand))
        }
    }, [dispatch, history, userInfo, search, brand, category, successDelete, successCreate, createdProduct, pageNumber,])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteProduct(id))
        }
    }

    const createProductHandler = () => {
        dispatch(createProduct())
    }
    // const handleFilter = (e)=>{
    //   setSearch(e.target.value)
    // }

   

    return (
      <>
        <Meta title='Product List' />
        <section className='section-margin calc-60px'>
          <div className='container profile_container'>
            <div className='section-intro d-flex justify-content-between'>
              <h5>
                <span className='section-intro__style'>All Products</span>
              </h5>
              <p>
                <button className='button' onClick={createProductHandler}>
                  <i className='fas fa-plus'></i> New
                </button>
              </p>
            </div>
            <div>
              {loadingDelete && <Loader />}
              {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
              {loadingCreate && <Loader />}
              {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
            </div>
            <div className='row'>
              <div className='col-md-6 px-3'>
                <input
                  type='text'
                  placeholder='search or filter product by name'
                  className='form-control mb-3'
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
              </div>
              <div className='col-md-3'>
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                  className='form-control mb-3'
                >
                  <option value=''>Search by Brand</option>
                  <option value='rolex'>Rolex</option>
                  <option value='dior'>Christian Dior</option>
                  <option value='breitling'>Breitling</option>
                  <option value='omega'>Omega</option>
                  <option value='tag-heuer'>Tag Heuer</option>
                  <option value='corum'>Corum</option>
                  <option value='michele'>Michele</option>
                  <option value='longines'>Longines</option>
                  <option value='montblanc'>Montblanc</option>
                </select>
              </div>
              <div className='col-md-3'>
                <select
                  onChange={(e) => setBrand(e.target.value)}
                  value={brand}
                  className='form-control mb-3'
                >
                  <option value=''>Search by Category</option>
                  <option value='men'>Men</option>
                  <option value='women'>Women</option>
                </select>
              </div>

              <div className='col-md-12 mb-5'>
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
                          <th scope='col'>Price</th>
                          <th scope='col'>Brand</th>
                          <th scope='col'>Category</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product) => (
                          <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>&#x24;{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.brand}</td>
                            <td>
                              <span className='d-flex justify-content-between'>
                                <LinkContainer
                                  to={`/admin/products/${product._id}/edit`}
                                >
                                  <button className='btn btn-sm btn-info'>
                                    <i className='fas fa-edit'></i>
                                  </button>
                                </LinkContainer>
                                <button
                                  className='btn btn-sm btn-danger ml-2'
                                  onClick={() => deleteHandler(product._id)}
                                >
                                  <i className='fas fa-trash'></i>
                                </button>
                              </span>
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
                    <LinkContainer key={x + 1} to={`/admin/products/${x + 1}`}>
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
}

export default ProductListScreen