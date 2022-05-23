import axios from 'axios'
import {
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
  PRODUCT_MEN_REQUEST,
  PRODUCT_MEN_SUCCESS,
  PRODUCT_MEN_FAIL,
  PRODUCT_WOMEN_REQUEST,
  PRODUCT_WOMEN_SUCCESS,
  PRODUCT_WOMEN_FAIL,
  PRODUCT_NEW_REQUEST,
  PRODUCT_NEW_SUCCESS,
  PRODUCT_NEW_FAIL,
  PRODUCT_ARRIVAL_REQUEST,
  PRODUCT_ARRIVAL_SUCCESS,
  PRODUCT_ARRIVAL_FAIL,
  PRODUCT_CATEGORY_REQUEST,
  PRODUCT_CATEGORY_SUCCESS,
  PRODUCT_CATEGORY_FAIL,
  PRODUCT_BRAND_REQUEST,
  PRODUCT_BRAND_SUCCESS,
  PRODUCT_BRAND_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_JOGGERS_REQUEST,
  PRODUCT_JOGGERS_SUCCESS,
  PRODUCT_JOGGERS_FAIL,
  PRODUCT_SHORTS_REQUEST,
  PRODUCT_SHORTS_SUCCESS,
  PRODUCT_SHORTS_FAIL,
  PRODUCT_HOODIES_REQUEST,
  PRODUCT_HOODIES_SUCCESS,
  PRODUCT_HOODIES_FAIL,
  PRODUCT_OTHERS_REQUEST,
  PRODUCT_OTHERS_SUCCESS,
  PRODUCT_OTHERS_FAIL,
} from '../constants/productConstants';
import { logout } from './userActions'

export const listTopProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_TOP_REQUEST })
  
        const { data } = await axios.get(`https://rezstore.herokuapp.com/api/products/top`)
  
        dispatch({
            type: PRODUCT_TOP_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_TOP_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const listNewProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_NEW_REQUEST })
  
        const { data } = await axios.get(`https://rezstore.herokuapp.com/api/products/new`)
  
        dispatch({
            type: PRODUCT_NEW_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_NEW_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const listJoggersProducts = (cat) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_JOGGERS_REQUEST })
  
        const { data } = await axios.get(`https://rezstore.herokuapp.com/api/products/cat/${cat}`)
  
        dispatch({
            type: PRODUCT_JOGGERS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_JOGGERS_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const listMenProducts = (brandName) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_MEN_REQUEST })
  
        const { data } = await axios.get(`https://rezstore.herokuapp.com/api/products/brand/${brandName}`)
  
        dispatch({
            type: PRODUCT_MEN_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_MEN_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}
export const listWomenProducts = (brandName) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_WOMEN_REQUEST })
  
        const { data } = await axios.get(`https://rezstore.herokuapp.com/api/products/brand/${brandName}`)
  
        dispatch({
            type: PRODUCT_WOMEN_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_WOMEN_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const listShortsProducts = (cat) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_SHORTS_REQUEST })
  
        const { data } = await axios.get(`https://rezstore.herokuapp.com/api/products/cat/${cat}`)
  
        dispatch({
            type: PRODUCT_SHORTS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_SHORTS_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const listHoodiesProducts = (cat) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_HOODIES_REQUEST })
  
        const { data } = await axios.get(`https://rezstore.herokuapp.com/api/products/cat/${cat}`)
  
        dispatch({
            type: PRODUCT_HOODIES_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_HOODIES_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const listOtherProducts = (cat) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_OTHERS_REQUEST })
  
        const { data } = await axios.get(`https://rezstore.herokuapp.com/api/products/cat/${cat}`)
  
        dispatch({
            type: PRODUCT_OTHERS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_OTHERS_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const listNewArrivals = (pageNumber = '') => async (
    dispatch
  ) => {
    try {
        dispatch({ type: PRODUCT_ARRIVAL_REQUEST })
    
        const { data } = await axios.get(
            `https://rezstore.herokuapp.com/api/products/new-arrivals?pageNumber=${pageNumber}`
        )
  
        dispatch({
            type: PRODUCT_ARRIVAL_SUCCESS,
            payload: data,
        })

    }catch (error) {
        dispatch({
            type: PRODUCT_ARRIVAL_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const listProductCategories = (categoryName, pageNumber = '') => async (
    dispatch
  ) => {
    try {
        dispatch({ type: PRODUCT_CATEGORY_REQUEST }) 
    
        const { data } = await axios.get(
            `https://rezstore.herokuapp.com/api/products/categories/${categoryName}/?pageNumber=${pageNumber}`
        )
  
        dispatch({
            type: PRODUCT_CATEGORY_SUCCESS,
            payload: data,
        })

    }catch (error) {
        dispatch({
            type: PRODUCT_CATEGORY_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const listProductBrands = (brandName, pageNumber = '') => async (
    dispatch
  ) => {
    try {
        dispatch({ type: PRODUCT_BRAND_REQUEST }) 
    
        const { data } = await axios.get(
            `https://rezstore.herokuapp.com/api/products/brands/${brandName}/?pageNumber=${pageNumber}`
        )
  
        dispatch({
            type: PRODUCT_BRAND_SUCCESS,
            payload: data,
        })

    }catch (error) {
        dispatch({
            type: PRODUCT_BRAND_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
    
        const { data } = await axios.get(`https://rezstore.herokuapp.com/api/products/${id}`)
    
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data,
        })
    }catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const createProductReview = (productId, review) => async (
        dispatch,
        getState
    ) => {
        try {
            dispatch({
                type: PRODUCT_CREATE_REVIEW_REQUEST,
            })
        
            const {
                userLogin: { userInfo },
            } = getState()
        
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`,
                },
            }
  
            await axios.post(`https://rezstore.herokuapp.com/api/products/${productId}/reviews`, review, config)
        
            dispatch({
                type: PRODUCT_CREATE_REVIEW_SUCCESS,
            })
        } catch (error) {
            const message =
                error.response && error.response.data.message
            ? error.response.data.message
            : error.message
            if (message === 'Not authorized, token failed') {
                dispatch(logout())
            }
            dispatch({
                type: PRODUCT_CREATE_REVIEW_FAIL,
                payload: message,
            })
        }
}

export const listProducts = (keyword = '', pageNumber = '', category = '', brand = '') => async (
    dispatch
  ) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
  
        const { data } = await axios.get(
            `https://rezstore.herokuapp.com/api/products?keyword=${keyword}&pageNumber=${pageNumber}&category=${category}&brand=${brand}`
        )
  
      dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data,
      })
    }catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_DELETE_REQUEST,
        })
    
        const {
            userLogin: { userInfo },
        } = getState()
  
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }
  
        await axios.delete(`https://rezstore.herokuapp.com/api/products/${id}`, config)
  
        dispatch({
            type: PRODUCT_DELETE_SUCCESS,
        })
    }catch (error) {
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: message,
        })
    }
}

export const createProduct = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_CREATE_REQUEST,
        })
    
        const {
            userLogin: { userInfo },
        } = getState()
    
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }
  
        const { data } = await axios.post(`https://rezstore.herokuapp.com/api/products`, {}, config)
    
        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            payload: data,
        })
    }catch (error) {
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: message,
        })
    }
}
  
export const updateProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_UPDATE_REQUEST,
        })
    
        const {
            userLogin: { userInfo },
        } = getState()
  
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }
  
        const { data } = await axios.put(
            `https://rezstore.herokuapp.com/api/products/${product._id}`,
            product,
            config
        )
  
        dispatch({
            type: PRODUCT_UPDATE_SUCCESS,
            payload: data,
        })
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })

    }catch (error) {
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: PRODUCT_UPDATE_FAIL,
            payload: message,
        })
    }
}