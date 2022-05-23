import React, {useEffect} from 'react'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Product from '../components/Product'
import Paginate from '../components/Paginate'
import { listNewArrivals } from '../actions/productActions'
import Meta from '../components/Meta'

const NewArrivalsScreen = ({match}) => {
    
    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productArrivals = useSelector((state) => state.productArrivals)
    const { loading, error, products, pages, page } = productArrivals

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(listNewArrivals(pageNumber))
    }, [dispatch, pageNumber])

    return (
        <>
            <Meta title="New Arrivals" />        
            <section className="section-margin calc-60px">
                <div className="container">
                    <div className="section-intro pb-60px">
                        <h5>New <span className="section-intro__style">Arrivals</span></h5>
                    </div>
                    <div className="row card-row">
                        {loading ? (
                            <Loader />
                        ) : error ? (
                            <Message variant='danger'>{error}</Message>
                        ) : (
                            products.map((product) => (
                                <div className="col-md-6 col-lg-4 col-xl-3" key={product._id}>
                                    <Product product={product} />
                                </div>
                            ))
                        ) }
                    </div>
                    <Paginate
                        pages={pages}
                        page={page}
                    />
                </div>
            </section>
           
            <Footer />
        </>
    )
}

export default NewArrivalsScreen