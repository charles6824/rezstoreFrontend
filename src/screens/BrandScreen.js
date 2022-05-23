import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { listProductBrands } from '../actions/productActions';
import Meta from '../components/Meta';

const BrandScreen = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const bName = match.params.brandName.toUpperCase();
  const brandName = match.params.brandName;

  const dispatch = useDispatch();

  const productBrands = useSelector((state) => state.productBrands);
  const { loading, error, products, pages, page } = productBrands;

  useEffect(() => {
    dispatch(listProductBrands(brandName, pageNumber));
  }, [dispatch, pageNumber, brandName]);

  return (
    <>
      <Meta title={bName} />
      <section className='mv'>
        <div className='container '>
          <div className='section-intro pb-60px'>
            <h5>
              <span className='section-intro__style'>{bName}</span>
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
          <div className="row justify-content-center">
              <div className="col-md-8 rr"> 
                {pages > 1 && (
                <Pagination>
                    {[...Array(pages).keys()].map((x) => (
                    <LinkContainer
                        key={x + 1}
                        to={`/brands/${brandName}/page/${x + 1}`}
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
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BrandScreen;
