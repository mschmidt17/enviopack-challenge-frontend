
const initialState = {
    products: [],
    cart: [],
    profile: {},
    credit: 50000,
    stateBuy: true,
};

function reducer(state=initialState, action){
    switch(action.type){
        case "GET_PRODUCTS":
            return{
                ...state,
                products: action.payload,
            }

        case "GET_PROFILE":
            return{
                ...state,
                profile: action.payload,
            }

        case "SEARCH_PRODUCT":
            return{
                ...state,
                products: [...state.products].filter((e) => {
                    const namesProducts = e.title.toUpperCase();
                    if (namesProducts.includes(action.payload.toUpperCase())) return namesProducts;
                })
            }

        case "ORDER_BY_PRICE":
            if(action.payload === 'all') {
                return {
                    ...state,
                   products: [...state.products].sort(() =>{return Math.random() -0.5})
                }
            }
            if (action.payload === "low") {
                return {
                    ...state,
                    products: [...state.products].sort((a, b) => {
                        if (a.price > b.price) return 1;
                        if (a.price < b.price) return -1;
                        else return 0;
                    })
                }
            }
            else {
                return {
                    ...state,
                    products: [...state.products].sort((a, b) => {
                        if (a.price < b.price) return 1;
                        if (a.price > b.price) return -1;
                        else return 0;
                    }) 
                }
            }


        case "ADD_TO_CART":
            return{
                ...state,
                cart: [...state.cart, action.payload]
            }

        case "DELETE_FROM_CART":
            return{
                ...state,
                cart: [...state.cart].filter((e) => e.id !== action.payload)
            }

        case "BUY_PRODUCT":
            if (state.credit - action.payload >= 0) {
                return{
                    ...state,
                    credit: state.credit - action.payload,
                    stateBuy: true,
                    cart: []
                }
            } else {
                return{
                    ...state,
                    stateBuy: false,
                }
            }

        default:
            return state;
    }

};

export default reducer;