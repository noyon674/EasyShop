import { ADDTOCART, DECREASEITEM, DELETEITEM, INCREASEITEM, RESETCART, STOREPRODUCTS } from "../type/type"

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
            cart: [...state.cart, {...action.payload, quantity: 1, totalPrice: action.payload.price}]
        }
        case RESETCART: return{
            ...state,
            cart: []
        }
        case INCREASEITEM: return{
            ...state,
            cart: state.cart.map(cartItem=>(
                cartItem.id === action.payload ? {...cartItem, quantity: cartItem.quantity + 1, totalPrice: cartItem.price * (cartItem.quantity+1)} : {...cartItem}
            ))
        }
        case DECREASEITEM: return{
            ...state,
            cart: state.cart.map(cartItem=>(
                cartItem.id === action.payload ? {...cartItem, quantity: cartItem.quantity - 1, totalPrice: cartItem.price * (cartItem.quantity-1)} : {...cartItem}
            ))
        }
        case DELETEITEM: return{
            ...state,
            cart: state.cart.filter(cartItem=> cartItem.id !== action.payload)
        }
        default: return state
    }
}

export default reducer;