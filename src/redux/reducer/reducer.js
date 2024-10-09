import { ADDTOCART, RESETCART, STOREPRODUCTS } from "../type/type"

const initialState = {
    isAuthenticated: false,
    products: [],
    cart: []
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case STOREPRODUCTS: return{
            ...state,
            products: [...state.products, action.payload]
        }
        case ADDTOCART: return{
            ...state,
            cart: [...state.cart, action.payload]
        }
        case RESETCART: return{
            ...state,
            cart: []
        }
        default: return state
    }
}

export default reducer;