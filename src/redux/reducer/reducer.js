import { STOREPRODUCTS } from "../type/type"

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
        default: return state
    }
}

export default reducer;