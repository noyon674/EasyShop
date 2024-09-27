import { STOREPRODUCTS } from "../type/type"

export const storeProducts = (products)=>{
    return {
        type: STOREPRODUCTS,
        payload: products
    }
}