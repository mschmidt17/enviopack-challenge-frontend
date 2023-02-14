
const initialState = {
    products: [],
    cart: [],
    credit: 50000
};

function reducer(state=initialState, action){
    switch(action.type){
        case "GET_PRODUCTS":
            return{
                ...state,
                products: action.payload,
            }

        case "SEARCH_PRODUCT":
            return{
                ...state,
                products: state.products.filter((e) => e.includes(action.payload) )
            }

        case "ORDER_BY_PRICE":
            if(action.payload === 'all') {
                return {
                    ...state,
                   products:[...state.products]
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
                cart: [...state, action.payload]
            }

        case "DELETE_FROM_CART":
            return{
                ...state,
                cart: state.cart.filter((e) => e != action.payload)
            }

        case "BUY_PRODUCT":
            return{
                ...state,
                credit: state.credit - action.payload
            }


        default:
            return state;
    }

};

export default reducer;