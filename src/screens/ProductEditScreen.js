import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'
import Meta from '../components/Meta'

const ProductEditScreen = ({match, history}) => {

    const productId = match.params.id
    

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [description, setDescription] = useState('')
    const [features, setFeatures] = useState('')
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    const productUpdate = useSelector((state) => state.productUpdate)
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = productUpdate

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET })
            history.push('/admin/products')
        }else {
            if (!product.name || product._id !== productId) {
                dispatch(listProductDetails(productId))
            }else {
                setName(product.name)
                setPrice(product.price)
                setImage(product.image)
                setBrand(product.brand)
                setCategory(product.category)
                setCountInStock(product.countInStock)
                setDescription(product.description)
                setFeatures(product.features)
            }
        }
    }, [dispatch, history, productId, product, successUpdate])

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        formData.append('file', file)
       formData.append('upload_preset', 'tpbhzs6w');
       formData.append('cloud_name', 'switch-design');

       setUploading(true);

       fetch('https://api.cloudinary.com/v1_1/switch-design/image/upload', {
         method: 'POST',
         body: formData,
       })
         .then((res) => res.json())
         .then((data) => {
           setUploading(false);
           setImage(data.url);
           console.log(data);
         })
         .catch((err) => {
           console.log(err);
           setUploading(false);
         });
        // try {
        //     const config = {
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //         },
        //     }
        
        //     const { data } = await axios.post('/api/upload', formData, config)
        
        //     setImage(data)
        //     setUploading(false)

        // } catch (error) {
        //     console.error(error)
        //     setUploading(false)
        // }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            updateProduct({
                _id: productId,
                name,
                price,
                image,
                brand,
                category,
                description,
                countInStock,
                features
            })
        )
    }

    return (
        <>
            <Meta title="Edit this Product" />
            <section className="section-margin calc-60px cart_area">
                <div className="container profile_container">
                    <div className="section-intro">
                        <h5>Edit <span className="section-intro__style">Product</span></h5>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-10">
                            {loadingUpdate && <Loader />}
                            {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
                            {loading ? (
                                    <Loader />
                                ) : error ? (
                                    <Message variant='danger'>{error}</Message>
                                ) : (
                                    <>
                                        <form className="form-contact form-review comment-form" method="POST" onSubmit={submitHandler}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Name:</label>
                                                        <input type="text" className="form-control" value={name}
                                                            required
                                                            onChange={(e) => setName(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Price:</label>
                                                        <input type="number" className="form-control" value={price}
                                                            required
                                                            onChange={(e) => setPrice(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Image:</label>
                                                        <input type="text" className="form-control" value={image}
                                                            required
                                                            onChange={(e) => setImage(e.target.value)} />
                                                        <input type="file" className="mt-2" onChange={uploadFileHandler}/>
                                                        {uploading && <Loader />}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Brand:</label>
                                                        <input type="text" className="form-control" value={brand}
                                                            required
                                                            onChange={(e) => setBrand(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="category">Category:</label>
                                                        <select 
                                                            className="form-control" 
                                                            value={category}
                                                            onChange={(e) => setCategory(e.target.value)}
                                                        >   
                                                            <option value='rolex'>Rolex</option>
                                                            <option value='breitling'>Breitling</option>
                                                            <option value='dior'>Christian Dior</option>
                                                            <option value='omega'>Omega</option>
                                                            <option value='tag-heuer'>Tag Heuer</option>
                                                            <option value='longines'>Longines</option>
                                                            <option value='michele'>Michele</option>
                                                            <option value='corum'>Corum</option>
                                                            <option value='montblanc'>Montblanc</option>
                                                            
                                                        </select>
                                                        
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Count in Stock:</label>
                                                        <input type="number" className="form-control" value={countInStock}
                                                            required
                                                            onChange={(e) => setCountInStock(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="description">Description:</label>
                                                        <textarea 
                                                            className="form-control different-control w-100" 
                                                            cols="30" rows="5" 
                                                            value={description}
                                                            onChange={(e) => setDescription(e.target.value)}
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="description">Features:</label>
                                                        <textarea 
                                                            className="form-control different-control w-100" 
                                                            cols="30" rows="5" 
                                                            value={features}
                                                            onChange={(e) => setFeatures(e.target.value)}
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    
                                                    <div className="form-group text-center text-md-right mt-3">
                                                        <button type="submit" className="button button--active button-review">Update</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ProductEditScreen