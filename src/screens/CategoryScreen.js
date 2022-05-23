import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { listProductCategories } from '../actions/productActions';
import Meta from '../components/Meta';

const CategoryScreen = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const cName = match.params.categoryName.toUpperCase();
  const categoryName = match.params.categoryName;

  const dispatch = useDispatch();

  const productCategories = useSelector((state) => state.productCategories);
  const { loading, error, products, pages, page } = productCategories;

  useEffect(() => {
    dispatch(listProductCategories(categoryName, pageNumber));
  }, [dispatch, pageNumber, categoryName]);

  return (
    <>
      <Meta title={cName} />
      <section className='mv'>
        <div className='container'>
          <div className='section-intro pb-60px'>
            <h5>
              <span className='section-intro__style'>{cName}</span>
            </h5>
          </div>
          <div className='row card-row'>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              products.map((product) => (
                <div className='col-md-6 col-lg-4 col-xl-3'>
                  <Product product={product} />
                </div>
              ))
            )}
          </div>
          <div className='rr'>
            {pages > 1 && (
              <Pagination>
                {[...Array(pages).keys()].map((x) => (
                  <LinkContainer
                    key={x + 1}
                    to={`/categories/${categoryName}/page/${x + 1}`}
                  >
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

export default CategoryScreen;
