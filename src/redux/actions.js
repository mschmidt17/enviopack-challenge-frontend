import axios from "axios";


export function getProducts() {
    return async function (dispatch) {
        try {
            const json = await axios.get("products.json");
            return dispatch({
                type: "GET_PRODUCTS",
                payload: json.data.productos
            })
        } catch (error) {
            console.log(error);
        }
    }
};

export function getProfile() {
    return async function (dispatch) {
        try {
            const json = await axios.get("profile.json");
            return dispatch({
                type: "GET_PROFILE",
                payload: json.data.profile
            })
        } catch (error) {
            console.log(error);
        }
    }
};


export function searchProduct(name) {
    return async function (dispatch) {
        try {
            return dispatch({
                type: "SEARCH_PRODUCT",
                payload: name
            })
        } catch (error) {
            console.log(error);
        }
    }
};

export function orderByPrice(option) {
    return async function (dispatch) {
        try {
            return dispatch({
                type: "ORDER_BY_PRICE",
                payload: option
            })
        } catch (error) {
            console.log(error);
        }
    }
};

export function addToCart(product) {
    return async function (dispatch) {
        try {
            return dispatch({
                type: "ADD_TO_CART",
                payload: product
            })
        } catch (error) {
            console.log(error);
        }
    }
};

export function deleteFromCart(product) {
    return async function (dispatch) {
        try {
            return dispatch({
                type: "DELETE_FROM_CART",
                payload: product
            })
        } catch (error) {
            console.log(error);
        }
    }
};

export function buyProduct(price) {
    return async function (dispatch) {
        try {
            return dispatch({
                type: "BUY_PRODUCT",
                payload: price
            })
        } catch (error) {
            console.log(error);
        }
    }
};
