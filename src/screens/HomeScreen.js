import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';
import {
  listTopProducts,
  listShortsProducts,
  listJoggersProducts,
  listHoodiesProducts,
  listOtherProducts,
} from '../actions/productActions';
import Meta from '../components/Meta';
import Carousels from '../components/Carousel';

const HomeScreen = () => {
  const [category, setCategory] = useState('hoodies');
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;


  const productJoggers = useSelector((state) => state.productJoggers);
  const {
    loading: loadingJoggers,
    error: errorJoggers,
    products: productsJoggers,
  } = productJoggers;

  const productShorts = useSelector((state) => state.productShorts);
  const {
    loading: loadingShorts,
    error: errorShorts,
    products: productsShorts,
  } = productShorts;

  const productHoodies = useSelector((state) => state.productHoodies);
  const {
    loading: loadingHoodies,
    error: errorHoodies,
    products: productsHoodies,
  } = productHoodies;

  const productOthers = useSelector((state) => state.productOthers);
  const {
    loading: loadingOthers,
    error: errorOthers,
    products: productsOthers,
  } = productOthers;

  useEffect(() => {
    dispatch(listTopProducts());
    dispatch(listShortsProducts('shorts'));
    dispatch(listJoggersProducts('joggers'));
    dispatch(listHoodiesProducts('hoodies'));
    dispatch(listOtherProducts(category));
  }, [dispatch, category]);

  const changeCategory = (e) => {
    setCategory(e.target.value);
    dispatch(listOtherProducts(e.target.value));
  };

  return (
    <>
      <Meta />
      <section className='mt-md-5'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='shadow'>
                <h3 className='px-4 pt-2'>Categories</h3>
                <hr className='mb-0'/>
                <div className='cat-box'>
                  <Link to='/categories/shorts'>
                    <i className='fas fa-arrow-circle-right'></i> <span className='cat-text'>Shorts</span>
                  </Link>
                </div>
                <div className='cat-box'>
                  <Link to='/categories/hoodies'>
                    <i className='fas fa-arrow-circle-right'></i> <span className='cat-text'>Hoodies</span>
                  </Link>
                </div>
                <div className='cat-box'>
                  <Link to='/categories/sweatshirt'>
                    <i className='fas fa-arrow-circle-right'></i> <span className='cat-text'>Sweatshirts</span>
                  </Link>
                </div>
                <div className='cat-box'>
                  <Link to='/categories/tracksuit'>
                    <i className='fas fa-arrow-circle-right'></i> <span className='cat-text'>Tracksuit</span>
                  </Link>
                </div>
                <div className='cat-box'>
                  <Link to='/categories/joggers'>
                    <i className='fas fa-arrow-circle-right'></i> <span className='cat-text'>Joggers</span>
                  </Link>
                </div>
                <div className='cat-box'>
                  <Link to='/categories/uniform'>
                    <i className='fas fa-arrow-circle-right'></i> <span className='cat-text'>Staff Wear/Uniforms</span>
                  </Link>
                </div>
                <div className='cat-box'>
                  <Link to='/categories/sweattracksuit'>
                    <i className='fas fa-arrow-circle-right'></i> <span className='cat-text'>Sweattracksuit</span>
                  </Link>
                </div>
                <div className='cat-box'>
                  <Link to='/categories/tanktop'>
                    <i className='fas fa-arrow-circle-right'></i> <span className='cat-text'>Tanktop</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-md-9 d-none d-md-block'>
              <Carousels />
            </div>
          </div>
        </div>
      </section>

      <section className='section-margin calc-60px'>
        <div className='container'>
          <div className='section-intro pb-60px'>
            <p>Popular Products in the market</p>
            <h2>
              Trending <span className='section-intro__style'>Product</span>
            </h2>
          </div>
          <div className='row card-row'>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              products.map((product) => (
                <div className='col-6 col-lg-4 col-xl-3' key={product._id}>
                  <Product product={product} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className='section-margin calc-60px'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <div className='section-intro pb-60px text-center border-category'>
                <h2>Categories</h2>
              </div>
            </div>
          </div>

          <div className='section-intro pb-60px'>
            <h4>
              <span className='section-intro__style'>Joggers</span>
            </h4>
          </div>

          <div className='row card-row'>
            {loadingJoggers ? (
              <Loader />
            ) : errorJoggers ? (
              <Message variant='danger'>{errorJoggers}</Message>
            ) : (
              productsJoggers.map((product) => (
                <div className='col-6 col-lg-4 col-xl-3' key={product._id}>
                  <Product product={product} />
                </div>
              ))
            )}
          </div>
          <p className='text-right'>
            <Link to='/categories/joggers' className='show-btn'>
              Show More...
            </Link>
          </p>
          <hr />

          <div className='section-intro pb-60px'>
            <h4>
              <span className='section-intro__style'>Shorts</span>
            </h4>
          </div>

          <div className='row card-row'>
            {loadingShorts ? (
              <Loader />
            ) : errorShorts ? (
              <Message variant='danger'>{errorShorts}</Message>
            ) : (
              productsShorts.map((product) => (
                <div className='col-6 col-lg-4 col-xl-3' key={product._id}>
                  <Product product={product} />
                </div>
              ))
            )}
          </div>
          <p className='text-right'>
            <Link to='/categories/shorts' className='show-btn'>
              Show More...
            </Link>
          </p>
          <hr />

          <div className='section-intro pb-60px'>
            <h4>
              <span className='section-intro__style'>Hoodies</span>
            </h4>
          </div>

          <div className='row card-row'>
            {loadingHoodies ? (
              <Loader />
            ) : errorHoodies ? (
              <Message variant='danger'>{errorHoodies}</Message>
            ) : (
              productsHoodies.map((product) => (
                <div className='col-6 col-lg-4 col-xl-3' key={product._id}>
                  <Product product={product} />
                </div>
              ))
            )}
          </div>
          <p className='text-right'>
            <Link to='/categories/hoodies' className='show-btn'>
              Show More...
            </Link>
          </p>
          <hr />
          <p>Other Categories</p>
          <div class='filter-bar d-flex flex-wrap align-items-center'>
            <div className='sorting'>
              <select
                className='input'
                value={category}
                onChange={changeCategory}
              >
                <option value='sweatshirt'>Sweatshirts</option>
                <option value='tracksuit'>Track Suit</option>
                <option value='uniform'>Staff Wear / Uniform</option>
                <option value='sweattracksuit'>Sweat Track Suit</option>
                <option value='tanktop'>Tanktop</option>
              </select>
            </div>
          </div>

          <div className='row card-row'>
            {loadingOthers ? (
              <Loader />
            ) : errorOthers ? (
              <Message variant='danger'>{errorOthers}</Message>
            ) : (
              productsOthers.map((product) => (
                <div className='col-6 col-lg-4 col-xl-3' key={product._id}>
                  <Product product={product} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className='section-margin calc-60px'>
        <div className='container'>
          <div className='section-intro pb-60px'>
            <h2>
              <span className='section-intro__style'>Features</span>
            </h2>
          </div>
          <div className='row features card-row'>
            <div className='col-md-3 col-6 mb-3 box text-center'>
              <i className='fa fa-car'></i>
              <h6>Free Deliver</h6>
              <p>Free overnight shipping</p>
            </div>
            <div className='col-md-3 col-6 mb-3 box text-center'>
              <i className='fa fa-credit-card'></i>
              <h6>Payment Secured</h6>
              <p>We ensure secured payment</p>
            </div>
            <div className='col-md-3 col-6 mb-3 box text-center'>
              <i className='fa fa-users'></i>
              <h6>Support 24/7</h6>
              <p>We are always available</p>
            </div>
            <div className='col-md-3 col-6 mb-3 box text-center'>
              <i className='fas fa-money-bill'></i>
              <h6>Return Policy</h6>
              <p>Extended return policy</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <p className='pl-2'>
            <b>Luxury Watches For Sale</b>
          </p>
          <p className='pl-5'>
            {' '}
            <small>
              Luxurious Swiss watches have long been coveted as timepieces of
              great distinction. AuthenticWatches.com makes these classics
              affordable, offering prestigious merchandise at discounted prices
              not normally available for elite brands.
            </small>
          </p>
          <p class='pl-5'>
            <small>
              Our vast collection of premium, hand-selected watches is unrivaled
              and includes pieces by Rolex, Omega, Tag Heuer, Baume & Mercier,
              Breitling, Cartier, Longines, MontBlanc and others. We also offer
              rare and unique timepieces for the most discerning buyers,
              available as part of elusive, limited-edition sets.
            </small>
          </p>
          <p></p>
          <p className='pl-5'>
            <small>
              We are the No. 1 place customers go to find high-end timepieces at
              discounted prices unmatched by competitors. We are proud to be a
              leader and global supplier. Browse our online catalog to see how
              extensive our collection of discount watches truly is, including
              hard-to-find items. We also offer high-end designer handbags and
              fine jewelry for further indulgence.
            </small>
          </p>

          <p className='pl-2'>
            <b>Buy Luxury Watches, Savor the Benefits</b>
          </p>
          <p className='pl-5'>
            <small>
              There are a multitude of reasons to buy luxury watches online from
              AuthenticWatches.com. Whether you desire an unforgettable gift or
              are selecting a watch for yourself to make a statement, consider
              these benefits and uses:
            </small>
          </p>

          <p className='pl-5'>
            <small>
              <b>IMPECCABLE QUALITY.</b>Authentic Swiss timepieces are
              manufactured with the highest standards of craftsmanship.
              Obsessive engineering makes each watch an impressive piece you
              will be proud to own.
            </small>
          </p>
          <p className='pl-5'>
            <small>
              <b>HEIRLOOM PIECES.</b> Luxury watches are valuable and can be
              passed down for generations. Because they hold their value for so
              long, they are perfect as family heirlooms.
            </small>
          </p>
          <p className='pl-5'>
            <small>
              <b>STATUS SYMBOLS.</b> Associated with intelligence and success,
              luxury watches are more than accessories. Their elegance can
              enhance one's image.
            </small>
          </p>
          <p className='pl-5'>
            <small>
              <b>GREAT GIFTS..</b> When you seek a once-in-a-lifetime gift that
              will not soon be forgotten, a Swiss timepiece is a great choice.
              Attention-grabbing and luxurious, these watches meet the
              definition of a memorable present..
            </small>
          </p>

          <p className='pl-2'>
            <b>The Premier Provider of Authentic Luxury Watches for Sale</b>
          </p>
          <p className='pl-5'>
            <small>
              In business since 1979, AuthenticWatches.com stands out today for
              offering premium discount watches manufactured by the finest
              luxury brands. We are a family-run company backed by a track
              record of meeting clients' needs with exemplary customer service.
              Thanks to our long-standing, trusted relationships with certified
              suppliers, we make it affordable to buy Swiss watches of many
              types. AuthenticWatches.com is the single best place to buy
              high-end, authentic elite brand watches at prices much lower than
              you will find elsewhere. Even better, the service we provide is as
              luxurious as our products, and we offer superior warranties.
            </small>
          </p>
          <p class='pl-5'>
            <small>
              From our family to yours, we wish to provide you with the most
              pleasant buying experience from beginning to end. Our
              knowledgeable and specially trained service associates are
              standing by to answer your questions. We cherish the opportunity
              to assist you with your next luxury watch, jewelry, or handbag
              purchase. Whether you desire a specific brand or wish to explore
              the possibilities, browse our selection of discount watches today.
            </small>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomeScreen;
