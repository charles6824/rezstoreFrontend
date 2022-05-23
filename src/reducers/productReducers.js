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
    PRODUCT_CREATE_REVIEW_RESET,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_RESET,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_RESET,
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
} from '../constants/productConstants'

export const productTopRatedReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_TOP_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_TOP_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_TOP_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productWomenReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_WOMEN_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_WOMEN_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_WOMEN_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productMenReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_MEN_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_MEN_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_MEN_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productNewReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_NEW_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_NEW_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_NEW_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productJoggersReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_JOGGERS_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_JOGGERS_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_JOGGERS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productShortsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_SHORTS_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_SHORTS_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_SHORTS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productHoodiesReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_HOODIES_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_HOODIES_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_HOODIES_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productOthersReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_OTHERS_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_OTHERS_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_OTHERS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productNewArrivalsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_ARRIVAL_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_ARRIVAL_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                pages: action.payload.pages,
                page: action.payload.page,
            }
        case PRODUCT_ARRIVAL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productCategoriesReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_CATEGORY_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_CATEGORY_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                pages: action.payload.pages,
                page: action.payload.page,
            }
        case PRODUCT_CATEGORY_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
export const productBrandsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_BRAND_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_BRAND_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                pages: action.payload.pages,
                page: action.payload.page,
            }
        case PRODUCT_BRAND_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productDetailsReducer = (
        state = { product: { reviews: [] } },
        action
    ) => {
        switch (action.type) {
            case PRODUCT_DETAILS_REQUEST:
                return { ...state, loading: true }
            case PRODUCT_DETAILS_SUCCESS:
                return { loading: false, product: action.payload }
            case PRODUCT_DETAILS_FAIL:
                return { loading: false, error: action.payload }
            default:
                return state
        }
}

export const productReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REVIEW_REQUEST:
            return { loading: true }
        case PRODUCT_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true }
        case PRODUCT_CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload }
        case PRODUCT_CREATE_REVIEW_RESET:
            return {}
        default:
            return state
    }
}

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                pages: action.payload.pages,
                page: action.payload.page,
            }
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return { loading: true }
        case PRODUCT_DELETE_SUCCESS:
            return { loading: false, success: true }
        case PRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
  
export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return { loading: true }
        case PRODUCT_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }
        case PRODUCT_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case PRODUCT_CREATE_RESET:
            return {}
        default:
            return state
    }
}
  
export const productUpdateReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return { loading: true }
        case PRODUCT_UPDATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }
        case PRODUCT_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case PRODUCT_UPDATE_RESET:
            return { product: {} }
        default:
            return state
    }
}

