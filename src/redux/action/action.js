import { ADDTOCART, RESETCART, STOREPRODUCTS } from "../type/type"

export const storeProducts = (products)=>{
    return {
        type: STOREPRODUCTS,
        payload: products
    }
}

export const addTOCart = (product)=>{
    return {
        type: ADDTOCART,
        payload: product
    }
}

export const resetCart = ()=>{
    return {
        type: RESETCART
    }
}